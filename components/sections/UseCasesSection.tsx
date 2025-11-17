'use client'

import Image from 'next/image'
import { Badge, VideoCard, FeatureList, StatsCard } from '@/components/ui'
import {
  END_TO_END_FEATURES,
  ORGANIC_CONTENT_FEATURES,
  STATS_CARDS,
} from '@/lib/constants'

export default function UseCasesSection() {
  return (
    <section className='bg-[#e9e8f5] px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        <Badge>Use cases</Badge>

        <h2 className='mb-16 text-4xl lg:text-5xl font-bold leading-tight tracking-[-1.5px] text-[#323232] text-center'>
          Create winning content in minutes
        </h2>

        {/* Cards Container - Single card with two sections */}
        <div className='mb-12 rounded-3xl overflow-hidden bg-white shadow-lg lg:mx-8'>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr]'>
            {/* End-to-end Ads Section */}
            <div className='p-6 py-8 lg:p-10'>
              <div className='mb-8 flex items-center gap-3'>
                <span className='flex w-9 h-9 justify-center items-center border-0 rounded-[5px] bg-[#E2E1EF] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]'>
                  <Image src='/gem.svg' alt='gem icon' width={28} height={28} />
                </span>
                <h3 className="font-['Darker_Grotesque'] text-3xl font-bold text-[#323232]">
                  End-to-end Ads
                </h3>
              </div>

              <div className='flex flex-col md:flex-row gap-6'>
                <VideoCard
                  src='/videos/End-to-end Ads.mov'
                  className='w-full md:w-[190px] lg:w-[200px] h-[350px]'
                />

                <div className='flex-1'>
                  <p className="font-['Darker_Grotesque'] text-lg lg:text-2xl font-bold text-[#8d8d8d] mb-6">
                    Generate end-to-end winning ads in minutes
                  </p>
                  <FeatureList features={END_TO_END_FEATURES} iconColor='blue' />
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className='hidden lg:block w-px bg-[#e5e5e5]' />

            {/* Organic Content Section */}
            <div className='p-8 lg:p-10 border-t lg:border-t-0 border-[#e5e5e5]'>
              <div className='mb-8 flex items-center gap-3'>
                <span className='flex w-9 h-9 justify-center items-center border-0 rounded-[5px] bg-[#E2E1EF] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]'>
                  <Image src='/balloon.svg' alt='balloon icon' width={28} height={28} />
                </span>
                <h3 className="font-['Darker_Grotesque'] text-3xl font-bold text-[#323232]">
                  Organic Content
                </h3>
              </div>

              <div className='flex flex-col md:flex-row gap-6'>
                <VideoCard
                  src='/videos/Organic Content.mov'
                  className='w-full md:w-[190px] lg:w-[200px] h-[340px]'
                />

                <div className='flex-1'>
                  <p className="font-['Darker_Grotesque'] text-lg lg:text-2xl font-bold text-[#8d8d8d] mb-6">
                    Generate viral organic content in minutes
                  </p>
                  <FeatureList features={ORGANIC_CONTENT_FEATURES} iconColor='pink' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 gap-9 md:grid-cols-3'>
          {STATS_CARDS.map((card, index) => (
            <StatsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
