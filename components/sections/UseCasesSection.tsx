'use client'

import Image from 'next/image'
import StatsCard from '../ui/StatsCard'

export default function UseCasesSection() {
  return (
    <section className='bg-[#e9e8f5] px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
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
        {/* Cards Container - Single card with two sections */}
        <div className='mb-12 rounded-3xl overflow-hidden bg-white shadow-lg lg:mx-8'>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr]'>
            {/* End-to-end Ads Section */}
            <div className='p-6 py-8 lg:p-10'>
              {/* Title */}
              <div className='mb-8 flex items-center gap-3'>
                <span className='flex w-9 h-9 justify-center items-center border-0 rounded-[5px] bg-[#E2E1EF] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]'>
                  <Image src='/gem.svg' alt='gem icon' width={28} height={28} />
                </span>
                <h3 className="font-['Darker_Grotesque'] text-3xl font-bold text-[#323232]">
                  End-to-end Ads
                </h3>
              </div>
              {/* Content: Video Left, Text Right */}
              <div className='flex flex-col md:flex-row gap-6'>
                {/* Video - Left Side */}
                <div className='overflow-hidden rounded-2xl relative w-full md:w-[190px] lg:w-[200px] h-[350px] shrink-0'>
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

                {/* Text Content - Right Side */}
                <div className='flex-1'>
                  <p className="font-['Darker_Grotesque'] text-lg lg:text-2xl font-bold text-[#8d8d8d] mb-6">
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
                        <span className="font-['Darker_Grotesque'] text-lg lg:text-xl font-semibold text-[#8d8d8d]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className='hidden lg:block w-px bg-[#e5e5e5]'></div>

            {/* Organic Content Section */}
            <div className='p-8 lg:p-10 border-t lg:border-t-0 border-[#e5e5e5]'>
              {/* Title */}
              <div className='mb-8 flex items-center gap-3'>
                <span className='flex w-9 h-9 justify-center items-center border-0 rounded-[5px] bg-[#E2E1EF] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]'>
                  <Image src='/balloon.svg' alt='balloon icon' width={28} height={28} />
                </span>
                <h3 className="font-['Darker_Grotesque'] text-3xl font-bold text-[#323232]">
                  Organic Content
                </h3>
              </div>

              {/* Content: Video Left, Text Right */}
              <div className='flex flex-col md:flex-row gap-6'>
                {/* Video - Left Side */}
                <div className='overflow-hidden rounded-2xl relative w-full md:w-[190px] lg:w-[200px] h-[340px] shrink-0'>
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

                {/* Text Content - Right Side */}
                <div className='flex-1'>
                  <p className="font-['Darker_Grotesque'] text-lg lg:text-2xl font-bold text-[#8d8d8d] mb-6">
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
                        <span className="font-['Darker_Grotesque'] text-lg lg:text-xl font-semibold text-[#8d8d8d]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats Cards */}
        <div className='grid grid-cols-1 gap-9 md:grid-cols-3'>
          <StatsCard
            imageSrc='/images/cards/Post more on social media.png'
            imageAlt='Post more on social media'
            backgroundColor='#a5e1ec'
            title='Post more on social media'
            description='Post more content, more views, more followers, more conversions. Simple as that.'
          />

          <StatsCard
            imageSrc='/images/cards/AI Ads that actually convert.png'
            imageAlt='AI Ads that actually convert'
            backgroundColor='#253de5'
            title='AI Ads that actually convert'
            description='Post AI content with high conversion rates. Start from a template or build your own.'
          />

          <StatsCard
            imageSrc='/images/cards/Go viral by testing 100+ hooks.png'
            imageAlt='Go viral by testing 100+ hooks'
            backgroundColor='#e2c0ff'
            title='Go viral by testing 100+ hooks'
            description='Test an unlimited amount of hooks, across multiple accounts, to maximize virality.'
          />
        </div>
      </div>
    </section>
  )
}
