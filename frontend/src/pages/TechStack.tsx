
import React from 'react';
import { Code, Globe, Server, Brain, Database, Cloud, Shield, Monitor } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      icon: Globe,
      title: "Frontend Technologies",
      description: "Modern web technologies for responsive user interfaces",
      technologies: [
        { name: "React", description: "Component-based UI library", category: "Framework" },
        { name: "TypeScript", description: "Type-safe JavaScript development", category: "Language" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", category: "Styling" },
        { name: "Vite", description: "Fast build tool and dev server", category: "Build Tool" },
        { name: "Web Audio API", description: "Browser audio recording capabilities", category: "API" }
      ],
      color: "blue"
    },
    {
      icon: Server,
      title: "Backend Services",
      description: "Robust server-side architecture for API and business logic",
      technologies: [
        { name: "Flask/FastAPI", description: "Python web frameworks", category: "Framework" },
        { name: "Python", description: "Primary backend programming language", category: "Language" },
        { name: "JWT", description: "Secure authentication tokens", category: "Security" },
        { name: "CORS", description: "Cross-origin resource sharing", category: "Security" },
        { name: "REST API", description: "RESTful web service architecture", category: "Architecture" }
      ],
      color: "teal"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced algorithms for respiratory sound analysis",
      technologies: [
        { name: "TensorFlow", description: "Deep learning framework", category: "ML Framework" },
        { name: "Librosa", description: "Audio analysis library", category: "Audio Processing" },
        { name: "NumPy", description: "Numerical computing library", category: "Data Science" },
        { name: "Scikit-learn", description: "Machine learning utilities", category: "ML Tools" },
        { name: "Pandas", description: "Data manipulation and analysis", category: "Data Science" }
      ],
      color: "purple"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure and efficient data storage solutions",
      technologies: [
        { name: "PostgreSQL", description: "Relational database system", category: "Database" },
        { name: "Redis", description: "In-memory data structure store", category: "Cache" },
        { name: "Cloud Storage", description: "Scalable file storage", category: "Storage" },
        { name: "SQLAlchemy", description: "Python SQL toolkit", category: "ORM" },
        { name: "Alembic", description: "Database migration tool", category: "Migration" }
      ],
      color: "green"
    },
    {
      icon: Cloud,
      title: "Deployment & Infrastructure",
      description: "Scalable cloud deployment and hosting solutions",
      technologies: [
        { name: "Netlify", description: "Frontend hosting platform", category: "Hosting" },
        { name: "Railway/Render", description: "Backend deployment platform", category: "Hosting" },
        { name: "Docker", description: "Containerization platform", category: "DevOps" },
        { name: "GitHub Actions", description: "CI/CD automation", category: "DevOps" },
        { name: "CDN", description: "Content delivery network", category: "Performance" }
      ],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Healthcare-grade security and privacy protection",
      technologies: [
        { name: "TLS 1.3", description: "Transport layer security", category: "Encryption" },
        { name: "HIPAA", description: "Healthcare compliance standards", category: "Compliance" },
        { name: "OAuth 2.0", description: "Secure authorization framework", category: "Auth" },
        { name: "Rate Limiting", description: "API protection mechanisms", category: "Security" },
        { name: "Data Encryption", description: "End-to-end data protection", category: "Encryption" }
      ],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-600 border-blue-200",
      teal: "from-teal-500 to-teal-600 bg-teal-100 text-teal-600 border-teal-200",
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-600 border-purple-200",
      green: "from-green-500 to-green-600 bg-green-100 text-green-600 border-green-200",
      orange: "from-orange-500 to-orange-600 bg-orange-100 text-orange-600 border-orange-200",
      red: "from-red-500 to-red-600 bg-red-100 text-red-600 border-red-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technology <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Stack</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built with cutting-edge technologies to deliver reliable, scalable, and secure respiratory health analysis
          </p>
        </div>

        {/* Tech Stack Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className={`${getColorClasses(category.color).split(' ')[2]} ${getColorClasses(category.color).split(' ')[3]} dark:bg-opacity-20 p-4 rounded-lg mr-4`}>
                    <category.icon className={`h-8 w-8 ${getColorClasses(category.color).split(' ')[3]}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className={`border ${getColorClasses(category.color).split(' ')[4]} dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-700`}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${getColorClasses(category.color).split(' ')[2]} ${getColorClasses(category.color).split(' ')[3]}`}>
                          {tech.category}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Development Workflow */}
        <section className="mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Development Workflow</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Development</h3>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Git version control</li>
                  <li>• Feature branch workflow</li>
                  <li>• Code review process</li>
                  <li>• Automated testing</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 dark:bg-teal-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Testing</h3>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Unit testing with Jest</li>
                  <li>• Integration testing</li>
                  <li>• End-to-end testing</li>
                  <li>• Performance testing</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Deployment</h3>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• Continuous integration</li>
                  <li>• Automated deployment</li>
                  <li>• Blue-green deployment</li>
                  <li>• Health monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Performance Metrics</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <h3 className="text-lg font-semibold mb-2">Uptime</h3>
                <p className="text-blue-100 text-sm">Reliable service availability</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">&lt;200ms</div>
                <h3 className="text-lg font-semibold mb-2">API Response</h3>
                <p className="text-blue-100 text-sm">Lightning-fast API calls</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95+</div>
                <h3 className="text-lg font-semibold mb-2">Lighthouse Score</h3>
                <p className="text-blue-100 text-sm">Optimized web performance</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">A+</div>
                <h3 className="text-lg font-semibold mb-2">Security Grade</h3>
                <p className="text-blue-100 text-sm">Top-tier security standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Open Source Commitment</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              RespireAI is built on the foundation of open-source technologies and contributes back to the community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300">
                View on GitHub
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechStack;
