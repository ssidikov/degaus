'use client'

import { useState, useEffect } from 'react'
import { FadeInView } from '@/components/ui'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showManage, setShowManage] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem(
      'cookiePreferences',
      JSON.stringify({ essential: true, analytics: true, marketing: true })
    )
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    localStorage.setItem(
      'cookiePreferences',
      JSON.stringify({ essential: true, analytics: false, marketing: false })
    )
    setShowBanner(false)
  }

  const manageCookies = () => {
    setShowManage(true)
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', 'managed')
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    setShowBanner(false)
    setShowManage(false)
  }

  if (!showBanner) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 px-2 py-3 sm:p-4 w-[90%] md:w-auto mx-auto'>
      <FadeInView delay={0.5}>
        <div className='mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-7xl'>
          <div
            className='relative overflow-hidden rounded-xl sm:rounded-2xl shadow-[0_-10px_40px_rgba(255,255,255,0.05)] border border-white/10'
            style={{
              background: 'rgba(32, 58, 67, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}>
            {/* Gradient overlay for depth */}
            <div
              className='absolute inset-0 pointer-events-none'
              style={{
                background:
                  'linear-gradient(135deg, rgba(44, 83, 100, 0.3) 0%, rgba(15, 32, 39, 0.3) 100%)',
              }}
            />
            <div className='px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-4 relative z-10'>
              {!showManage ? (
                <>
                  {/* Text content */}
                  <div className='flex-1'>
                    <h3 className="font-['Darker_Grotesque'] text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2">
                      We use cookies
                    </h3>
                    <p className="font-['Darker_Grotesque'] text-xs sm:text-sm text-gray-300 leading-relaxed">
                      We use cookies to help this site function, understand service usage, and
                      support marketing efforts. Visit{' '}
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
                      className="font-['Darker_Grotesque'] text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-transparent border border-gray-500 hover:bg-gray-700 transition-all whitespace-nowrap w-full sm:w-auto">
                      Manage Cookies
                    </button>
                    <button
                      onClick={rejectCookies}
                      className="font-['Darker_Grotesque'] text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-transparent border border-gray-500 hover:bg-gray-700 transition-all whitespace-nowrap w-full sm:w-auto">
                      Reject non-essential
                    </button>
                    <button
                      onClick={acceptCookies}
                      className="font-['Darker_Grotesque'] text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-transparent border border-gray-500 hover:bg-gray-700 transition-all whitespace-nowrap w-full sm:w-auto">
                      Accept all
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Cookie Management Panel */}
                  <div className='flex-1'>
                    <h3 className="font-['Darker_Grotesque'] text-sm sm:text-base font-semibold text-white mb-3">
                      Manage Cookie Preferences
                    </h3>

                    {/* Essential Cookies */}
                    <div className='mb-3 pb-3 border-b border-gray-600'>
                      <div className='flex items-center justify-between mb-1'>
                        <h4 className="font-['Darker_Grotesque'] text-xs sm:text-sm font-semibold text-white">
                          Essential Cookies
                        </h4>
                        <span className="font-['Darker_Grotesque'] text-xs text-gray-400">
                          Always On
                        </span>
                      </div>
                      <p className="font-['Darker_Grotesque'] text-xs text-gray-300">
                        Required for the website to function properly.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className='mb-3 pb-3 border-b border-gray-600'>
                      <div className='flex items-center justify-between mb-1'>
                        <h4 className="font-['Darker_Grotesque'] text-xs sm:text-sm font-semibold text-white">
                          Analytics Cookies
                        </h4>
                        <button
                          onClick={() =>
                            setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                          }
                          className={`relative w-10 h-5 rounded-full transition-colors ${
                            preferences.analytics ? 'bg-blue-500' : 'bg-gray-600'
                          }`}>
                          <span
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                      <p className="font-['Darker_Grotesque'] text-xs text-gray-300">
                        Help us understand how visitors use our website.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className='mb-3'>
                      <div className='flex items-center justify-between mb-1'>
                        <h4 className="font-['Darker_Grotesque'] text-xs sm:text-sm font-semibold text-white">
                          Marketing Cookies
                        </h4>
                        <button
                          onClick={() =>
                            setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))
                          }
                          className={`relative w-10 h-5 rounded-full transition-colors ${
                            preferences.marketing ? 'bg-blue-500' : 'bg-gray-600'
                          }`}>
                          <span
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                              preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                      <p className="font-['Darker_Grotesque'] text-xs text-gray-300">
                        Used to deliver personalized ads and content.
                      </p>
                    </div>
                  </div>

                  {/* Management Buttons */}
                  <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto'>
                    <button
                      onClick={() => setShowManage(false)}
                      className="font-['Darker_Grotesque'] text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-transparent border border-gray-500 hover:bg-gray-700 transition-all whitespace-nowrap w-full sm:w-auto">
                      Back
                    </button>
                    <button
                      onClick={savePreferences}
                      className="font-['Darker_Grotesque'] text-xs sm:text-sm font-medium text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-blue-600 border border-blue-600 hover:bg-blue-700 transition-all whitespace-nowrap w-full sm:w-auto">
                      Save Preferences
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </FadeInView>
    </div>
  )
}
