
import React from 'react';
import { Mic, Brain, FileText, UserCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Upload Audio",
      description: "Upload your breathing sound sample. The process takes just 10-15 seconds.",
      details: [
        "Follow simple on-screen instructions",
        "Works with any standard microphone",
        "No special equipment required",
        "Multiple recording attempts allowed"
      ],
      color: "blue"
    },
    {
      icon: Brain,
      title: "AI Processing",
      description: "Our advanced machine learning algorithms analyze your audio sample using sophisticated signal processing techniques.",
      details: [
        "Real-time audio analysis",
        "Pattern recognition algorithms",
        "Comparison with medical databases",
        "Multiple AI models working together"
      ],
      color: "teal"
    },
    {
      icon: FileText,
      title: "Instant Analysis",
      description: "Receive immediate results showing probability scores for various respiratory conditions with detailed explanations.",
      details: [
        "Condition probability scores",
        "Confidence indicators",
        "Visual result presentations",
        "Easy-to-understand reports"
      ],
      color: "green"
    },
    {
      icon: UserCheck,
      title: "Medical Guidance",
      description: "Get personalized recommendations and advice on next steps, including when to consult healthcare professionals.",
      details: [
        "Personalized recommendations",
        "Doctor consultation advice",
        "Follow-up guidelines",
        "Emergency situation alerts"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-600",
      teal: "from-teal-500 to-teal-600 bg-teal-100 text-teal-600",
      green: "from-green-500 to-green-600 bg-green-100 text-green-600",
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">RespireAI</span> Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our simple 4-step process transforms respiratory sound analysis into actionable health insights
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  {index + 1}
                </div>
                <div className="h-px bg-gradient-to-r from-blue-600 to-teal-500 flex-grow"></div>
              </div>

              {/* Step Content */}
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <div className={`${getColorClasses(step.color).split(' ')[2]} ${getColorClasses(step.color).split(' ')[3]} dark:bg-opacity-20 p-4 rounded-lg mr-4`}>
                        <step.icon className={`h-8 w-8 ${getColorClasses(step.color).split(' ')[3]}`} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{step.title}</h2>
                    </div>
                    
                                         <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>
                     
                     <ul className="space-y-3">
                       {step.details.map((detail, detailIndex) => (
                         <li key={detailIndex} className="flex items-center">
                           <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${getColorClasses(step.color).split(' ')[0]} ${getColorClasses(step.color).split(' ')[1]}`}></div>
                           <span className="text-gray-700 dark:text-white">{detail}</span>
                         </li>
                       ))}
                     </ul>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br ${getColorClasses(step.color).split(' ')[0]} ${getColorClasses(step.color).split(' ')[1]} p-12 rounded-2xl text-white`}>
                    <div className="text-center">
                      <step.icon className="h-24 w-24 mx-auto mb-6 text-white/80" />
                      <h3 className="text-2xl font-bold mb-4">Step {index + 1}</h3>
                      <p className="text-white/90 text-lg">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Overview */}
        <section className="mt-20">
          <div className="bg-black rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              The Science Behind RespireAI
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">AI</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
                <p className="text-gray-300">
                  Advanced neural networks trained on thousands of respiratory sound samples for accurate pattern recognition.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 dark:bg-teal-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">DSP</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Signal Processing</h3>
                <p className="text-gray-300">
                  Sophisticated audio analysis techniques extract meaningful features from respiratory sounds.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">MD</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Medical Validation</h3>
                <p className="text-gray-300">
                  Clinically validated algorithms developed in collaboration with respiratory medicine specialists.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
