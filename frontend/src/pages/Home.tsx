
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Brain, Shield, Zap, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 rounded-2xl shadow-2xl">
                <Mic className="h-16 w-16 text-white" />
              </div>
            </div>
                         <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
               RespireAI
             </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered respiratory analysis for early detection and monitoring of breathing patterns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                         <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
               Why Choose RespireAI?
             </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology meets medical expertise for comprehensive respiratory health monitoring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced machine learning algorithms analyze breathing patterns with high accuracy
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Early Detection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify respiratory issues early for better treatment outcomes
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-time Results</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant analysis results with detailed reports and recommendations
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Patient-Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Easy-to-use interface designed for patients and healthcare providers
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="bg-red-100 dark:bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Medical Grade</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built with medical standards in mind for reliable healthcare applications
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Audio Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Analyze breathing sounds from any audio recording device
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Respiratory Health Journey?
          </h2>
                     <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
             Join thousands of users who trust RespireAI for their respiratory health monitoring
           </p>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
          >
            Start Analysis Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
