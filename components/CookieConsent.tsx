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
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowBanner(false)
  }

  if (!isClient || !showBanner) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6'>
      <FadeInView delay={0.5}>
        <div className='mx-auto max-w-7xl'>
          <div className='relative bg-white rounded-2xl shadow-[0px_-4px_30px_0px_rgba(0,0,0,0.15)] border-4 border-violet-100 overflow-hidden'>
            {/* Decorative gradient */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-700 via-violet-500 to-fuchsia-700' />

            <div className='p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
              <div className='flex-1'>
                <h3 className="font-['Darker_Grotesque'] text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  🍪 We use cookies
                </h3>
                <p className="font-['Darker_Grotesque'] text-lg sm:text-xl text-gray-600 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content,
                  and analyze our traffic. By clicking &ldquo;Accept&rdquo;, you consent to our use
                  of cookies.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
                <button
                  onClick={declineCookies}
                  className="font-['Darker_Grotesque'] text-lg sm:text-xl font-bold text-gray-600 px-6 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all">
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="font-['Darker_Grotesque'] text-lg sm:text-xl font-bold text-white px-6 py-3 rounded-xl bg-linear-to-r from-blue-700 to-fuchsia-700 hover:opacity-90 transition-opacity shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25)]">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeInView>
    </div>
  )
}
