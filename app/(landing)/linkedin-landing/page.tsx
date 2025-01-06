// app/linkedin-landing/page.tsx
import Link from 'next/link';
import { Rocket, Users, Newspaper, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  price?: string;
  color: 'blue' | 'purple' | 'green';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  features,
  ctaText,
  ctaLink,
  price,
  color
}) => {
  const colorClasses = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
      {/* Colored top bar */}
      <div className={`h-2 ${colorClasses[color]} rounded-t-xl`} />
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-center mb-6">
          <div className={`w-12 h-12 text-${color}-600`}>
            {icon}
          </div>
        </div>
        <h2 className="text-xl font-bold text-center mb-4">
          {title}
        </h2>
        <ul className="space-y-3 mb-6 text-gray-600 flex-grow">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        {price && (
          <div className={`text-center font-bold text-${color}-600 mb-6`}>
            {price}
          </div>
        )}
        <Link 
          href={ctaLink}
          className={`block w-full text-white text-center py-3 rounded-lg font-semibold transition-colors ${colorClasses[color]} hover:opacity-90`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default function LinkedinLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NYTech Ventures
          </h1>
          <p className="text-xl text-gray-600">
            Launch Fast • Stay Connected • Grow Stronger
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon={<Rocket />}
            title="7-Day Startup Launch"
            features={[
              "Complete brand setup",
              "Professional website",
              "All tools configured"
            ]}
            price="$/€2000 Fixed Price"
            ctaText="Launch Now"
            ctaLink="/launch-package"
            color="blue"
          />

          <ServiceCard
            icon={<Users />}
            title="NYTech AI Community"
            features={[
              "Weekly events",
              "Founder networking",
              "AI innovation insights"
            ]}
            price="Join the Community"
            ctaText="Join Events"
            ctaLink="https://lu.ma/nytechevents"
            color="purple"
          />

          <ServiceCard
            icon={<Newspaper />}
            title="NYTech Pulse Newsletter"
            features={[
              "Weekly updates",
              "Tech insights",
              "Growth strategies"
            ]}
            price="Free Weekly Insights"
            ctaText="Subscribe"
            ctaLink="https://nytechpulse.beehiiv.com/"
            color="green"
          />
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          <div className="space-y-4">
            <a
              href="https://lu.ma/nytechevents"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div>
                <h3 className="font-semibold group-hover:text-blue-600">Next AI Meetup</h3>
                <p className="text-gray-600">Join us this Friday for an afternoon walk</p>
              </div>
              <ArrowRight className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
            </a>
    
            <Link
              href="/success-stories"
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div>
                <h3 className="font-semibold group-hover:text-blue-600">Latest Launch</h3>
                <p className="text-gray-600">See how we helped Tickles launch in 7 days</p>
              </div>
              <ArrowRight className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}