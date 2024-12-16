// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'  // Update path if different
import Footer from '@/components/Footer'  // Update path if different

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('uttps://nytechventures.com'),
  title: 'NYTech - Innovation Through Technology & Community',
  description: 'Building AI-powered solutions and fostering an inclusive tech ecosystem where especially female innovators and founders can transform their ideas into impactful ventures.',
  keywords: [
    'tech innovation',
    'women in tech',
    'AI solutions',
    'tech community',
    'founder support',
    'NYC tech',
    'technology solutions',
    'startup community'
  ],
  authors: [{ name: 'NYTech Ventures'}],
  creator: 'NYTech Ventures',
  publisher: 'NYTech Ventures',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nytechventures.com',
    siteName: 'NYTech Ventures',
    title: 'NYTech - Innovation Through Technology & Community',
    description: 'Building AI-powered solutions and fostering an inclusive tech ecosystem where especially female innovators and founders can transform their ideas into impactful ventures.',
    images: [
      {
        url: '/images/og-image.jpg', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'NYTech Ventures - Building Creative Tech Solutions & Communities',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYTech - Innovation Through Technology & Community',
    description: 'Building AI-powered solutions and fostering an inclusive tech ecosystem.',
    site: '@YFrederikeFalke', // Update with your Twitter handle
    creator: '@FrederikeFalke', // Update with your Twitter handle
    images: ['/images/og-image.jpg'], // Same image as OpenGraph
  },
  social: {
    linkedin: {
      handle: 'frederikefalke',
      organizationID: 'nytechventures',
    },
    youtube: 'frederikefalke',
    instagram: 'frederikefalke',
  },
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
  alternates: {
    cannonical: 'https://nytechventures.com',
  },
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
        </div>
      </body>
    </html>
  )
}
