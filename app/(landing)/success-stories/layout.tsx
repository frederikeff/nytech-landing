// app/(landing)/layout.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const siteUrl = 'https://nytechventures.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '7-Day Startup Launch | NYTech Ventures',
  description: 'Launch your complete brand & website in 7 days. Fixed price, everything included.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'NYTech Ventures',
    title: '7-Day Startup Launch | NYTech Ventures',
    description: 'Complete brand and website setup in 7 days - fixed price, everything included.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NYTech Ventures - 7-Day Startup Launch',
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
    <div className="flex flex-col min-h-screen">
        <header className="py-6">
         <div className="flex justify-center">
          <Link href="https://nytechventures.com" target="_blank" rel="noopener noreferrer">
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
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-6 text-center text-gray-600 border-t">
        <p>Brought to you by NYTech Ventures © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}