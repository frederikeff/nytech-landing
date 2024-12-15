'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: 'Newsletter', href: 'https://nytechpulse.beehiiv.com', external: true },
      { name: 'Events', href: 'https://lu.ma/nytechcommunity', external: true },
      { name: 'Products', href: '/products' },
      { name: 'Careers', href: '/careers' }
    ],
    services: [
      { name: 'Creative Innovation', href: '/services#creative-innovation-solutions' },
      { name: 'Founder Success', href: '/services#founder-success-studio' },
      { name: 'Tech & Systems', href: '/services#tech-&-systems-evolution' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ],
    social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nytechventures', external: true }
    ]
  };

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/">
                <Image
                src="/images/nytech-logo.svg"
                alt="NYTech Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
                />
            </Link>
            <p className="text-gray-600 mb-4 max-w-sm">
            Empowering innovation through creative technology solutions. Building tomorrow&apos;s digital landscape at the intersection of ideas and execution.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} NYTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;