'use client'

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
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
        className='w-full h-full object-cover'
        onLoadedMetadata={(e) => {
          const video = e.currentTarget
          video.play().catch(() => {})
        }}
      />
      {type && (
        <div className='absolute top-3 left-2 px-1.5 py-1.5 bg-purple-500/30 backdrop-blur-sm rounded-md z-10'>
          <span className='text-base font-semibold text-pink-200 leading-none tracking-tight'>
            {type}
          </span>
        </div>
      )}
    </div>
  )
}
