import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const siteUrl = 'https://nytechventures.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'RelationshipOS - Reimagining CRM',
  description: 'The first relationship-centric CRM that works the way your brain does. No more manual data entry. No more scattered information.',
  keywords: ['CRM', 'Sales', 'Relationship Management', 'AI', 'SalesOps', 'RevOps'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'RelationshipOS',
    title: 'RelationshipOS - Reimagining CRM',
    description: 'The first relationship-centric CRM that works the way your brain does. No more manual data entry. No more scattered information.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RelationshipOS - Reimagining CRM',
      }
    ]
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="py-4 md:py-6 px-4 w-full bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <Link 
              href="https://nytechventures.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-block bg-white rounded-lg p-2"
            >
              <Image
                src="/images/nytech-logo.svg"
                alt="NYTech Logo"
                width={120}
                height={40}
                priority
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-4 md:py-6 text-center text-gray-600 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p>Brought to you by NYTech Ventures © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}