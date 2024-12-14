'use client'

import React from 'react';
import { Sparkles, Lightbulb, Zap, RefreshCw } from 'lucide-react';

const InnovationLanding = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-24 md:pt-32"> {/* Added pt-24 md:pt-32 for top spacing */}
      {/* Hero Section */}
      <div className="text-center mb-16 pt-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Innovation <span className="text-blue-600">Unleashed</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Access a constant stream of creative solutions, fresh perspectives, and innovative optimizations across technology, design, and business.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
          Explore Innovation Stream
        </button>
      </div>

      {/* Value Props */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="p-6 rounded-xl bg-white shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Sparkles className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Fresh Perspectives</h3>
          <p className="text-gray-600">
            Get unique insights and innovative solutions that cross traditional domain boundaries.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <RefreshCw className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Constant Innovation</h3>
          <p className="text-gray-600">
            Access a steady stream of new ideas, optimizations, and creative solutions.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3">Rapid Optimization</h3>
          <p className="text-gray-600">
            Transform existing systems and processes with innovative improvements.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold mb-2">Explore Ideas</h3>
            <p className="text-gray-600">Browse the innovation stream for solutions that resonate with your needs</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold mb-2">Engage & Acquire</h3>
            <p className="text-gray-600">Access detailed solutions and implementation guides</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold mb-2">Transform & Implement</h3>
            <p className="text-gray-600">Apply innovative solutions to your specific challenges</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-50 rounded-xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join the innovation stream and transform your ideas into reality.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default InnovationLanding;