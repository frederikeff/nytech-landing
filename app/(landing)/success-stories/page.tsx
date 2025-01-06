// app/(landing)/success-stories/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, Instagram, Calendar } from 'lucide-react'
import { useState } from 'react'

interface SuccessMetric {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface CaseStudy {
  title: string;
  description: string;
  metrics: string[];
  results: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const FeaturedCaseStudy = () => {
  const metrics: SuccessMetric[] = [
    { icon: <Clock className="w-5 h-5" />, label: "Timeline", value: "7 Days" },
    { icon: <Users className="w-5 h-5" />, label: "Subscribers", value: "500+" },
    { icon: <Instagram className="w-5 h-5" />, label: "Social", value: "Instagram Ready" },
    { icon: <Calendar className="w-5 h-5" />, label: "First Client", value: "Week 1" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
      <div className="relative h-64 sm:h-80">
        <Image
          src="/images/success-stories/tickles.png"
          alt="Tickles Launch"
          width={1200}
          height={800}
          className="object-cover"
          priority
        />
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Tickles: From Idea to Launch in 7 Days</h2>
        <p className="text-xl text-gray-600 mb-6">
          When Rike approached us to build a love page for New Yorkers, we transformed her vision into reality in just one week.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-2 text-blue-600">
                {metric.icon}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
              <div className="font-semibold">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="font-semibold text-lg">What We Delivered:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "2 Converting Landing Pages",
              "2 Professional Logos",
              "Domain & Email Setup",
              "Newsletter Integration",
              "Calendly Setup",
              "3 Client Profiles",
              "2 Lead Generation Flows",
              "Training Module",
              "Instagram Setup",
              "Complete Brand Guide"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative aspect-[4/3] w-full">
          {!hasError && (
            <Image
              src={study.image.src}
              alt={study.image.alt}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoadingComplete={() => setIsLoading(false)}
              onError={() => setHasError(true)}
              priority={true}
            />
          )}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="text-gray-400">Image not available</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
          <p className="text-gray-600 mb-4">{study.description}</p>
          <ul className="space-y-2 mb-4">
            {study.metrics.map((metric, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                {metric}
              </li>
            ))}
          </ul>
          <p className="font-semibold text-blue-600">{study.results}</p>
        </div>
      </div>
    );
}; // Added missing cl

export default function SuccessStoriesPage() {
  const caseStudies: CaseStudy[] = [
    {
      title: "Customer Success School",
      description: "Launched a comprehensive learning platform with community features",
      metrics: [
        "Full Website Development",
        "LinkedIn Profile Optimization",
        "Community Setup",
        "E-Learning Platform Integration", 
        "Lead Generation Referrals"
      ],
      results: "10k revenue in first month", 
      image: {
        src: "/images/success-stories/cschool-success.png",
        alt: "Customer Success School Tech Launch",
        width: 800,
        height: 600
      }
    },
    {
      title: "German Boutique Baby Blankets",
      description: "Created a premium e-commerce presence for handcrafted products",
      metrics: [
        "Logo Design & Branding",
        "Color Concept",
        "E-commerce Setup",
        "2 Landing Pages",
        "Instagram Setup"
      ],
      results: "10 clients in first month", 
      image: {
        src: "/images/success-stories/baby-blankets.png",
        alt: "Sheep and Goats Ecommerce Launch",
        width: 800,
        height: 600
      }
    },
    {
      title: "Executive Coaching Business",
      description: "Built a professional coaching presence with lead generation",
      metrics: [
        "Landing Page",
        "2 Lead Generation Funnels",
        "Brand Identity",
        "ICP Profiles",
        "Messaging Strategy"
      ],
      results: "2 executive clients in first month",
      image: {
        src: "/images/success-stories/executive-coaching.png",
        alt: "Executive Coaching Business Launch",
        width: 800,
        height: 600
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16">Success Stories</h1>
        
        <FeaturedCaseStudy />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Launch Your Success Story?</h2>
          <Link
            href="/launch-package"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your 7-Day Journey
          </Link>
        </div>
      </div>
    </div>
  );
}