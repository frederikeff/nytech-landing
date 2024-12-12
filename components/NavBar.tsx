'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import NavDropdown from './NavDropdown'

const navigation = [
  {
    name: 'Newsletters',
    href: '#newsletters',
    children: [
      { 
        name: 'NY Tech Pulse', 
        description: "Weekly NY Tech Updates",
        href: 'https://nytechpulse.beehiiv.com', 
        external: true  // Add this flag for external links
      },
      { 
        name: 'NY Tech AI',
        description: "The Builders Guide",
        href: 'https://nytechai.beehiiv.com', 
        external: true
      },
    ],
  },
  { name: 'Events', href: 'https://lu.ma/nytechcommunity', external: true },
  {
    name: 'StreamFlow',
    href: '/stream',
    children: [
      { name: 'NY Tech Career', href: '/nytechcareer', external: true },
      { name: 'AI Frank', href: '#tech' },
      { name: 'Product Ideas', href: '#careers' },
      { name: 'Designs & Mockups', href: '#creativity' },
    ],
  },
  { name: 'Careers', href: 'https://www.nytechcareer.com', external: true },
  { name: 'Ventures', href: '/products' },
  { name: 'Stream', href: '/stream' },
  { name: 'Test', href: '/test' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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
                    width={120} // This will adjust automatically while maintaining height
                    height={40}
                    priority
                    className="h-10 w-auto" // This ensures the width adjusts automatically
                />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <NavDropdown
                    item={item}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  />
                ) : (
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Login/Subscribe */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://nytechpulse.beehiiv.com/?modal=login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Login
            </a>
            <a
              href="https://nytechpulse.beehiiv.com/subscribe"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
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
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                        <ChevronDown className="ml-auto h-5 w-5" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
