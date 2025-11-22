import type { Metadata } from 'next'
import { Bricolage_Grotesque, Darker_Grotesque } from 'next/font/google'
import PostHogProvider from '@/components/PostHogProvider'
import './globals.css'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-darker',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'degaus - AI Content That Actually Converts',
  description:
    'Create winning AI content in minutes. Build AI influencers, automate content with high-quality B-rolls, and scale your e-commerce brand.',
  keywords: [
    'AI content',
    'AI influencers',
    'content automation',
    'AI UGC',
    'video editing',
    'e-commerce content',
    'degaus',
  ],
  authors: [{ name: 'degaus' }],
  creator: 'degaus',
  publisher: 'degaus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://degaus.com'),
  alternates: {
    canonical: 'https://degaus.com',
  },
  openGraph: {
    title: 'degaus - AI Content That Actually Converts',
    description:
      'Create winning AI content in minutes. Build AI influencers, automate content with B-rolls, and scale your e-commerce brand.',
    url: 'https://degaus.com',
    siteName: 'degaus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'degaus - AI Content That Actually Converts',
    description:
      'Create winning AI content in minutes. Build AI influencers, automate content with B-rolls, and scale your e-commerce brand.',
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
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/logo.svg' type='image/svg+xml' />

        {/* DNS prefetch and preconnect for external resources */}
        <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

        {/* Preload critical hero icons */}
        <link rel='preload' href='/icons/instagram.svg' as='image' type='image/svg+xml' />
        <link rel='preload' href='/icons/tiktok.svg' as='image' type='image/svg+xml' />

        {/* Preload critical fonts */}
        <link
          rel='preload'
          href='/fonts/BricolageGrotesque-Bold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </head>
      <body
        className={`${bricolageGrotesque.variable} ${darkerGrotesque.variable} font-sans antialiased`}
        suppressHydrationWarning>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  )
}
