import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Loader2, Upload, Mic, FileAudio, AlertCircle, CheckCircle, Download, FileText, FileDown, LogOut, User } from "lucide-react";
import { ApiService, PredictionResponse } from "@/lib/api";
import { downloadReport, downloadPDFReport, ReportData, PatientDetails } from "@/lib/report";
import { useNavigate } from "react-router-dom";

// Respiratory disease / breathing condition labels
const BREATHING_PATTERNS: Record<number, string> = {
  0: "Healthy / Normal",
  1: "Asthma",
  2: "Bronchiectasis",
  3: "Bronchiolitis",
  4: "COPD",
  5: "LRTI (Lower Respiratory Tract Infection)",
  6: "Pneumonia",
};

const BREATHING_DESCRIPTIONS: Record<number, string> = {
    0: "No abnormal sounds detected. Breathing appears normal.",
    1: "Asthma detected : May cause wheezing and shortness of breath.",
    2: "Bronchiectasis detected : Chronic cough and mucus production.",
    3: "Bronchiolitis detected : Often viral, common in children.",
    4: "COPD detected : Airflow obstruction with chronic cough/wheezing.",
    5: "LRTI detected : Includes bronchitis and lower airway infections.",
    6: "Pneumonia detected : Infection causing crackles, cough, and fever."
};

export default function Predict() {
  const navigate = useNavigate();
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadTime, setUploadTime] = useState<string>('');
  const [analysisTime, setAnalysisTime] = useState<string>('');
  const [downloadingReport, setDownloadingReport] = useState(false);
  const [patientDetails, setPatientDetails] = useState<PatientDetails | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check authentication and load patient details on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserEmail = localStorage.getItem('userEmail');
    const storedPatientDetails = localStorage.getItem('patientDetails');

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }

    if (storedPatientDetails) {
      try {
        setPatientDetails(JSON.parse(storedPatientDetails));
      } catch (err) {
        console.error('Error parsing patient details:', err);
      }
    }

    checkApiStatus();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('patientDetails');
    navigate('/login');
  };

  const checkApiStatus = async () => {
    try {
      await ApiService.healthCheck();
      setApiStatus('online');
    } catch (err) {
      setApiStatus('offline');
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadTime(new Date().toLocaleString());
    await sendToBackend(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('audio/')) {
        setSelectedFile(file);
        setUploadTime(new Date().toLocaleString());
        await sendToBackend(file);
      } else {
        setError('Please select an audio file');
      }
    }
  };

  const sendToBackend = async (file: File) => {
    setLoading(true);
    setPrediction(null);
    setError(null);
    const startTime = Date.now();

    try {
      const result = await ApiService.predictAudio(file);
      setPrediction(result);
      setAnalysisTime(`${((Date.now() - startTime) / 1000).toFixed(1)}s`);
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Could not analyze audio");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadReport = async (format: 'text' | 'pdf') => {
    if (!prediction || !selectedFile) return;
    
    setDownloadingReport(true);
    try {
      const reportData: ReportData = {
        prediction,
        fileName: selectedFile.name,
        fileSize: `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`,
        uploadTime,
        analysisTime,
        patientDetails: patientDetails || undefined
      };

      if (format === 'text') {
        downloadReport(reportData);
      } else {
        await downloadPDFReport(reportData);
      }
    } catch (error) {
      console.error('Error downloading report:', error);
      setError('Failed to download report');
    } finally {
      setDownloadingReport(false);
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    if (confidence >= 0.7) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
  };

  const getPatternColor = (pattern: number) => {
    switch (pattern) {
      case 0: return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"; // Normal
      case 1: return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"; // Wheezing
      case 2: return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"; // Crackles
      case 3: return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"; // Stridor
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">RespireAI</span> Analysis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Upload or record your breathing audio for AI-powered respiratory analysis
          </p>
        </div>

        {/* User Info and Logout - Moved to top right */}
        <div className="absolute top-6 right-6 flex items-center space-x-4">
          {userEmail && (
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <User className="h-4 w-4" />
              <span>{userEmail}</span>
            </div>
          )}
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>

        {/* Patient Info Card */}
        {patientDetails && (
          <Card className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white text-xl">
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span>Patient Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Name:</span>
                  <p className="text-gray-900 dark:text-white">{patientDetails.name}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Age:</span>
                  <p className="text-gray-900 dark:text-white">{patientDetails.age}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Patient ID:</span>
                  <p className="text-gray-900 dark:text-white">{patientDetails.patientId}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700 dark:text-gray-300">Gender:</span>
                  <p className="text-gray-900 dark:text-white capitalize">{patientDetails.gender}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* API Status */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          {apiStatus === 'checking' && <Loader2 className="h-4 w-4 animate-spin" />}
          {apiStatus === 'online' && <CheckCircle className="h-4 w-4 text-green-500" />}
          {apiStatus === 'offline' && <AlertCircle className="h-4 w-4 text-red-500" />}
          <span className="text-sm text-gray-600 dark:text-gray-300">
            API Status: {apiStatus === 'online' ? 'Connected' : apiStatus === 'offline' ? 'Disconnected' : 'Checking...'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Upload Section */}
          <Card className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white text-xl">
                <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span>Upload Audio File</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-pointer bg-gray-50 dark:bg-gray-700"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <FileAudio className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {selectedFile ? selectedFile.name : "Click to select or drag audio file here"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Supports: WAV, MP3, M4A, FLAC</p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              {selectedFile && (
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <FileAudio className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{selectedFile.name}</span>
                  </div>
                  <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </Badge>
                </div>
              )}

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white text-xl">
                <Mic className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span>Analysis Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                  <p className="text-gray-600 dark:text-gray-300">Analyzing your breathing pattern...</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">This may take a few seconds</p>
                </div>
              ) : prediction ? (
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <Badge className={`text-lg px-4 py-2 ${getPatternColor(prediction.predicted_class)}`}>
                      {BREATHING_PATTERNS[prediction.predicted_class as keyof typeof BREATHING_PATTERNS]}
                    </Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {BREATHING_DESCRIPTIONS[prediction.predicted_class as keyof typeof BREATHING_DESCRIPTIONS]}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Confidence:</span>
                      <Badge className={getConfidenceColor(prediction.confidence)}>
                        {(prediction.confidence * 100).toFixed(1)}%
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">All Pattern Probabilities:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {prediction.raw_predictions.map((prob, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700 dark:text-gray-300">{BREATHING_PATTERNS[index as keyof typeof BREATHING_PATTERNS]}:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{(prob * 100).toFixed(1)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Report Download Section */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Download Report</h4>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => handleDownloadReport('text')}
                          disabled={downloadingReport}
                          size="sm"
                          variant="outline"
                          className="flex items-center space-x-2"
                        >
                          <FileText className="h-4 w-4" />
                          <span>Text Report</span>
                        </Button>
                        <Button
                          onClick={() => handleDownloadReport('pdf')}
                          disabled={downloadingReport}
                          size="sm"
                          variant="outline"
                          className="flex items-center space-x-2"
                        >
                          <FileDown className="h-4 w-4" />
                          <span>PDF Report</span>
                        </Button>
                      </div>
                      {downloadingReport && (
                        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Generating report...</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      ⚠️ This is an early diagnosis tool. For medical diagnosis, please consult a healthcare professional.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <FileAudio className="h-12 w-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                  <p>Upload an audio file to see analysis results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
