'use client' 

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';

// Sample product data structure
const products = [
  {
    id: 1,
    category: 'marketplace',
    name: 'NY Tech Career',
    description: 'AI-powered career development platform for tech talents',
    tags: ['careers', 'education', 'technology'],
    fullDescription: 'Innovative learning and earning platform that combines AI-driven skill assessment, personalized career mapping, and paid internship opportunities for emerging tech professionals.',
    link: 'https://www.nytechcareer.com',
    image: '/images/products/nytechcareer.webp',
    width: 400,
    height: 300,
  },
  {
    id: 2,
    category: 'saas',
    name: 'Frank AI',
    description: 'AI-powered legal document automation platform',
    tags: ['legal', 'automation', 'contracts'],
    fullDescription: 'Advanced legal document creation system that leverages AI to generate, analyze, and optimize contracts and legal documentation with professional-grade accuracy.',
    link: 'https://www.frankai.io/',
    image: '/images/products/frankai.webp',
    width: 400,
    height: 300,
  },
  {
    id: 3,
    category: 'saas',
    name: 'Scriptsmithy',
    description: 'AI-powered creative writing and script development platform',
    tags: ['writing', 'entertainment', 'creative'],
    fullDescription: 'Sophisticated storytelling platform that employs AI to assist in creating, structuring, and refining scripts and narratives across multiple entertainment formats.',
    link: 'https://www.scriptsmithy.ai',
    image: '/images/products/scriptsmithy.webp',
    width: 400,
    height: 300,
  },
  {
    id: 4,
    category: 'marketplace',
    name: 'RelationGuru',
    description: 'Smart marketplace for professional warm introductions',
    tags: ['networking', 'introductions', 'business'],
    fullDescription: 'Automated introduction marketplace platform that facilitates and monetizes professional networking by connecting seekers with valuable business contacts through verified intermediaries.',
    link: 'https://calendly.com/nytechventures/30-minute-meeting',
    image: '/images/products/relationguru.webp',
    width: 400,
    height: 300,
  },
  {
    id: 5,
    category: 'saas',
    name: 'SubStat',
    description: 'Automated subscription management and analytics platform',
    tags: ['subscriptions', 'analytics', 'billing'],
    fullDescription: 'Comprehensive subscription management system that streamlines recurring billing, provides detailed analytics, and automates customer lifecycle workflows.',
    link: 'https://calendly.com/nytechventures/30-minute-meeting',
    image: '/images/products/substat.webp',
    width: 400,
    height: 300,
  },
  {
    id: 6,
    category: 'community',
    name: 'NYTech AI Women',
    description: 'Empowering community for women in NYC tech and AI',
    tags: ['community', 'technology', 'networking'],
    fullDescription: 'Dynamic professional network that provides women in technology and AI with mentorship opportunities, resource sharing, and strategic connections to accelerate their entrepreneurial success.',
    link: 'https://calendly.com/nytechventures/30-minute-meeting',
    image: '/images/products/nytechaiwomen.webp',
    width: 400,
    height: 300,
  },
  {
    id: 7,
    category: 'saas',
    name: 'PitchFlow',
    description: 'AI-powered presentation generator and audience adaptation tool',
    tags: ['presentations', 'ai', 'pitching'],
    fullDescription: 'Intelligent presentation creation platform that automatically generates pitch decks, adapts content to specific audiences, and optimizes messaging using AI technology.',
    link: 'https://calendly.com/nytechventures/30-minute-meeting',
    image: '/images/products/pitchflow.webp',
    width: 400,
    height: 300,
  },
  {
      id: 8,
      category: 'ecommerce',
      name: 'PawStyle',
      description: 'Premium protective footwear for dogs with comfort-first design system',
      tags: ['pets', 'footwear', 'accessories'],
      fullDescription: 'Revolutionary dog footwear brand offering custom-sized protective shoes that ensure maximum comfort and safety for pets, featuring weather-resistant materials and orthopedic support.',
      link: 'https://calendly.com/nytechventures/30-minute-meeting',
      image: '/images/products/pawstyle.webp',
      width: 400,
      height: 300,
  }, 
  {
    id: 9,
    category: 'media',
    name: 'AI Sidekicks',
    description: 'Interactive AI learning platform with friendly character guidance',
    tags: ['education', 'ai', 'technology'],
    fullDescription: 'Innovative educational platform featuring AI companion characters that provide personalized guidance through complex AI concepts with an approachable, engaging learning experience.',
    link: 'https://calendly.com/nytechventures/30-minute-meeting',
    image: '/images/products/aisidekicks.webp',
    width: 400,
    height: 300,
  },
  {
    id: 10,
    category: 'media',
    name: 'TIRIDA Pals',
    description: 'Magical digital companion world with friendly creature adventures', // Same 56 chars
    tags: ['children', 'gaming', 'education'],
    fullDescription: 'Enchanting digital platform featuring magical creature companions that guide children through wonder-filled adventures while fostering creativity and learning engagement.', // Same 143 chars
    link: 'https://calendly.com/nytechventures/30-minute-meeting',
    image: '/images/products/tirida.webp',
    width: 400,
    height: 300,
  }
]

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products;
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(product => product.category === activeFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setFilteredProducts(filtered);
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Products & Solutions
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Discover tools and solutions built by our team and community
        </p>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-4">
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Products
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'saas' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('saas')}
            >
              SaaS
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'marketplace' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('marketplace')}
            >
              Marketplace
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'community' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('community')}
            >
              Community
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'ecommerce' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('ecommerce')}
            >
              ECommerce
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'media' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('media')}
            >
              Media
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ${
                activeCard === product.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCard(product.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={product.width}
                height={product.height}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activeCard === product.id ? product.fullDescription : product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;