'use client' 

import React from 'react';
import { Network, Sparkles, Users, Target, Presentation, Award, Rocket } from 'lucide-react';

const supportAreas = [
  {
    title: 'Tech & AI Enablement',
    description: 'Empowering women founders with the tools and knowledge to leverage AI and technology in building their ventures.',
    icon: Sparkles,
    features: [
      'AI-powered MVP development workshops',
      'No-code tool mastery sessions',
      'Tech stack selection guidance',
      'Practical AI implementation support'
    ]
  },
  {
    title: 'Community & Connection',
    description: 'Creating a supportive ecosystem where women founders can network, learn, and grow together.',
    icon: Users,
    features: [
      'Women-only networking events',
      'Founder-focused hackathons',
      'Peer learning circles',
      'Monthly mastermind sessions'
    ]
  },
  {
    title: 'Visibility & Growth',
    description: "Amplifying women founders&apos; voices and creating opportunities for venture growth and success.",
    icon: Award,
    features: [
      'Pitch deck optimization',
      'Investor introductions',
      'Media exposure opportunities',
      'Client connection programs'
    ]
  }
];

const WomenFoundersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Empowering Women in Tech
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Building a more inclusive tech ecosystem by providing women founders with the resources, connections, and visibility they need to succeed in technology and AI.
        </p>

        {/* Why It Matters Section */}
        <div className="bg-white rounded-xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why It Matters
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            In today&apos;s tech landscape, women founders remain significantly underrepresented, especially in AI and technology sectors. We're changing that by making tech more accessible, building supportive communities, and creating opportunities for growth and visibility.
          </p>
        </div>

        {/* Support Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportAreas.map((area, index) => (
            <div
              key={index}
              id={area.title.toLowerCase().replace(/\s+/g, '-')}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <area.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {area.description}
              </p>
              <ul className="space-y-3">
                {area.features.map((feature, idx) => (
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Tech Venture?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of ambitious women founders and get access to the resources, connections, and support you need to succeed in Tech and AI.
          </p>
          <a
            href="https://nytechai.beehiiv.com/"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            Join Our Community
          </a>
        </div>

        {/* How We Support Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Support Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Enable',
                description: 'Equip founders with tech and AI knowledge.'
              },
              {
                icon: Network,
                title: 'Connect',
                description: 'Build meaningful industry relationships.'
              },
              {
                icon: Presentation,
                title: 'Present',
                description: 'Showcase ventures to key stakeholders.'
              },
              {
                icon: Rocket,
                title: 'Launch',
                description: 'Support growth and market success.'
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

export default WomenFoundersPage;