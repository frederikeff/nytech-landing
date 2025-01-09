'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  {
    name: 'Newsletter',
    href: 'https://nytechpulse.beehiiv.com',
    external: true
  },
  { 
    name: 'Events', 
    href: 'https://lu.ma/nytechcommunity', 
    external: true 
  },
  { name: 'Ventures', href: '/products'},
  { name: 'Careers', href: '/careers' },
  { name: 'Success Stories', href: '/success' },
  { name: 'Women Founders', href: '/women' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/"> 
                <Image
                    src="/images/nytech-logo.svg"
                    alt="NYTech Logo"
                    width={120}
                    height={40}
                    priority
                    className="h-10 w-auto"
                />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-blue-50 rounded-md transition-all duration-200 hover:shadow-[0_2px_8px_rgba(59,130,246,0.15)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login/Subscribe */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://nytechpulse.beehiiv.com/?modal=login" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 hover:bg-blue-50 rounded-md transition-all duration-200 hover:shadow-[0_2px_8px_rgba(59,130,246,0.15)]"
            >
              Login
            </a>
            <a
              href="https://nytechpulse.beehiiv.com/subscribe"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Subscribe
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-blue-50 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-3 space-y-1">
                <a
                  href="https://nytechpulse.beehiiv.com/?modal=login"
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-blue-50"
                >
                  Login
                </a>
                <a
                  href="https://nytechpulse.beehiiv.com/subscribe"
                  className="block px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
