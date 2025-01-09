import Link from 'next/link';
import { Building2, GraduationCap, Building } from 'lucide-react';

interface UserTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
}

const UserTypeCard: React.FC<UserTypeCardProps> = ({
  icon,
  title,
  description,
  link,
  isExternal = false
}) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isExternal) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={link} className="block h-full">
        {children}
      </Link>
    );
  };

  return (
    <CardWrapper>
      <div className="h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 p-6">
        <div className="text-center mb-4">
          <div className="inline-block p-3 bg-blue-50 rounded-full text-blue-600 mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </CardWrapper>
  );
};

export default function CareerProgram() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join NYTech Career Program
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your role to learn more about how we can work together to accelerate tech careers and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <UserTypeCard
            icon={<Building2 size={32} />}
            title="Universities"
            description="Partner with us to provide real-world experience and career opportunities for your students"
            link="https://nytechcareer.com/universities"
            isExternal={true}
          />

          <UserTypeCard
            icon={<Building size={32} />}
            title="Startups"
            description="Access top talent and build your team with pre-trained, motivated professionals"
            link="https://nytechcareer.com/startups"
            isExternal={true}
          />

          <UserTypeCard
            icon={<GraduationCap size={32} />}
            title="Students"
            description="Launch your tech career with hands-on training and internship opportunities"
            link="/career-program/apply"
          />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-sm p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose NYTech Career Program?
            </h2>
            <div className="text-left space-y-4 text-gray-600">
              <p>• Hands-on experience with real startups from day one</p>
              <p>• Focused tracks in Marketing, Sales, and Engineering</p>
              <p>• Direct connection to NYC's vibrant tech ecosystem</p>
              <p>• Mentorship from experienced industry professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}