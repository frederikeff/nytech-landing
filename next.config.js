/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only add this if you want to deploy despite errors
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
