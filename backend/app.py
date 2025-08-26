import uvicorn
import numpy as np
import librosa
import tensorflow as tf
import io
import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.logger import logger as fastapi_logger

# ---- 2. Configuration & Constants ----
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model", "respireAI_2.keras")

TARGET_SAMPLE_RATE = 16000
N_MELS = 128
N_FRAMES = 345
MAX_AUDIO_DURATION_SECONDS = 5

LABELS = {
    0: "Healthy / Normal",
    1: "Asthma",
    2: "Bronchiectasis",
    3: "Bronchiolitis",
    4: "COPD",
    5: "LRTI (Lower Respiratory Tract Infection)",
    6: "Pneumonia"
}

DESCRIPTIONS = {
    0: "No abnormal sounds detected. Breathing appears normal.",
    1: "Asthma detected : May cause wheezing and shortness of breath.",
    2: "Bronchiectasis detected : Chronic cough and mucus production.",
    3: "Bronchiolitis detected : Often viral, common in children.",
    4: "COPD detected : Airflow obstruction with chronic cough/wheezing.",
    5: "LRTI detected : Includes bronchitis and lower airway infections.",
    6: "Pneumonia detected : Infection causing crackles, cough, and fever."
}

# ---- 3. Application Initialization ----
app = FastAPI(
    title="BreatheAI Inference API",
    description="API for classifying respiratory sounds using a trained deep learning model.",
    version="2.0.0"
)

# ---- 4. CORS Middleware ----
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# ---- 5. Load Model at Startup ----
try:
    fastapi_logger.info(f"Loading model from: {MODEL_PATH}")
    if not os.path.exists(MODEL_PATH):
        raise FileNotFoundError(f"Model file not found at: {MODEL_PATH}")
    model = tf.keras.models.load_model(MODEL_PATH)
    fastapi_logger.info("✅ Model loaded successfully.")
except Exception as e:
    fastapi_logger.critical(f"❌ Failed to load model: {e}")
    model = None


# ---- 6. Preprocessing Function ----
def preprocess_audio(file_bytes: bytes, target_sr=TARGET_SAMPLE_RATE, n_mels=N_MELS, n_frames=N_FRAMES):
    """Convert raw audio bytes into log-mel spectrogram features matching model input."""
    y, sr = librosa.load(io.BytesIO(file_bytes), sr=target_sr, mono=True)

    mel_spec = librosa.feature.melspectrogram(y=y, sr=sr, n_mels=n_mels)
    log_mel_spec = librosa.power_to_db(mel_spec, ref=np.max)

    # Normalize time dimension (pad or trim)
    if log_mel_spec.shape[1] > n_frames:
        log_mel_spec = log_mel_spec[:, :n_frames]
    else:
        log_mel_spec = np.pad(log_mel_spec, ((0, 0), (0, n_frames - log_mel_spec.shape[1])))

    # Scale between 0 and 1
    log_mel_spec = (log_mel_spec - log_mel_spec.min()) / (log_mel_spec.max() - log_mel_spec.min())

    return np.expand_dims(log_mel_spec, axis=(0, -1))  # Shape: (1, 128, 345, 1)


# ---- 7. API Endpoints ----
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """Accepts an audio file and returns the predicted respiratory condition."""
    if model is None:
        raise HTTPException(status_code=503, detail="Model is not available or failed to load.")

    if not file.content_type.startswith("audio/"):
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload an audio file.")

    try:
        file_bytes = await file.read()

        # Preprocess
        features = preprocess_audio(file_bytes)
        fastapi_logger.info(f"Input features shape: {features.shape}, dtype: {features.dtype}")

        # Predict
        predictions = model.predict(features)
        predicted_class_index = int(np.argmax(predictions, axis=1)[0])
        confidence = float(np.max(predictions))

        return JSONResponse(content={
            "predicted_class": predicted_class_index,
            "label": LABELS[predicted_class_index],
            "description": DESCRIPTIONS[predicted_class_index],
            "confidence": round(confidence, 4),
            "raw_predictions": predictions.tolist()[0]
        })

    except Exception as e:
        fastapi_logger.error(f"Error during prediction: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Internal server error: {e}")


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "message": "BreatheAI API is running",
        "model_status": "loaded" if model else "not loaded"
    }


@app.get("/")
async def root():
    """Root API info endpoint."""
    return {
        "message": "BreatheAI Inference API",
        "version": "2.0.0",
        "docs_url": "/docs"
    }


# ---- 8. Run Locally ----
if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8001, reload=True)
