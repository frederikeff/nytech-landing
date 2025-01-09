'use client'

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';

const successStories = [
  {
    id: 1,
    category: ['startup-launch'],
    name: 'Tickles: Love Page Launch',
    description: 'From idea to live platform in 7 days',
    tags: ['launch', 'branding', 'website'],
    fullDescription: 'Transformed a vision for a New York love page into a fully functional platform in just one week, including landing pages, brand identity, and complete tech setup.',
    results: ['7-day launch', '500+ subscribers', 'Complete brand setup'],
    image: '/images/success-stories/tickles.png',
    width: 400,
    height: 300,
  },
  {
    id: 2,
    category: ['startup-launch', 'community', 'branding'],
    name: 'Customer Success School',
    description: 'Launched comprehensive learning platform with community',
    tags: ['education', 'community', 'launch'],
    fullDescription: 'Created full-scale learning platform including website development, LinkedIn optimization, and community features for customer success professionals.',
    results: ['10k revenue first month', 'Active community', 'Full platform launch'],
    image: '/images/success-stories/cschool-success.png',
    width: 400,
    height: 300,
  },
  {
    id: 3,
    category: ['community', 'innovation'],
    name: 'Innovation Platform Success',
    description: 'Built and led innovation platform with 5000+ members',
    tags: ['innovation', 'community', 'leadership'],
    fullDescription: 'Successfully led and scaled an innovation platform engaging 5000+ innovators, managing 25 innovation contests, and fostering a vibrant community of creators and entrepreneurs.',
    results: ['5000+ active innovators', '25 innovation contests', 'Thriving community'],
    image: '/images/success-stories/innovation-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 4,
    category: ['career', 'community'],
    name: 'Executive Women Platform',
    description: 'Led female manager career platform with 25+ placements',
    tags: ['career development', 'executive', 'community'],
    fullDescription: 'Developed and managed comprehensive career platform for female managers, including event organization, executive recruitment, and professional development programs.',
    results: ['25 executive placements', 'Regular career events', 'Assessment program'],
    image: '/images/success-stories/career-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 5,
    category: ['startup-launch', 'branding'],
    name: 'German Baby Brand Launch',
    description: 'Premium e-commerce brand launch and setup',
    tags: ['launch', 'branding', 'e-commerce'],
    fullDescription: 'Created a premium e-commerce presence for handcrafted baby products, including logo design, branding, and complete online store setup.',
    results: ['10 clients first month', 'Complete brand identity', 'E-commerce platform'],
    image: '/images/success-stories/baby-blankets.png',
    width: 400,
    height: 300,
  },
  {
    id: 6,
    category: ['digital-selling', 'customer-success'],
    name: 'Fortune 500 Digital Selling',
    description: 'Trained 1500+ sellers worldwide',
    tags: ['digital selling', 'enterprise', 'training'],
    fullDescription: 'Designed and delivered comprehensive digital selling program for global retail brand, transforming traditional sales approaches into modern digital engagement strategies.',
    results: ['1500+ sellers trained', 'Global implementation', 'Digital transformation'],
    image: '/images/success-stories/sales-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 7,
    category: ['customer-success'],
    name: 'SaaS Retention Enhancement',
    description: 'Improved retention from 90% to 95%',
    tags: ['retention', 'saas', 'growth'],
    fullDescription: 'Led strategic initiative to enhance client retention through improved success metrics, proactive engagement, and systematic feedback implementation for B2B SaaS company.',
    results: ['5% retention increase', 'Enhanced metrics', 'Systematic process'],
    image: '/images/success-stories/retention-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 8,
    category: ['startup-launch', 'branding'],
    name: 'Executive Coaching Launch',
    description: 'Built professional coaching presence',
    tags: ['launch', 'branding', 'coaching'],
    fullDescription: 'Developed complete professional presence for executive coaching business including landing page, lead generation funnels, and brand identity.',
    results: ['2 executive clients first month', 'Complete brand setup', 'Lead gen funnels'],
    image: '/images/success-stories/executive-coaching.png',
    width: 400,
    height: 300,
  },
  {
    id: 9,
    category: ['digital-selling', 'customer-success'],
    name: 'Corporate Digital Transformation',
    description: 'Digital selling program for 2000+ bankers',
    tags: ['digital selling', 'banking', 'transformation'],
    fullDescription: 'Implemented comprehensive digital selling program for global bank, enabling traditional bankers to excel in digital-first client engagement.',
    results: ['2000+ participants', 'Global rollout', 'Digital adoption'],
    image: '/images/success-stories/banking-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 10,
    category: ['startup-launch', 'branding'],
    name: 'Corporate Digital Transformation',
    description: 'From idea to live platform in 7 days',
    tags: ['launch', 'branding', 'website'],
    fullDescription: 'Transformed a vision for a New York love page into a fully functional platform in just one week, including landing pages, brand identity, and complete tech setup.',
    results: ['7-day launch', '500+ subscribers', 'Complete brand setup'],
    image: '/images/success-stories/tickles.png',
    width: 400,
    height: 300,
  },
  {
    id: 14,
    category: ['startup-launch', 'branding'],
    name: 'German Baby Brand Launch',
    description: 'Premium e-commerce brand launch and setup',
    tags: ['launch', 'branding', 'e-commerce'],
    fullDescription: 'Created a premium e-commerce presence for handcrafted baby products, including logo design, branding, and complete online store setup.',
    results: ['10 clients first month', 'Complete brand identity', 'E-commerce platform'],
    image: '/images/success-stories/baby-blankets.png',
    width: 400,
    height: 300,
  },
  {
    id: 16,
    category: ['customer-success', 'startup'],
    name: 'SaaS Retention Enhancement',
    description: 'Improved retention from 90% to 95%',
    tags: ['retention', 'saas', 'growth'],
    fullDescription: 'Led strategic initiative to enhance client retention through improved success metrics, proactive engagement, and systematic feedback implementation for B2B SaaS company.',
    results: ['5% retention increase', 'Enhanced metrics', 'Systematic process'],
    image: '/images/success-stories/retention-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 17,
    category: ['startup-launch', 'branding'],
    name: 'Executive Coaching Launch',
    description: 'Built professional coaching presence',
    tags: ['launch', 'branding', 'coaching'],
    fullDescription: 'Developed complete professional presence for executive coaching business including landing page, lead generation funnels, and brand identity.',
    results: ['2 executive clients first month', 'Complete brand setup', 'Lead gen funnels'],
    image: '/images/success-stories/executive-coaching.png',
    width: 400,
    height: 300,
  },
  {
    id: 19,
    category: ['community'],
    name: 'Innovation Community Leadership',
    description: 'Built and led innovation platform with 5000+ members',
    tags: ['innovation', 'community', 'leadership'],
    fullDescription: 'Successfully led and scaled an innovation platform engaging 5000+ innovators, managing 25 innovation contests, and fostering a vibrant community of creators and entrepreneurs.',
    results: ['5000+ active innovators', '25 innovation contests', 'Thriving community platform'],
    image: '/images/success-stories/innovation-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 21,
    category: ['startup', 'career'],
    name: 'GTM Hiring Framework',
    description: 'Built hiring processes for high-growth tech startups',
    tags: ['hiring', 'GTM', 'process development'],
    fullDescription: 'Created and implemented comprehensive hiring processes for GTM roles at high-growth tech startups, including team training, candidate assessment, and process documentation.',
    results: ['10+ successful hires', 'Established hiring process', 'Team training program'],
    image: '/images/success-stories/startup-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 22,
    category: ['career', 'education'],
    name: 'Student Mentoring Program',
    description: 'Developed mentoring program for 450+ students',
    tags: ['mentoring', 'education', 'career development'],
    fullDescription: 'Created and managed comprehensive mentoring and career development program for students and pupils, focusing on career choice support and professional guidance.',
    results: ['450+ students mentored', 'Mentorship program', 'Career guidance framework'],
    image: '/images/success-stories/education-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 23,
    category: ['career', 'education'],
    name: 'Public Speaking Program',
    description: 'Led educational program with 60+ members',
    tags: ['public speaking', 'education', 'certification'],
    fullDescription: 'Managed comprehensive public speaking program including mentoring, training, and certification preparation, resulting in successful certifications and skill development.',
    results: ['60+ active members', '10 certified speakers', 'Mentoring program'],
    image: '/images/success-stories/speaking-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 24,
    category: ['career', 'leadership'],
    name: 'Team Leadership & Development',
    description: 'Managed and developed teams of up to 10 members',
    tags: ['leadership', 'development', 'management'],
    fullDescription: 'Led professional teams through comprehensive development programs, including hiring, performance management, and career advancement initiatives.',
    results: ['10+ team members', 'Performance framework', 'Career development plans'],
    image: '/images/success-stories/leadership-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 25,
    category: ['startup', 'growth'],
    name: 'B2B SaaS Growth Strategy',
    description: 'Scaled enterprise client retention beyond 100%',
    tags: ['enterprise', 'saas', 'retention'],
    fullDescription: 'Developed and implemented enterprise client management strategy for a B2B SaaS startup, achieving retention rates over 100% through systematic onboarding improvements.',
    results: ['Retention > 100%', 'Streamlined onboarding', 'Clear success metrics'],
    image: '/images/success-stories/enterprise-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 26,
    category: ['digital-selling', 'customer-success'],
    name: 'Global Digital Selling Program',
    description: 'Trained 1500+ sellers for Fortune 500 retail brand',
    tags: ['digital selling', 'enterprise', 'training'],
    fullDescription: 'Designed and delivered comprehensive digital selling program for global retail brand, training over 1500 sellers in modern sales techniques.',
    results: ['1500+ sellers trained', 'Global implementation', 'Digital transformation'],
    image: '/images/success-stories/training-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 28,
    category: ['customer-success', 'startup'],
    name: 'Client Retention Growth',
    description: 'Scaled enterprise client retention beyond 100%',
    tags: ['enterprise', 'saas', 'retention'],
    fullDescription: 'Developed and implemented enterprise client management strategy for a B2B SaaS startup, achieving retention rates over 100% through systematic onboarding improvements and proactive success metrics.',
    results: ['Retention > 100%', 'Streamlined onboarding', 'Clear success metrics'],
    image: '/images/success-stories/enterprise-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 29,
    category: 'training',
    name: 'Global Digital Selling Program',
    description: 'Trained 1500+ sellers for Fortune 500 retail brand',
    tags: ['training', 'sales', 'enterprise'],
    fullDescription: 'Designed and delivered comprehensive digital selling program for global retail brand, training over 1500 sellers worldwide in modern sales techniques and digital customer engagement.',
    results: ['1500+ sellers trained', 'Global implementation', 'Digital transformation'],
    image: '/images/success-stories/training-1.webp',
    width: 400,
    height: 300,
  },
  {
    id: 31,
    category: 'training',
    name: 'Enterprise Client Management',
    description: 'Trained 500+ account managers in client-centric approach',
    tags: ['training', 'enterprise', 'management'],
    fullDescription: 'Developed and delivered comprehensive client management training program for international corporation, focusing on client-centric strategies and success metrics.',
    results: ['500+ managers trained', 'Global implementation', 'Enhanced client relationships'],
    image: '/images/success-stories/training-2.webp',
    width: 400,
    height: 300,
  },
  {
    id: 33,
    category: 'enterprise',
    name: 'SaaS Customer Success',
    description: 'Enhanced CS team performance for major HR tech platform',
    tags: ['training', 'saas', 'success'],
    fullDescription: 'Trained customer success managers in advanced client management strategies and market trends, leading to improved team performance and client satisfaction.',
    results: ['Improved CS metrics', 'Enhanced team capabilities', 'Strategic implementation'],
    image: '/images/success-stories/cs-1.webp',
    width: 400,
    height: 300,
  }
];

const SuccessStoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredStories, setFilteredStories] = useState(successStories);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    let filtered = successStories;
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(story => 
        story.category.includes(activeFilter)
      );
    }
    
    if (searchQuery) {
      filtered = filtered.filter(story => 
        story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setFilteredStories(filtered);
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Success Stories
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Real results from our enterprise support and training programs
        </p>

        <div className="mb-8">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search success stories..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Stories
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'startup' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('startup')}
            >
              Startup Growth
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'career' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('career')}
            >
              Career Development
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'customer-success' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('customer-success')}
            >
              Customer Success
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'digital-selling' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('digital-selling')}
            >
              Digital Selling
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'branding' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveFilter('branding')}
            >
              Branding
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ${
                activeCard === story.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveCard(story.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Image
                src={story.image}
                alt={story.name}
                width={story.width}
                height={story.height}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activeCard === story.id ? story.fullDescription : story.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {story.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;