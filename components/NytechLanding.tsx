import React from 'react';
import { Bot, Zap, Layout, Users, Calendar, Mail, Code, Lightbulb } from 'lucide-react';

const innovations = [
  {
    title: 'Live Ventures',
    description: 'Explore our active projects and innovations in development.',
    icon: Zap,
    features: [
      'NYTech Career platform',
      'Frank AI legal solutions',
      'Process optimizations',
      'Tech integrations'
    ]
  },
  {
    title: 'Innovation Services',
    description: 'Let us help you bring your ideas to life with our expertise.',
    icon: Lightbulb,
    features: [
      'Innovation consulting',
      'System optimization',
      'AI integration',
      'Process improvement'
    ]
  },
  {
    title: 'Community Hub',
    description: 'Connect, learn, and grow with our vibrant ecosystem of founders, creators, and innovators.',
    icon: Users,
    features: [
      'Curated networking events',
      'Implementation guides & resources',
      'Ecosystem insights & updates',
      'Founder collaboration opportunities'
    ]
  },
];

const NytechLanding = () => {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <innovation.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {innovation.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {innovation.description}
              </p>
              <ul className="space-y-3">
                {innovation.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Current Projects Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Innovation Community
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with fellow founders, creators, and innovators while accessing our wealth of resources and opportunities.
          </p>
          <a
            href="https://nytechpulse.beehiiv.com/"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            Join Our Community
          </a>
        </div>

        {/* Focus Areas */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layout,
                title: 'Design',
                description: 'Creating intuitive experiences and systems'
              },
              {
                icon: Bot,
                title: 'Technology',
                description: 'Building innovative solutions with AI'
              },
              {
                icon: Code,
                title: 'Business',
                description: 'Optimizing processes and workflows'
              }
            ].map((area, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <area.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* decorative separator */}   
        <div className="max-w-4xl mx-auto my-20">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-gray-200 w-full"></div>
            <div className="flex space-x-2">
              <span className="h-2 w-2 rounded-full bg-blue-200"></span>
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            </div>
            <div className="h-px bg-gray-200 w-full"></div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 mt-16">
          <a 
            href="https://www.linkedin.com/company/nytechventures/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Join Our Community</h3>
              <p className="text-gray-600">Follow us on LinkedIn for daily insights and updates</p>
            </div>
          </a>
          
          <a 
            href="https://lu.ma/nytechcommunity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="text-center">
              <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Attend Events</h3>
              <p className="text-gray-600">Join our NYC and remote events</p>
            </div>
          </a>
          
          <a 
            href="https://nytechpulse.beehiiv.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="text-center">
              <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-600">Subscribe to our weekly newsletter</p>
            </div>
          </a>
        </div>
      </div>
  );
};

export default NytechLanding;