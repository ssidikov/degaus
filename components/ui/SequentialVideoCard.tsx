'use client'

import { useState, useRef, useEffect } from 'react'
import { VIDEO_CONFIG } from '@/lib/videoConfig'

interface SequentialVideoCardProps {
  videos: string[]
  type?: string
  className?: string
  aspectRatio?: 'portrait' | 'square'
}

export default function SequentialVideoCard({
  videos,
  type,
  className = '',
  aspectRatio = 'portrait',
}: SequentialVideoCardProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const heightClass =
    aspectRatio === 'portrait' ? 'h-[350px]' : aspectRatio === 'square' ? 'h-[300px]' : 'h-full'

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      // Move to next video, or loop back to first
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }

    video.addEventListener('ended', handleVideoEnd)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [videos.length])

  // Play video when index changes
  useEffect(() => {
    const video = videoRef.current
    if (video && VIDEO_CONFIG.autoplay) {
      video.load()
      video.play().catch(() => {})
    }
  }, [currentVideoIndex])

  return (
    <div
      className={`overflow-hidden rounded-[20px] relative w-[195px] shrink-0 ${heightClass} ${className}`}>
      <video
        ref={videoRef}
        src={videos[currentVideoIndex]}
        autoPlay={VIDEO_CONFIG.autoplay}
        muted={VIDEO_CONFIG.muted}
        playsInline={VIDEO_CONFIG.playsInline}
        preload={VIDEO_CONFIG.preload}
        className='w-full h-full object-cover'
        onLoadedMetadata={(e) => {
          if (VIDEO_CONFIG.autoplay) {
            const video = e.currentTarget
            video.play().catch(() => {})
          }
        }}
      />
      {type && (
        <div className='absolute inline-flex w-auto h-[21px] text-nowrap top-3 left-2 p-1.5 bg-[#bb00ff4d] backdrop-blur-sm rounded-[5px] z-10'>
          <span className='text-base tracking-[-0.32px] relative bottom-[5px] font-semibold text-[#FBB4FF] leading-none'>
            {type}
          </span>
        </div>
      )}
    </div>
  )
}
