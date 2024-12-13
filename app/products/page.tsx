'use client' 

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

// Sample product data structure
const products = [
  {
    id: 1,
    category: 'our-tools',
    name: 'NY Tech Career',
    description: 'AI-powered Learn & Earn Tech Career Model for Interns and Graduates',
    tags: ['career', 'training', 'automation'],
    fullDescription: 'Complete content creation suite with SEO optimization, tone adjustment, and multi-format support.',
    link: '/products/nytechcareer',
    image: '/api/placeholder/400/300',
  },
  {
    id: 2,
    category: 'our-tools',
    name: 'Frank AI',
    description: 'Ai-powered legal and paralegal contract and document creator',
    tags: ['law', 'legal', 'contracts'],
    fullDescription: 'Complete content creation suite with SEO optimization, tone adjustment, and multi-format support.',
    link: '/products/frankai',
    image: '/api/placeholder/400/300',
  },
  {
    id: 3,
    category: 'our-tools',
    name: 'Scriptsmithy',
    description: 'AI Writing Tool for complete scripts and storylines for writers and entertainers',
    tags: ['writing', 'narratives', 'storylines'],
    fullDescription: 'Complete content creation suite with SEO optimization, tone adjustment, and multi-format support.',
    link: '/products/scriptsmithy',
    image: '/api/placeholder/400/300',
  },
  {
    id: 4,
    category: 'our-tools',
    name: 'AI Content Assistant',
    description: 'Automated content creation and optimization tool powered by advanced AI',
    tags: ['content-creation', 'marketing', 'automation'],
    fullDescription: 'Complete content creation suite with SEO optimization, tone adjustment, and multi-format support.',
    link: '/products/ai-content-assistant',
    image: '/api/placeholder/400/300',
  },
  {
    id: 5,
    category: 'our-tools',
    name: 'SubStat',
    description: 'Automated Subscription Management',
    tags: ['ideation', 'automation', 'gamification'],
    fullDescription: 'Complete content creation suite with SEO optimization, tone adjustment, and multi-format support.',
    link: '/products/substat',
    image: '/api/placeholder/400/300',
  },
  // Add more products here
];

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCard, setActiveCard] = useState(null);

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
                activeFilter === 'our-tools' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('our-tools')}
            >
              Our Products
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'community' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('community')}
            >
              Community Products
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
              <img
                src={product.image}
                alt={product.name}
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