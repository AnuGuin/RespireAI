# 🏆 RespireAI - Hackathon Winner

**AI-Powered Respiratory Sound Analysis for Early Disease Detection**

*3rd Winner of GenSpark 1.0*

## 🎯 Overview

RespireAI is an innovative healthcare application that uses deep learning to analyze respiratory sounds and detect various lung conditions. By simply uploading an audio recording of breathing, users can get instant AI-powered insights into potential respiratory health issues.

## 🏥 Medical Conditions Detected

Our trained neural network can identify:

- **Healthy/Normal** - No abnormal sounds detected
- **Asthma** - Wheezing and shortness of breath patterns
- **Bronchiectasis** - Chronic cough and mucus production indicators
- **Bronchiolitis** - Viral infection patterns (common in children)
- **COPD** - Chronic obstructive pulmonary disease markers
- **LRTI** - Lower respiratory tract infections
- **Pneumonia** - Infection-related breathing abnormalities

## 🚀 Features

- **Real-time Analysis** - Upload audio files and get instant predictions
- **High Accuracy** - Deep learning model trained on medical respiratory data
- **User-friendly Interface** - Modern React frontend with intuitive design
- **Confidence Scoring** - Each prediction includes confidence levels
- **Cross-platform** - Works on web browsers across all devices
- **Fast Processing** - Results in seconds, not minutes

## 🛠 Tech Stack

### Backend
- **FastAPI** - High-performance Python web framework
- **TensorFlow** - Deep learning model inference
- **Librosa** - Audio processing and feature extraction
- **NumPy** - Numerical computations
- **Uvicorn** - ASGI server

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - Beautiful component library
- **React Query** - Data fetching and caching

## 📁 Project Structure

```
breatheai/
├── backend/                 # Python FastAPI backend
│   ├── app.py              # Main application with ML model
│   ├── app_simple.py       # Simplified version for testing
│   ├── model/              # Trained TensorFlow model
│   └── requirements.txt    # Python dependencies
├── frontend/               # React TypeScript frontend
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── package.json       # Node.js dependencies
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv .venv
.venv\Scripts\activate  # Windows
# source .venv/bin/activate  # macOS/Linux
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the API server:
```bash
python app.py
```

The API will be available at `http://localhost:8001`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📡 API Endpoints

### POST /predict
Upload an audio file for respiratory analysis
- **Input**: Audio file (WAV, MP3, etc.)
- **Output**: Prediction with confidence score and description

### GET /health
Health check endpoint
- **Output**: API status and model availability

### GET /
API information and available endpoints

## 🎵 Audio Requirements

- **Format**: WAV, MP3, or other common audio formats
- **Duration**: Recommended 3-5 seconds of breathing sounds
- **Quality**: Clear recording without background noise
- **Sample Rate**: Automatically processed to 16kHz

## 🧠 Model Details

- **Architecture**: Build on top of ResNet50 a Convolutional Neural Network (CNN) designed for audio to spectrography   analysis
- **Input**: Log-mel spectrograms (128 mel bands, 345 time frames)
- **Training Data**: Medical respiratory sound datasets
- **Preprocessing**: Librosa-based feature extraction
- **Output**: 7-class classification with confidence scores

## 🏆 Hackathon Achievement

This project won the **3rd Best Project** at GenSpark 1.0 for:
- Innovative use of AI in healthcare
- Practical solution to real-world medical challenges
- Excellent technical implementation
- Strong potential for social impact

## ⚠️ Medical Disclaimer

**Important**: This application is for educational and research purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical concerns.

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Built with ❤️ by the BreatheSync team during GenSpark 1.0

---

*Making respiratory health monitoring accessible through AI innovation*
