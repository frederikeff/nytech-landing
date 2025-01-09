import Link from 'next/link';
import { GraduationCap, Users, Rocket, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  price?: string;
  color: 'blue' | 'purple' | 'green';
  isExternal?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  features,
  ctaText,
  ctaLink,
  price,
  color,
  isExternal = false
}) => {
  const colorClasses = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600'
  };

  const textColorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600'
  };

  const linkClasses = `block w-full text-white text-center py-3 rounded-lg font-semibold transition-colors ${colorClasses[color]} hover:opacity-90`;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
      {/* Colored top bar */}
      <div className={`h-2 ${colorClasses[color]} rounded-t-xl`} />
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-center mb-6">
          <div className={textColorClasses[color]}>
            {icon}
          </div>
        </div>
        <h2 className="text-xl font-bold text-center mb-4 text-gray-900">
          {title}
        </h2>
        <ul className="space-y-3 mb-6 text-gray-600 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {price && (
          <div className={`text-center font-bold ${textColorClasses[color]} mb-6`}>
            {price}
          </div>
        )}
        {isExternal ? (
          <a 
            href={ctaLink}
            className={linkClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaText}
          </a>
        ) : (
          <Link 
            href={ctaLink}
            className={linkClasses}
          >
            {ctaText}
          </Link>
        )}
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
            Learn • Connect • Grow
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon={<GraduationCap size={48} />}
            title="Tech Career Acceleration"
            features={[
              "Training + Internship programs",
              "Marketing, Sales & Engineering focus",
              "Real-world experience from day one"
            ]}
            ctaText="Apply Now"
            ctaLink="https://www.nytechcareer.com"
            isExternal={true}
            color="green"
          />

          <ServiceCard
            icon={<Users size={48} />}
            title="NYTech AI Community"
            features={[
              "Upcoming AI events",
              "AI innovation insights",
              "Community updates"
            ]}
            ctaText="Sign Up"
            ctaLink="https://nytechpulse.beehiiv.com/"
            isExternal={true}
            color="purple"
          />

          <ServiceCard
            icon={<Rocket size={48} />}
            title="Founder Support"
            features={[
              "Growth & GTM consulting",
              "Enterprise client management",
              "Startup Launch in 7 Days"
            ]}
            ctaText="Book a Meeting"
            ctaLink="/launch-package"
            color="blue"
          />
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Updates</h2>
          <div className="space-y-4">
            <a
              href="https://lu.ma/nytechevents"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Next AI Meetup</h3>
                <p className="text-gray-600">Join our upcoming community event</p>
              </div>
              <ArrowRight className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
            </a>
    
            <Link
              href="/success-stories"
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Success Stories</h3>
                <p className="text-gray-600">See how we help founders succeed</p>
              </div>
              <ArrowRight className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}