'use client'

import React from 'react';

const StreamSignup = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-pink-500 rounded-xl p-8 md:p-12 text-center mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Our Innovation Stream
          </h2>
          <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
            Access our constant flow of ideas, improvements, and innovative solutions.
          </p>
          <a
            href="/stream"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            View Innovation Stream
          </a>
        </div>

    );
};

export default StreamSignup;