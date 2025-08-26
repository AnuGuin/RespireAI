import React from 'react';
import { Mic, Smartphone, Zap, Shield, Globe, TrendingUp, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const primaryFeatures = [
    {
      icon: Mic,
      title: "Audio-Based Diagnosis",
      description: "Non-invasive analysis using only respiratory sounds",
      benefits: [
        "No physical contact required",
        "Comfortable for all patients",
        "Can be done from home",
        "Suitable for all age groups"
      ],
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Multi-Platform Access",
      description: "Works seamlessly on smartphones and web browsers",
      benefits: [
        "iOS and Android compatible",
        "Web browser access",
        "No app installation required",
        "Cross-device synchronization"
      ],
      color: "teal"
    },
    {
      icon: Zap,
      title: "Lightning Fast Results",
      description: "Get instant analysis and recommendations",
      benefits: [
        "Results in under 30 seconds",
        "Real-time processing",
        "Immediate recommendations",
        "No waiting for lab results"
      ],
      color: "yellow"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your health data is completely secure and private",
      benefits: [
        "End-to-end encryption",
        "No data storage on servers",
        "HIPAA compliant processing",
        "Anonymous analysis option"
      ],
      color: "green"
    }
  ];

  const additionalFeatures = [
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Available worldwide with multilingual support"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "AI models improve with each analysis performed"
    },
    {
      icon: Users,
      title: "Healthcare Integration",
      description: "Easy integration with existing medical workflows"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access respiratory analysis anytime, anywhere"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-600 border-blue-200",
      teal: "from-teal-500 to-teal-600 bg-teal-100 text-teal-600 border-teal-200",
      yellow: "from-yellow-500 to-yellow-600 bg-yellow-100 text-yellow-600 border-yellow-200",
      green: "from-green-500 to-green-600 bg-green-100 text-green-600 border-green-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">RespireAI</span> Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the powerful capabilities that make RespireAI the leading solution for respiratory sound analysis
          </p>
        </div>

        {/* Primary Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Core Features</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {primaryFeatures.map((feature, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-l-4 ${getColorClasses(feature.color).split(' ')[4]} hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center mb-6">
                  <div className={`${getColorClasses(feature.color).split(' ')[2]} ${getColorClasses(feature.color).split(' ')[3]} dark:bg-opacity-20 p-4 rounded-lg mr-4`}>
                    <feature.icon className={`h-8 w-8 ${getColorClasses(feature.color).split(' ')[3]}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]}`}></div>
                      <span className="text-gray-700 dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Additional Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Technical Specifications</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">85%+</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Accuracy Rate</h3>
                <p className="text-gray-600 dark:text-gray-300">Clinically validated accuracy for respiratory condition detection</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">&lt;30s</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Analysis Time</h3>
                <p className="text-gray-600 dark:text-gray-300">Lightning-fast processing for immediate results</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Conditions Detected</h3>
                <p className="text-gray-600 dark:text-gray-300">Asthma, Bronchitis, Pneumonia, COPD, and more</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">8kHz+</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Audio Quality</h3>
                <p className="text-gray-600 dark:text-gray-300">High-quality audio processing for accurate analysis</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Uptime</h3>
                <p className="text-gray-600 dark:text-gray-300">Reliable service availability when you need it</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">24/7</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Support</h3>
                <p className="text-gray-600 dark:text-gray-300">Round-the-clock technical and medical support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-lg p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Experience RespireAI Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                             Join thousands of users who trust RespireAI for their respiratory health monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/predict"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Try AI Analysis
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
