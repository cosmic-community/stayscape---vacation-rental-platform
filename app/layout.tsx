import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'StayScape - Find Your Perfect Vacation Rental',
  description: 'Discover unique vacation rentals, meet trusted hosts, and read authentic guest reviews. Book your dream getaway today.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" defer />
      </head>
      <body className="min-h-screen flex flex-col bg-secondary-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}