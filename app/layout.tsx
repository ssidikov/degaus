import type { Metadata } from 'next'
import { Bricolage_Grotesque, Darker_Grotesque } from 'next/font/google'
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
    'Create winning AI content in minutes. Build realistic AI influencers, automate your content with high-quality B-rolls, and scale your e-commerce brand with degaus.',
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
  openGraph: {
    title: 'degaus - AI Content That Actually Converts',
    description:
      'Create winning AI content in minutes. Build realistic AI influencers and automate your content.',
    url: 'https://degaus.com',
    siteName: 'degaus',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'degaus - AI Content That Actually Converts',
    description:
      'Create winning AI content in minutes. Build realistic AI influencers and automate your content.',
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
      </head>
      <body
        className={`${bricolageGrotesque.variable} ${darkerGrotesque.variable} font-sans antialiased`}
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
