'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const ROTATING_WORDS = ['e-commerce', 'mobile app', 'AI influencer', 'startup']

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className='h-[40px] inline-flex items-center gap-2 px-3 py-2 bg-blue-100/60 text-[#3254FF] rounded-3xl shadow-[0px_4px_10px_0px_rgba(50,84,255,0.25)] backdrop-blur-sm tracking-[-0.52px] leading-[28px] whitespace-nowrap'>
      <Image src='/icons/sparkles.svg' alt='ecommerce icon' width={14} height={14} />
      <span className='relative inline-block min-w-[130px]'>
        {ROTATING_WORDS.map((word, index) => (
          <span
            key={word}
            className='absolute left-0 top-[-16px] text-center flex items-center justify-center transition-all duration-500 font-bold whitespace-nowrap'
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transform: index === currentIndex ? 'translateY(0)' : 'translateY(-10px)',
            }}>
            {word}
          </span>
        ))}
      </span>
    </span>
  )
}
