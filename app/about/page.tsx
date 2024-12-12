'use client'

import React from 'react';
import { Lightbulb, Users, Rocket, Globe } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Building bridges between human potential and AI capabilities through continuous innovation and exploration.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Fostering a vibrant tech community in New York, bringing together creators, builders, and innovators.',
  },
  {
    icon: Rocket,
    title: 'Empowerment',
    description: 'Enabling individuals and businesses to harness AI technology through accessible tools and knowledge.',
  },
  {
    icon: Globe,
    title: 'Impact Focused',
    description: 'Creating meaningful solutions that drive real-world results and transform ideas into reality.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          About NY Tech
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Empowering the future of technology through community, innovation, and accessible AI solutions.
        </p>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg mb-6">
              At NY Tech, we're dedicated to making advanced AI technology accessible to everyone. We believe in building bridges between human creativity and technological capabilities, enabling individuals and businesses to bring their ideas to life.
            </p>
            <p className="text-gray-600 text-lg">
              Through our community events, educational resources, and AI-powered tools, we're fostering an ecosystem where innovation thrives and technology serves human potential.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <value.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of New York's vibrant tech ecosystem. Connect with fellow innovators, learn from industry experts, and stay ahead of the AI revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Attend Events
            </a>
            <a
              href="#subscribe"
              className="px-8 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-400 transition-colors"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Connect With Us
          </h2>
          <div className="flex flex-col items-center gap-6">
            <p className="text-gray-600 max-w-2xl">
              Have questions or want to learn more about our community and services? We'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;