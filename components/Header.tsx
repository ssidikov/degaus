'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className='w-full sticky top-0 z-50 pt-[env(safe-area-inset-top)]'>
        <div className='container mx-auto px-4 sm:px-6 py-4 sm:py-5 lg:py-6'>
          <div
            className='mx-auto max-w-4xl rounded-[24px] p-3 liquid-glass flex items-center justify-between gap-2'
            style={{
              background: 'rgba(190, 190, 190, 0.2)',
              backdropFilter: 'blur(80px)',
              WebkitBackdropFilter: 'blur(80px)',
            }}>
            <Link href='/' aria-label='degaus home' className='flex items-center gap-1.5 sm:gap-2'>
              <Image
                src='/icons/logo.svg'
                alt='degaus logo'
                width={108}
                height={25}
                unoptimized
                className='w-[108px] h-[25px]'
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center gap-6 lg:gap-8'>
              <a
                href='#use-cases'
                className='text-sm lg:text-base font-semibold hover:text-[#b308a7] transition-colors'>
                Use Cases
              </a>
              <a
                href='#features'
                className='text-sm lg:text-base font-semibold hover:text-[#b308a7] transition-colors'>
                Features
              </a>
              <a
                href='#pricing'
                className='text-sm lg:text-base font-semibold hover:text-[#b308a7] transition-colors'>
                Pricing
              </a>
            </nav>

            <div className='flex items-center gap-2.5'>
              {/* Desktop Buttons */}
              <div className='hidden sm:flex items-center gap-2.5'>
                <button
                  aria-label='Login'
                  className='flex items-center justify-center w-[71px] h-[35px] rounded-[10px] bg-[#E0E0E0] px-3 sm:px-4 py-1 sm:py-1.5 pb-[6px] sm:pb-[10px] text-base lg:text-xl font-bold text-black shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:bg-gray-300 transition cursor-pointer tracking-[-0.4px]'>
                  Login
                </button>

                <button
                  aria-label='Try for free'
                  className='relative flex items-center justify-center w-[112px] h-[35px] rounded-[10px] px-3 sm:px-4 py-1 sm:py-1.5 pb-[6px] sm:pb-[10px] text-base lg:text-xl font-bold text-[#EEE] bg-linear-to-r from-[#152cd3] to-[#b308a7] shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 whitespace-nowrap tracking-[-0.4px] overflow-hidden group'
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0px 8px 30px 0px rgba(46,71,249,0.45), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0px 4px 15px 0px rgba(46,71,249,0.25), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.3)'
                  }}>
                  <div
                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s linear infinite',
                    }}
                  />
                  <span className='relative z-10'>Try for free</span>
                </button>
              </div>

              {/* Mobile Burger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 relative z-50'
                aria-label='Toggle menu'
                aria-expanded={mobileMenuOpen}>
                <span
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] z-40 md:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background:
            'linear-gradient(180deg, rgba(21, 44, 211, 0.95) 0%, rgba(179, 8, 167, 0.95) 100%)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        }}>
        <div className='flex flex-col h-full pt-24 px-6 pb-8'>
          {/* Navigation Links */}
          <nav className='flex flex-col gap-6 mb-12'>
            <a
              href='#use-cases'
              onClick={handleNavClick}
              className='text-xl font-semibold text-white hover:text-[#E0E0E0] transition-colors py-3 border-b border-white/20'>
              Use Cases
            </a>
            <a
              href='#features'
              onClick={handleNavClick}
              className='text-xl font-semibold text-white hover:text-[#E0E0E0] transition-colors py-3 border-b border-white/20'>
              Features
            </a>
            <a
              href='#pricing'
              onClick={handleNavClick}
              className='text-xl font-semibold text-white hover:text-[#E0E0E0] transition-colors py-3 border-b border-white/20'>
              Pricing
            </a>
          </nav>

          {/* Mobile Action Buttons */}
          <div className='flex flex-col gap-4 mt-auto'>
            <button
              aria-label='Login'
              className='w-full h-[45px] rounded-[10px] bg-[#E0E0E0] px-4 py-2 pb-[10px] text-lg font-bold text-black shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:bg-gray-300 transition cursor-pointer tracking-[-0.4px]'>
              Login
            </button>

            <button
              aria-label='Try for free'
              className='relative w-full h-[45px] rounded-[10px] px-4 py-2 pb-[10px] text-lg font-bold text-white bg-white/20 shadow-[0px_4px_15px_0px_rgba(255,255,255,0.15),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:bg-white/30 whitespace-nowrap tracking-[-0.4px] overflow-hidden group'
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0px 8px 30px 0px rgba(255,255,255,0.25), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0px 4px 15px 0px rgba(255,255,255,0.15), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.3)'
              }}>
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s linear infinite',
                }}
              />
              <span className='relative z-10'>Try for free</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
