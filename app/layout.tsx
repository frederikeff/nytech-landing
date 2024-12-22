import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

type SchemaOrgData = {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  founder: {
    '@type': string;
    name: string;
    sameAs: string[];
  };
  sameAs: string[];
};

const inter = Inter({ subsets: ['latin'] })

// Extend the Metadata type to include additional social properties
interface ExtendedMetadata extends Metadata {
  social?: {
    linkedin?: {
      handle: string;
      organizationID: string;
    };
    youtube?: string;
    instagram?: string;
  };
}

// Define base URL
const siteUrl = 'https://nytechventures.com'

export const metadata: ExtendedMetadata = {
  metadataBase: new URL(siteUrl),
  title: 'NYTech - Innovation Through Technology & Community',
  description: 'Building AI-powered solutions and fostering an inclusive tech ecosystem where innovators, creators and builders can transform their ideas into impactful ventures.',
  keywords: [
    'tech innovation',
    'women in tech',
    'AI solutions',
    'tech community',
    'founder support',
    'NYC tech',
    'technology solutions',
    'startup community', 
    'creators',
    'builders'
  ],
  authors: [{ name: 'NYTech Ventures' }],
  creator: 'NYTech Ventures',
  publisher: 'NYTech Ventures',
  
  // Icons configuration
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

  // Enhanced OpenGraph configuration
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'NYTech Ventures',
    title: 'NYTech - Innovation Through Technology & Community',
    description: 'Building AI-powered solutions and fostering an inclusive tech ecosystem where innovators, creators and builders can transform their ideas into impactful ventures.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NYTech Ventures - Building Creative Tech Solutions & Communities',
      }
    ],
    // Add social profiles to OpenGraph
    profile: {
      firstName: 'Frederike',
      lastName: 'Falke',
      username: 'frederikefalke'
    },
    // Add social links as sameAs array
    sameAs: [
      'https://linkedin.com/in/frederikefalke',
      'https://youtube.com/@frederikefalke',
      'https://instagram.com/frederikefalke'
    ]
  },

  // Twitter configuration
  twitter: {
    card: 'summary_large_image',
    title: 'NYTech - Innovation Through Technology & Community',
    description: 'Building AI-powered solutions and fostering an inclusive tech ecosystem.',
    site: '@FrederikeFalke',
    creator: '@FrederikeFalke',
    images: ['/images/og-image.jpg'],
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },

  // Canonical URL
  alternates: {
    canonical: siteUrl,
  },

  // Schema.org markup using other metadata field
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NYTech Ventures',
      url: siteUrl,
      logo: `${siteUrl}/images/og-image.jpg`,
      founder: {
        '@type': 'Person',
        name: 'Frederike Falke',
        sameAs: [
          'https://linkedin.com/in/frederikefalke',
          'https://twitter.com/FrederikeFalke',
          'https://youtube.com/@frederikefalke',
          'https://instagram.com/frederikefalke'
        ]
      },
      sameAs: [
        'https://linkedin.com/company/nytechventures',
        'https://twitter.com/YFrederikeFalke'
      ]
    } as SchemaOrgData)
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
