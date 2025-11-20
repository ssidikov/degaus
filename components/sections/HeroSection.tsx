'use client'

import InstagramIcon from '../icons/InstagramIcon'
import TikTokIcon from '../icons/TikTokIcon'
import Image from 'next/image'
import { VideoCard, FadeInView } from '@/components/ui'
import { CONTENT_CARDS, TRUSTED_BRANDS } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className='pt-8 pb-20'>
      <div className='container mx-auto max-w-7xl'>
        {/* Hero Content */}
        <FadeInView>
          <div className='text-center mb-16 max-w-4xl mx-auto px-4'>
            <h1 className='text-[clamp(3rem,2.4435rem+2.7826vw,5rem)] font-extrabold mb-9 leading-[1.1] tracking-tight'>
              <span className='text-gray-600'>
                AI content that <br />
                actually
              </span>
              <span className='text-black'> converts</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center gap-2 text-[26px] font-bold text-[#7C7C7C] mb-9 leading-none tracking-tight'>
              <span>In minutes, create & automate your</span>
              <InstagramIcon className='w-8 h-8' />
              <span>and</span>
              <TikTokIcon className='w-8 h-8' />
              <span>content for your</span>
              <span className='inline-flex items-center gap-1.5 px-3 py-3 bg-blue-100/60 text-blue-600 rounded-2xl shadow-[0px_4px_10px_0px_rgba(50,84,255,0.25)] backdrop-blur-sm'>
                <Image src='/sparkles.svg' alt='ecommerce icon' width={14} height={14} />
                e-commerce
              </span>
            </div>

            <button className='p-[18px] text-[26px] font-bold text-gray-100 bg-linear-to-r from-[#152cd3] to-[#b308a7] rounded-2xl shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:opacity-90 transition'>
              Try for free with 1-click
            </button>
          </div>
        </FadeInView>
      </div>

      {/* Content Cards - Infinite Scroll */}
      <div className='w-full mb-24 overflow-hidden'>
        <div className='scroll-container gap-9 flex'>
          {[...CONTENT_CARDS, ...CONTENT_CARDS].map((card, index) => (
            <VideoCard
              key={index}
              src={card.video}
              type={card.type}
              className='w-[195px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)]'
            />
          ))}
        </div>
      </div>

      {/* Trusted By */}
      <div className='container mx-auto max-w-7xl'>
        <FadeInView delay={0.2}>
          <div className='text-center'>
            <p className='text-gray-500 text-[26px] font-bold mb-10 tracking-tight'>Trusted by</p>
            <div className='flex flex-wrap items-center justify-center gap-5 lg:gap-20'>
              {TRUSTED_BRANDS.map((brand, index) => (
                <div key={index} className='relative opacity-80 hover:opacity-100 transition'>
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
