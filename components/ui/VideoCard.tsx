'use client'

import { VIDEO_CONFIG } from '@/lib/videoConfig'

interface VideoCardProps {
  src: string
  type?: string
  className?: string
  aspectRatio?: 'portrait' | 'square'
}

export default function VideoCard({
  src,
  type,
  className = '',
  aspectRatio = 'portrait',
}: VideoCardProps) {
  const heightClass =
    aspectRatio === 'portrait' ? 'h-[350px]' : aspectRatio === 'square' ? 'h-[300px]' : 'h-full'

  return (
    <div
      className={`overflow-hidden rounded-2xl relative w-[195px] shrink-0 ${heightClass} ${className}`}>
      <video
        src={src}
        autoPlay={VIDEO_CONFIG.autoplay}
        loop={VIDEO_CONFIG.loop}
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
