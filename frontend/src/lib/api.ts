const API_BASE_URL = 'http://localhost:8001';

export interface PredictionResponse {
  predicted_class: number;
  label: string;
  description: string;
  confidence: number;
  raw_predictions: number[];
}

export interface ApiError {
  error: string;
}

export class ApiService {
  static async predictAudio(file: File): Promise<PredictionResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  static async healthCheck(): Promise<{ status: string; message: string; model_status: string }> {
    const response = await fetch(`${API_BASE_URL}/health`);
    
    if (!response.ok) {
      throw new Error(`Health check failed: ${response.status}`);
    }

    return response.json();
  }

  static async getApiInfo(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/`);
    
    if (!response.ok) {
      throw new Error(`API info request failed: ${response.status}`);
    }

    return response.json();
  }
}
