'use client'

import Link from 'next/link'
import Image from 'next/image'
import InstagramIcon from '@/components/icons/InstagramIcon'
import TikTokIcon from '@/components/icons/TikTokIcon'
import { FadeInView } from '@/components/ui'

export default function Footer() {
  return (
    <footer className='bg-violet-100 border-t-4 border-violet-200/50'>
      <FadeInView>
        <div className='mx-auto max-w-7xl px-4 sm:px-5 md:px-6 py-12 sm:py-14 md:py-16'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12'>
            {/* Brand Column */}
            <div className='md:col-span-6'>
              <Link href='/' className='inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5'>
                <Image
                  src='/logo.svg'
                  alt='degaus logo'
                  width={40}
                  height={40}
                  className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'
                />
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Darker_Grotesque'] text-zinc-800">
                  degaus
                </span>
              </Link>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold font-['Darker_Grotesque'] text-zinc-600 mb-6 max-w-md">
                AI content that actually converts
              </p>
              <div className='flex items-center gap-3'>
                <Link
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/60 hover:bg-white transition-colors shadow-sm'>
                  <InstagramIcon className='w-5 h-5 sm:w-6 sm:h-6 text-zinc-700' />
                </Link>
                <Link
                  href='https://tiktok.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/60 hover:bg-white transition-colors shadow-sm'>
                  <TikTokIcon className='w-5 h-5 sm:w-6 sm:h-6 text-zinc-700' />
                </Link>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className='md:col-span-6 grid grid-cols-2 gap-8 md:gap-12'>
              {/* Quick Links */}
              <div>
                <h3 className="font-bold font-['Darker_Grotesque'] text-zinc-800 text-xl sm:text-2xl mb-4">
                  Quick Links
                </h3>
                <ul className='space-y-3'>
                  <li>
                    <Link
                      href='#features'
                      className="text-base sm:text-lg font-semibold font-['Darker_Grotesque'] text-zinc-600 hover:text-indigo-600 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#pricing'
                      className="text-base sm:text-lg font-semibold font-['Darker_Grotesque'] text-zinc-600 hover:text-indigo-600 transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#use-cases'
                      className="text-base sm:text-lg font-semibold font-['Darker_Grotesque'] text-zinc-600 hover:text-indigo-600 transition-colors">
                      Use Cases
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#faq'
                      className="text-base sm:text-lg font-semibold font-['Darker_Grotesque'] text-zinc-600 hover:text-indigo-600 transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-bold font-['Darker_Grotesque'] text-zinc-800 text-xl sm:text-2xl mb-4">
                  Legal
                </h3>
                <ul className='space-y-3'>
                  <li>
                    <Link
                      href='/privacy'
                      className="text-base sm:text-lg font-semibold font-['Darker_Grotesque'] text-zinc-600 hover:text-indigo-600 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/terms'
                      className="text-base sm:text-lg font-semibold font-['Darker_Grotesque'] text-zinc-600 hover:text-indigo-600 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='mt-12 pt-8 border-t border-violet-200/50'>
            <p className="text-base sm:text-lg font-semibold font-['Darker_Grotesque'] text-zinc-600 text-center">
              © {new Date().getFullYear()} degaus. All rights reserved.
            </p>
          </div>
        </div>
      </FadeInView>
    </footer>
  )
}
