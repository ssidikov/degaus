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

        {/* Cards Container - Single card with two sections */}
        <div className='mb-12 rounded-3xl overflow-hidden bg-white shadow-lg'>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr]'>
            {/* End-to-end Ads Section */}
            <div className='p-8 lg:p-10'>
              {/* Title */}
              <div className='mb-8 flex items-center gap-3'>
                <Image src='/gem.svg' alt='gem icon' width={40} height={40} />
                <h3 className="font-['Darker_Grotesque'] text-3xl font-bold text-[#323232]">
                  End-to-end Ads
                </h3>
              </div>

              {/* Content: Video Left, Text Right */}
              <div className='flex flex-col md:flex-row gap-6'>
                {/* Video - Left Side */}
                <div className='overflow-hidden rounded-2xl relative w-full md:w-[190px] lg:w-[200px] h-[340px] shrink-0'>
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
                  <p className="font-['Darker_Grotesque'] text-lg lg:text-xl font-semibold text-[#8d8d8d] mb-6">
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
                        <span className="font-['Darker_Grotesque'] text-lg lg:text-xl font-medium text-[#8d8d8d]">
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
                <Image src='/balloon.svg' alt='balloon icon' width={40} height={40} />
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
                  <p className="font-['Darker_Grotesque'] text-lg lg:text-xl font-semibold text-[#8d8d8d] mb-6">
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
                        <span className="font-['Darker_Grotesque'] text-lg lg:text-xl font-medium text-[#8d8d8d]">
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
