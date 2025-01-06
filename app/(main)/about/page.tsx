'use client'

import React from 'react';
import { Sparkles, Users, Lightbulb, Rocket, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Innovation Through <span className="text-blue-600">Creativity</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re building tomorrow&apos;s digital landscape at the intersection of ideas and execution, fostering innovation and supporting founders on their journey.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            To create an inclusive innovation ecosystem where ideas flourish, founders thrive, and technology serves as a force for positive change. We believe in the power of community, creativity, and continuous improvement.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Sparkles,
              title: "Innovation First",
              description: "We constantly explore new ideas and approaches, pushing the boundaries of what&apos;s possible in technology and business."
            },
            {
              icon: Users,
              title: "Community Driven",
              description: "We believe in the power of community and collaboration, particularly in supporting women founders in tech."
            },
            {
              icon: Heart,
              title: "Inclusive Growth",
              description: "We&apos;re committed to making technology and innovation accessible to all, fostering diverse perspectives and ideas."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                <value.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation Consulting",
                description: "We create and deliver a steady pipeline of creative solutions and strategic improvements across technology, design, and business systems."
              },
              {
                icon: Target,
                title: "Product Development",
                description: "We build and launch innovative products that solve real problems, from AI-powered tools to community platforms."
              },
              {
                icon: Users,
                title: "Community Building",
                description: "We create spaces for founders to connect, learn, and grow together through events, workshops, and networking opportunities."
              },
              {
                icon: Rocket,
                title: "Founder Support",
                description: "We provide resources, visibility, and connections to help founders, especially women in tech, build successful ventures."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a founder, creator, or innovator, there&apos;s a place for you in our community. Let&apos;s build something amazing together.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.nytechpulse.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Join Our Community
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-transparent text-white border-2 border-white rounded-md font-medium hover:bg-blue-600 transition-colors"
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