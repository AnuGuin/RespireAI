import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, User, Lock, Mic, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PatientDetails } from "@/lib/report";

interface LoginFormData {
  email: string;
  password: string;
}

interface PatientFormData {
  name: string;
  age: string;
  gender: 'male' | 'female' | 'other';
  patientId: string;
  dateOfBirth: string;
  contactNumber: string;
  email: string;
  address: string;
  medicalHistory: string;
  currentMedications: string;
  allergies: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Login form state
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  
  // Patient registration form state
  const [patientData, setPatientData] = useState<PatientFormData>({
    name: '',
    age: '',
    gender: 'male',
    patientId: '',
    dateOfBirth: '',
    contactNumber: '',
    email: '',
    address: '',
    medicalHistory: '',
    currentMedications: '',
    allergies: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate login process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any email/password
      if (loginData.email && loginData.password) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', loginData.email);
        navigate('/predict');
      } else {
        setError('Please enter both email and password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePatientRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate required fields
      if (!patientData.name || !patientData.age || !patientData.patientId || !patientData.email) {
        setError('Please fill in all required fields');
        return;
      }

      // Simulate registration process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store patient details
      const patientDetails: PatientDetails = {
        name: patientData.name,
        age: parseInt(patientData.age),
        gender: patientData.gender,
        patientId: patientData.patientId,
        dateOfBirth: patientData.dateOfBirth,
        contactNumber: patientData.contactNumber,
        email: patientData.email,
        address: patientData.address,
        medicalHistory: patientData.medicalHistory,
        currentMedications: patientData.currentMedications,
        allergies: patientData.allergies
      };
      
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', patientData.email);
      localStorage.setItem('patientDetails', JSON.stringify(patientDetails));
      
      navigate('/predict');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof LoginFormData | keyof PatientFormData, value: string) => {
    if (isLogin) {
      setLoginData(prev => ({ ...prev, [field]: value }));
    } else {
      setPatientData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-lg">
              <Mic className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                         {isLogin ? 'Sign in to RespireAI' : 'Patient Registration'}
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {isLogin 
              ? 'Access your respiratory analysis dashboard'
              : 'Create your patient profile for personalized reports'
            }
          </p>
        </div>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-gray-900 dark:text-white">
              {isLogin ? 'Login' : 'Patient Information'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            ) : (
              <form onSubmit={handlePatientRegistration} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name *</Label>
                    <Input
                      id="name"
                      value={patientData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age" className="text-gray-700 dark:text-gray-300">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={patientData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      placeholder="25"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gender" className="text-gray-700 dark:text-gray-300">Gender</Label>
                    <Select value={patientData.gender} onValueChange={(value: 'male' | 'female' | 'other') => handleInputChange('gender', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="patientId" className="text-gray-700 dark:text-gray-300">Patient ID *</Label>
                    <Input
                      id="patientId"
                      value={patientData.patientId}
                      onChange={(e) => handleInputChange('patientId', e.target.value)}
                      placeholder="P12345"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dateOfBirth" className="text-gray-700 dark:text-gray-300">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={patientData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactNumber" className="text-gray-700 dark:text-gray-300">Contact Number</Label>
                    <Input
                      id="contactNumber"
                      value={patientData.contactNumber}
                      onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                      placeholder="+1234567890"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={patientData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-gray-700 dark:text-gray-300">Address</Label>
                  <Textarea
                    id="address"
                    value={patientData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter your full address"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="medicalHistory" className="text-gray-700 dark:text-gray-300">Medical History</Label>
                  <Textarea
                    id="medicalHistory"
                    value={patientData.medicalHistory}
                    onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                    placeholder="Previous medical conditions, surgeries, etc."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="currentMedications" className="text-gray-700 dark:text-gray-300">Current Medications</Label>
                  <Textarea
                    id="currentMedications"
                    value={patientData.currentMedications}
                    onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                    placeholder="List current medications and dosages"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="allergies" className="text-gray-700 dark:text-gray-300">Allergies</Label>
                  <Textarea
                    id="allergies"
                    value={patientData.allergies}
                    onChange={(e) => handleInputChange('allergies', e.target.value)}
                    placeholder="Known allergies (medications, foods, etc.)"
                    rows={2}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Profile...
                    </>
                  ) : (
                    'Create Profile'
                  )}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                }}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
              >
                {isLogin 
                  ? "Don't have an account? Register as Patient"
                  : "Already have an account? Sign in"
                }
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
