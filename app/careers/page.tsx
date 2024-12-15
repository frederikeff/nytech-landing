'use client' 

import React, { useState, useEffect } from 'react';
import { Search, Building2, Users, Rocket, LineChart, MessageSquare } from 'lucide-react';

// Job listings data
const jobs = [
    {
      id: 1,
      category: 'ai-tech',
      title: 'AI Growth Manager',
      company: 'Frank AI',
      description: 'Drive growth strategies for an innovative AI legal solutions company',
      tags: ['AI', 'Growth', 'Legal Tech'],
      fullDescription: 'Lead the growth initiatives for an AI-powered legal tech company. You will be responsible for implementing AI-driven marketing strategies, analyzing growth metrics, and scaling user acquisition through innovative approaches.',
      location: 'New York / Remote',
      type: 'Full-time',
      link: 'mailto:application@nytechcareer.com',
      icon: LineChart
    },
    {
      id: 2,
      category: 'blockchain',
      title: 'Sales Manager',
      company: 'BlockEstate',
      description: 'Lead sales strategies for a blockchain-based real estate investment platform',
      tags: ['Blockchain', 'Real Estate', 'Sales'],
      fullDescription: 'Drive sales strategies for an innovative blockchain-based real estate investment platform. You will be responsible for building client relationships, developing sales strategies, and expanding market presence.',
      location: 'New York / Remote',
      type: 'Full-time',
      link: 'mailto:application@nytechcareer.com',
      icon: Building2
    },
    {
      id: 3,
      category: 'ai-tech',
      title: 'Digital Marketing Manager',
      company: 'Scriptsmithy',
      description: 'Lead marketing initiatives for an AI writing product',
      tags: ['Marketing', 'AI', 'Content'],
      fullDescription: 'Develop and execute digital marketing strategies for an AI-powered writing platform. You will oversee content strategy, campaign management, and growth initiatives.',
      location: 'Remote',
      type: 'Full-time',
      link: 'mailto:application@nytechcareer.com',
      icon: Rocket
    },
    {
      id: 4,
      category: 'ai-tech',
      title: 'Lead Generation Manager',
      company: 'Frank AI',
      description: 'Drive qualified leads for an AI legal solutions provider',
      tags: ['Lead Gen', 'Legal Tech', 'AI'],
      fullDescription: 'Spearhead lead generation efforts for an AI-powered legal tech platform. You will be responsible for developing and implementing strategies to attract and qualify potential clients.',
      location: 'New York / Remote',
      type: 'Full-time',
      link: 'mailto:application@nytechcareer.com',
      icon: Users
    },
    {
      id: 5,
      category: 'community',
      title: 'Community Support Manager',
      company: 'NYTech AI Women',
      description: 'Support and grow our Women in Tech and AI Community',
      tags: ['Community', 'Tech', 'Women in Tech'],
      fullDescription: 'Build and nurture our thriving women in tech community. You will organize events, facilitate connections, and create valuable experiences for community members.',
      location: 'New York / Remote',
      type: 'Full-time',
      link: 'mailto:application@nytechcareer.com',
      icon: MessageSquare
    }
  ];

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Filter jobs based on search and category
  useEffect(() => {
    let filtered = jobs;
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(job => job.category === activeFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredJobs(filtered);
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Join Our Innovation Ecosystem
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Explore exciting opportunities with our ventures and community partners
        </p>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search positions..."
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
              All Positions
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'ai-tech' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('ai-tech')}
            >
              AI & Tech
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'blockchain' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('blockchain')}
            >
              Blockchain
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
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ${
                activeCard === job.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCard(job.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    <job.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-blue-600">{job.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {activeCard === job.id ? job.fullDescription : job.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">{job.location}</span>
                  <a
                    href={job.link}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;