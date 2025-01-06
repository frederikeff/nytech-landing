'use client' 

import React from 'react';
import { Sparkles, Users, Zap, Lightbulb, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Creative Innovation Solutions',
    description: 'Transform challenges into opportunities with our stream of creative ideas and practical solutions.',
    icon: Sparkles,
    features: [
      'Problem-solving ideation sessions',
      'Creative system improvements',
      'Innovation strategy development',
      'Product concept creation'
    ]
  },
  {
    title: 'Founder Success Studio',
    description: 'Empowering founders, especially women in tech, through community, visibility, and strategic support.',
    icon: Users,
    features: [
      'Founder visibility programs',
      'Community building initiatives',
      'Strategic partnerships',
      'Event-driven networking'
    ]
  },
  {
    title: 'Tech & Systems Evolution',
    description: 'Bringing ideas to life through practical implementation and technological advancement.',
    icon: Zap,
    features: [
      'AI & tech product development',
      'Process optimization',
      'System integration & automation',
      'Digital transformation support'
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Innovation & Community
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We&apos;re passionate about solving problems creatively, supporting founders, and building technology that makes a difference. Let&apos;s create something amazing together.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking to innovate, connect, or transform your ideas into reality, we&apos;re here to help you succeed.
          </p>
          <a
            href="https://calendly.com/nytechventures/30-minute-meeting"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            Start Your Journey
          </a>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How We Create Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Ideate',
                description: 'Generate creative solutions and possibilities.'
              },
              {
                icon: Users,
                title: 'Connect',
                description: 'Build meaningful relationships and communities.'
              },
              {
                icon: Rocket,
                title: 'Create',
                description: 'Transform ideas into tangible solutions.'
              },
              {
                icon: Zap,
                title: 'Elevate',
                description: 'Optimize and scale for lasting impact.'
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