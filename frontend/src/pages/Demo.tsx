
import React from 'react';
import { Construction, Github, PlayCircle, FileText, Users, Calendar } from 'lucide-react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-4 rounded-full">
              <Construction className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Demo</span> Under Development
          </h1>
          
          <div className="bg-orange-100 border border-orange-300 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <p className="text-xl text-orange-800 font-semibold mb-2">🚧 Demo Coming Soon!</p>
            <p className="text-orange-700">
              We're putting the finishing touches on our interactive demo. Check back soon to experience RespireAI in action!
            </p>
          </div>
        </div>

        {/* What to Expect */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">What to Expect in Our Demo</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Audio Recording</h3>
                <p className="text-gray-600">Experience our user-friendly interface for recording cough and breath samples</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analysis</h3>
                <p className="text-gray-600">Watch as our AI processes your audio and generates instant diagnostic insights</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sample Results Dashboard</h3>
                <p className="text-gray-600">Explore example results showing probability scores and medical recommendations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Progress */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Development Progress</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">○</span>
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Core AI Model Development</h3>
                  <p className="text-gray-600">Machine learning models trained and validated</p>
                </div>
                <div className="text-orange-600 font-semibold">Upcoming</div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">○</span>
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Backend API Development</h3>
                  <p className="text-gray-600">RESTful API endpoints and audio processing pipeline</p>
                </div>
                <div className="text-orange-600 font-semibold">Upcoming</div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⟳</span>
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Frontend Integration</h3>
                  <p className="text-gray-600">Connecting user interface with backend services</p>
                </div>
                <div className="text-blue-600 font-semibold">In Progress</div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">○</span>
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Security & Compliance Testing</h3>
                  <p className="text-gray-600">HIPAA compliance validation and security audits</p>
                </div>
                <div className="text-orange-600 font-semibold">Upcoming</div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">○</span>
                </div>
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">Beta Testing & Optimization</h3>
                  <p className="text-gray-600">Performance optimization and user experience testing</p>
                </div>
                <div className="text-gray-500 font-semibold">Planned</div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Launch Timeline</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Beta Release</h3>
                <p className="text-blue-100 mb-2">Limited beta testing with healthcare partners</p>
                <div className="text-lg font-bold">Q1 2025</div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Public Demo</h3>
                <p className="text-blue-100 mb-2">Interactive demo available to the public</p>
                <div className="text-lg font-bold">Q2 2025</div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full Launch</h3>
                <p className="text-blue-100 mb-2">Complete platform available worldwide</p>
                <div className="text-lg font-bold">Q3 2025</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Be the first to know when our demo goes live. Follow our development progress and get early access.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Github className="h-5 w-5 mr-2" />
                View Code on GitHub
              </button>
              
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;
