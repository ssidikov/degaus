'use client'

import Image from 'next/image'

export default function UseCasesSection() {
  return (
    <section className='bg-[#e9e8f5] px-6 py-16'>
      <div className='mx-auto max-w-7xl'>
        {/* Badge */}
        <div className='mb-8 flex justify-center'>
          <div className='rounded-[20px] bg-white px-6 py-2 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]'>
            <p className="font-['Darker_Grotesque'] text-2xl font-semibold tracking-[-0.72px] text-[#7e7e7e]">
              Use cases
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className='mb-16 text-4xl lg:text-5xl font-bold leading-tight tracking-[-1.5px] text-[#323232] text-center'>
          Create winning content in minutes
        </h2>

        {/* Two Column Layout */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 mb-12'>
          {/* End-to-end Ads */}
          <div className='rounded-3xl bg-white p-8 shadow-lg'>
            <div className='mb-6 flex items-center gap-3'>
              <Image src='/gem.svg' alt='gem icon' width={40} height={40} />
              <h3 className="font-['Darker_Grotesque'] text-3xl font-bold text-[#323232]">
                End-to-end Ads
              </h3>
            </div>
            <div className='mb-6 overflow-hidden rounded-2xl relative aspect-video'>
              <video
                src='/videos/End-to-end Ads.mov'
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
            </div>
            <p className="font-['Darker_Grotesque'] text-xl font-semibold text-[#323232] mb-4">
              Generate end-to-end winning ads in minutes
            </p>
            <ul className='space-y-3'>
              {[
                'AI UGC overlays',
                'Generate B-rolls',
                'Static ads',
                'Cinematic ads',
                'Podcasts ads',
              ].map((feature, i) => (
                <li key={i} className='flex items-center gap-3'>
                  <Image src='/checked-blue.svg' alt='check' width={24} height={24} />
                  <span className="font-['Darker_Grotesque'] text-xl font-semibold text-[#8d8d8d]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Organic Content */}
          <div className='rounded-3xl bg-white p-8 shadow-lg'>
            <div className='mb-6 flex items-center gap-3'>
              <Image src='/balloon.svg' alt='balloon icon' width={40} height={40} />
              <h3 className="font-['Darker_Grotesque'] text-3xl font-bold text-[#323232]">
                Organic Content
              </h3>
            </div>
            <div className='mb-6 overflow-hidden rounded-2xl relative aspect-video'>
              <video
                src='/videos/Organic Content.mov'
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
            </div>
            <p className="font-['Darker_Grotesque'] text-xl font-semibold text-[#323232] mb-4">
              Generate viral organic content in minutes
            </p>
            <ul className='space-y-3'>
              {[
                'AI influencers',
                'Tiktok slide-shows',
                'Shocked hook',
                'Text overlays',
                'Podcasts',
              ].map((feature, i) => (
                <li key={i} className='flex items-center gap-3'>
                  <Image src='/checked-pink.svg' alt='check' width={24} height={24} />
                  <span className="font-['Darker_Grotesque'] text-xl font-semibold text-[#8d8d8d]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {/* Card 1 */}
          <div className='rounded-3xl bg-linear-to-br from-teal-400 to-teal-500 p-6 text-white shadow-lg'>
            <p className="mb-2 font-['Darker_Grotesque'] text-4xl font-bold">5x+</p>
            <p className="font-['Darker_Grotesque'] text-2xl font-semibold">More posts</p>
          </div>

          {/* Card 2 */}
          <div className='rounded-3xl bg-linear-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg'>
            <p className="mb-2 font-['Darker_Grotesque'] text-4xl font-bold">4.2x</p>
            <p className="font-['Darker_Grotesque'] text-2xl font-semibold">Average ROAS</p>
          </div>

          {/* Card 3 */}
          <div className='rounded-3xl bg-linear-to-br from-purple-500 to-pink-500 p-6 text-white shadow-lg'>
            <p className="mb-2 font-['Darker_Grotesque'] text-4xl font-bold">+250%</p>
            <p className="font-['Darker_Grotesque'] text-2xl font-semibold">More views</p>
          </div>
        </div>
      </div>
    </section>
  )
}
