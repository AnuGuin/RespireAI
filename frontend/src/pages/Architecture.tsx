
import React from 'react';
import { Globe, Server, Brain, Database, Smartphone, ArrowRight } from 'lucide-react';

const Architecture = () => {
  const components = [
    {
      icon: Smartphone,
      title: "Frontend Client",
      description: "Web & Mobile Interface",
      details: [
        "React-based web application",
        "Responsive mobile design",
        "Audio recording interface",
        "Real-time result display"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Web Audio API"],
      color: "blue"
    },
    {
      icon: Server,
      title: "API Gateway",
      description: "Backend Services",
      details: [
        "RESTful API endpoints",
        "Authentication & authorization",
        "Request routing & validation",
        "Rate limiting & security"
      ],
      tech: ["Flask/FastAPI", "Python", "JWT Auth", "CORS"],
      color: "teal"
    },
    {
      icon: Brain,
      title: "AI Engine",
      description: "Machine Learning Core",
      details: [
        "Audio preprocessing pipeline",
        "Feature extraction algorithms",
        "Multiple ML model ensemble",
        "Real-time inference engine"
      ],
      tech: ["TensorFlow", "Librosa", "NumPy", "Scikit-learn"],
      color: "purple"
    },
    {
      icon: Database,
      title: "Data Layer",
      description: "Storage & Analytics",
      details: [
        "Model artifacts storage",
        "Metadata management",
        "Analytics & monitoring",
        "Backup & recovery"
      ],
      tech: ["PostgreSQL", "Redis", "Cloud Storage", "Monitoring"],
      color: "green"
    }
  ];

  const dataFlow = [
    "User records audio sample",
    "Audio uploaded to secure API",
    "Preprocessing & feature extraction",
    "AI model analysis & prediction",
    "Results formatted & returned",
    "User receives diagnosis"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-600",
      teal: "from-teal-500 to-teal-600 bg-teal-100 text-teal-600",
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-600",
      green: "from-green-500 to-green-600 bg-green-100 text-green-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            System <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Architecture</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A robust, scalable architecture designed for high-performance respiratory sound analysis
          </p>
        </div>

        {/* Architecture Overview */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              High-Level Architecture
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {components.map((component, index) => (
                <div key={index} className="relative">
                  <div className={`bg-white border-2 ${getColorClasses(component.color).split(' ')[4]} rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300`}>
                    <div className={`${getColorClasses(component.color).split(' ')[2]} ${getColorClasses(component.color).split(' ')[3]} p-3 rounded-lg w-fit mb-4`}>
                      <component.icon className={`h-8 w-8 ${getColorClasses(component.color).split(' ')[3]}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{component.title}</h3>
                    <p className="text-gray-600 mb-4">{component.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {component.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 bg-gradient-to-r ${getColorClasses(component.color).split(' ')[0]} ${getColorClasses(component.color).split(' ')[1]}`}></div>
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-1">
                        {component.tech.map((tech, techIndex) => (
                          <span key={techIndex} className={`text-xs px-2 py-1 rounded ${getColorClasses(component.color).split(' ')[2]} ${getColorClasses(component.color).split(' ')[3]}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  {index < components.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Flow */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Data Processing Flow
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataFlow.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium">{step}</p>
                  </div>
                  
                  {/* Flow Arrow */}
                  {index < dataFlow.length - 1 && index % 3 !== 2 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Pipeline */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Processing Pipeline</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">1. Audio Preprocessing</h4>
                  <p className="text-gray-600 text-sm">Noise reduction, normalization, and quality enhancement</p>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">2. Feature Extraction</h4>
                  <p className="text-gray-600 text-sm">MFCC, spectral features, and time-domain analysis</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">3. Model Inference</h4>
                  <p className="text-gray-600 text-sm">Ensemble of specialized neural networks for condition detection</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">4. Result Processing</h4>
                  <p className="text-gray-600 text-sm">Probability calculation, confidence scoring, and recommendation generation</p>
                </div>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Security & Compliance</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">End-to-End Encryption</h4>
                    <p className="text-gray-600 text-sm">All data transmission encrypted using TLS 1.3</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">HIPAA Compliance</h4>
                    <p className="text-gray-600 text-sm">Healthcare data privacy and security standards</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3 mt-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Data Anonymization</h4>
                    <p className="text-gray-600 text-sm">Personal identifiers removed from processing pipeline</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 p-2 rounded-lg mr-3 mt-1">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Audit Logging</h4>
                    <p className="text-gray-600 text-sm">Comprehensive activity monitoring and compliance tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Deployment Strategy</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend Deployment</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Static hosting on Netlify/Vercel</li>
                  <li>• Global CDN for fast loading</li>
                  <li>• Progressive Web App (PWA) support</li>
                  <li>• Automated CI/CD pipeline</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend Deployment</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Container-based deployment (Docker)</li>
                  <li>• Auto-scaling on Railway/Render</li>
                  <li>• Load balancing and health checks</li>
                  <li>• Monitoring and alerting systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Architecture;
