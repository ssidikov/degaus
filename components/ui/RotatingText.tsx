'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const ROTATING_ITEMS = [
  { text: 'e-commerce', icon: '/icons/sparkles.svg' },
  { text: 'mobile app', icon: '/icons/sparkles.svg' },
  { text: 'AI influencer', icon: '/icons/sparkles.svg' },
  { text: 'startup', icon: '/icons/sparkles.svg' },
]

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_ITEMS.length)
    }, 2000) // Change button every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <span className='relative inline-block h-[39px]'>
      {/* Invisible placeholder to reserve space for the widest button */}
      <span className='h-[39px] inline-flex items-center gap-2 px-3 py-2 rounded-3xl tracking-[-0.52px] leading-[28px] whitespace-nowrap font-bold opacity-0 pointer-events-none bg-transparent'>
        <Image src={ROTATING_ITEMS[0].icon} alt='placeholder' width={14} height={14} />
        <span>AI influencer</span>
      </span>

      {/* Rotating buttons */}
      {ROTATING_ITEMS.map((item, index) => (
        <span
          key={item.text}
          className='absolute left-0 top-0 h-[39px] inline-flex items-center gap-2 px-3 py-2 bg-[#001ffe1a] text-[#3254FF] rounded-3xl shadow-[0px_4px_10px_0px_rgba(50,84,255,0.25)] backdrop-blur-sm tracking-[-0.52px] leading-[28px] whitespace-nowrap font-bold transition-all duration-500'
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transform: index === currentIndex ? 'translateY(0)' : 'translateY(-10px)',
            pointerEvents: index === currentIndex ? 'auto' : 'none',
          }}>
          <Image src={item.icon} alt={`${item.text} icon`} width={14} height={14} />
          <span className='mb-1'>{item.text}</span>
        </span>
      ))}
    </span>
  )
}
