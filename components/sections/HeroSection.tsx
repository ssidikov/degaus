'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { VideoCard, FadeInView } from '@/components/ui'
import RotatingText from '@/components/ui/RotatingText'
import { CONTENT_CARDS, TRUSTED_BRANDS } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className='pt-8 pb-20'>
      <div className='container mx-auto max-w-7xl'>
        {/* Hero Content */}
        <FadeInView>
          <div className='text-center mb-16 max-w-4xl mx-auto px-4'>
            <h1 className='text-[clamp(3rem,2.4286rem+2.8571vw,5rem)] font-extrabold mb-9 leading-[1.05] tracking-tight'>
              <span className='text-[#525252] tracking-[-1.6px]'>
                AI content that <br />
                actually
              </span>
              <span className='text-black tracking-[-1.6px]'> converts</span>
            </h1>

            <div className='flex flex-wrap items-center justify-center gap-2 text-[26px] font-bold text-[#7C7C7C] mb-9 leading-none tracking-[-0.78px]'>
              <span className='mb-1'>In minutes, create & automate your</span>
              <Image
                src='/icons/instagram.svg'
                alt='Instagram'
                width={32}
                height={32}
                className='w-8 h-8 rounded-[7px]'
              />
              <span className='mb-1'>and</span>
              <Image
                src='/icons/tiktok.svg'
                alt='TikTok'
                width={32}
                height={32}
                className='w-8 h-8 rounded-[7px]'
              />
              <span className='mb-1'>content for your</span>
              <RotatingText />
            </div>

            <div className='flex justify-center'>
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    '0px 8px 30px 0px rgba(46,71,249,0.45), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.35)',
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className='relative w-[253px] h-[51px] px-[18px] text-[26px] font-bold text-gray-100 leading-7 tracking-[-0.52px] rounded-2xl shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] flex items-center justify-center pb-[7px] cursor-pointer overflow-hidden group'>
                {/* Animated gradient background */}
                <motion.div
                  className='absolute inset-0 bg-linear-to-r from-[#152CD3] to-[#B308A7] -z-10'
                  initial={{ backgroundPosition: '0% 50%' }}
                  whileHover={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    backgroundSize: '200% 200%',
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #152CD3 0%, #B308A7 50%, #152CD3 100%)',
                    backgroundSize: '200% 100%',
                  }}
                />

                {/* Shimmer effect on hover */}
                <motion.div
                  className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <span className='relative z-10'>Try for free with 1-click</span>
              </motion.button>
            </div>
          </div>
        </FadeInView>
      </div>

      {/* Content Cards - Infinite Scroll */}
      <div className='w-full mb-24 overflow-hidden'>
        <div className='scroll-container gap-9 flex'>
          {[
            ...CONTENT_CARDS,
            ...CONTENT_CARDS,
            ...CONTENT_CARDS,
            ...CONTENT_CARDS,
            ...CONTENT_CARDS,
            ...CONTENT_CARDS,
          ].map((card, index) => (
            <VideoCard
              key={index}
              src={card.video}
              type={card.type}
              className='w-[195px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] flex-shrink-0'
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
