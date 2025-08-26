# main.py
from fastapi import FastAPI, UploadFile, File 
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
import io
import random

app = FastAPI(title="BreatheAI Inference API (Simplified)")

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Mock Model Response ----
def mock_predict_audio(file_bytes):
    """
    Mock prediction function that returns random results for testing.
    In production, this would use the actual TensorFlow model.
    """
    # Simulate processing time
    import time
    time.sleep(0.5)
    
    # Return random prediction (0-3 for different breathing patterns)
    predicted_class = random.randint(0, 3)
    confidence = random.uniform(0.7, 0.95)
    
    # Create mock raw predictions array
    raw_predictions = [0.0] * 4
    raw_predictions[predicted_class] = confidence
    
    return predicted_class, confidence, raw_predictions

# ---- API Endpoint ----
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Receives an audio file, processes it, and returns a mock prediction.
    """
    try:
        print(f"Received file: {file.filename}, content_type: {file.content_type}, size: {file.size}")
        
        file_bytes = await file.read()
        print(f"File read successfully, bytes length: {len(file_bytes)}")
        
        # Validate file type
        if not file.content_type.startswith('audio/'):
            print(f"Invalid file type: {file.content_type}")
            return JSONResponse(
                status_code=400, 
                content={"error": f"File must be an audio file, received: {file.content_type}"}
            )
        
        # Mock prediction
        print("Starting mock prediction...")
        predicted_class, confidence, raw_predictions = mock_predict_audio(file_bytes)
        print(f"Prediction complete: class={predicted_class}, confidence={confidence}")
        
        return JSONResponse(content={
            "predicted_class": predicted_class,
            "confidence": confidence,
            "raw_predictions": raw_predictions
        })
        
    except Exception as e:
        print(f"Error in predict endpoint: {str(e)}")
        import traceback
        traceback.print_exc()
        return JSONResponse(status_code=500, content={"error": str(e)})

# ---- Health Check Endpoint ----
@app.get("/health")
async def health_check():
    """
    A simple endpoint to verify that the API is running.
    """
    return {"status": "healthy", "message": "BreatheAI API is running"}

# ---- API Info Endpoint ----
@app.get("/")
async def root():
    """
    Root endpoint that provides basic API information.
    """
    return {
        "message": "BreatheAI Inference API",
        "version": "1.0.0",
        "endpoints": {
            "predict": "/predict",
            "health": "/health"
        }
    }

# ---- Run locally ----
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
