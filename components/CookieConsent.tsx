'use client'

import { useState, useEffect } from 'react'
import { FadeInView } from '@/components/ui'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're now on the client
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      const hasConsent = localStorage.getItem('cookieConsent')
      if (!hasConsent) {
        setShowBanner(true)
      }
    }
  }, [isClient])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setShowBanner(false)
  }

  const manageCookies = () => {
    // For now, just accept essential cookies
    localStorage.setItem('cookieConsent', 'managed')
    setShowBanner(false)
  }

  if (!isClient || !showBanner) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4'>
      <FadeInView delay={0.5}>
        <div className='mx-auto md:max-w-7xl'>
          <div
            className='relative overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_-10px_40px_rgba(255,255,255,0.05)]'
            style={{
              background:
                'linear-gradient(to right, #2C5364, #203A43, #0F2027)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            }}>
            <div className='px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-4'>
              {/* Text content */}
              <div className='flex-1'>
                <h3 className="font-['Inter'] text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2">
                  We use cookies
                </h3>
                <p className="font-['Inter'] text-xs sm:text-sm text-gray-300 leading-relaxed">
                  We use cookies to help this site function, understand service usage, and support
                  marketing efforts. Visit{' '}
                  <button
                    onClick={manageCookies}
                    className='text-gray-300 underline hover:text-white transition-colors'>
                    Manage Cookies
                  </button>{' '}
                  to change preferences anytime. View our{' '}
                  <a
                    href='#'
                    className='text-gray-300 underline hover:text-white transition-colors'>
                    Cookie Policy
                  </a>{' '}
                  for more info.
                </p>
              </div>

              {/* Buttons */}
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto'>
                <button
                  onClick={manageCookies}
                  className="font-['Inter'] text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-transparent border border-gray-500 hover:bg-gray-700 transition-all whitespace-nowrap w-full sm:w-auto">
                  Manage Cookies
                </button>
                <button
                  onClick={rejectCookies}
                  className="font-['Inter'] text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-transparent border border-gray-500 hover:bg-gray-700 transition-all whitespace-nowrap w-full sm:w-auto">
                  Reject non-essential
                </button>
                <button
                  onClick={acceptCookies}
                  className="font-['Inter'] text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-transparent border border-gray-500 hover:bg-gray-700 transition-all whitespace-nowrap w-full sm:w-auto">
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeInView>
    </div>
  )
}
