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
  title: 'degaus - AI content that actually converts',
  description: 'Activate, create & automate your content in one place for your brand',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${bricolageGrotesque.variable} ${darkerGrotesque.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
