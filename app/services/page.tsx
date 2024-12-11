'use client' 

import React from 'react';
import { Code, Bot, Zap, Database, Layout, Users } from 'lucide-react';

const services = [
  {
    title: 'AI Integration',
    description: 'Custom AI solution integration for your existing systems and workflows.',
    icon: Bot,
    features: [
      'Custom AI model implementation',
      'System integration',
      'Workflow automation',
      'Performance optimization'
    ]
  },
  {
    title: 'Custom Development',
    description: 'Tailored AI-powered applications and tools built to your specifications.',
    icon: Code,
    features: [
      'Custom AI applications',
      'API development',
      'Frontend interfaces',
      'Backend systems'
    ]
  },
  {
    title: 'Automation Solutions',
    description: 'Streamline your processes with intelligent automation systems.',
    icon: Zap,
    features: [
      'Process automation',
      'Workflow optimization',
      'Integration setup',
      'Performance monitoring'
    ]
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Expert implementation and support for AI-powered solutions that transform your ideas into reality.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you implement AI solutions that drive real results.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Consultation',
                description: 'We discuss your needs and goals to understand the best approach.'
              },
              {
                icon: Layout,
                title: 'Planning',
                description: 'Detailed solution design and implementation roadmap.'
              },
              {
                icon: Code,
                title: 'Development',
                description: 'Expert implementation of your custom AI solution.'
              },
              {
                icon: Database,
                title: 'Deployment',
                description: 'Smooth deployment and ongoing support.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;