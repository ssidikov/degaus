import Image from 'next/image'
import { Badge, SectionHeading, FeatureList, FeatureCard } from '@/components/ui'
import { AUTOMATION_FEATURES } from '@/lib/constants'

export default function FeaturesSection() {
  return (
    <section className='bg-[#e9e8f5] px-6 py-16'>
      <div className='mx-auto max-w-7xl'>
        <Badge>Features</Badge>

        <SectionHeading title='Everything you need in one place' />

        {/* Features Grid - 3 columns */}
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {/* Feature 1 - AI UGCs with Video */}
          <FeatureCard
            title='#1 realistic AI UGCs'
            subtitle='Create the most realistic AI Influencers'
            videoSrc='/videos/1 realistic AI UGCs.mov'
            showVideo={true}
          />

          {/* Feature 2 & 3 - Stacked */}
          <div className='flex flex-col gap-6 justify-between'>
            {/* High quality B-Rolls */}
            <div className='bg-[#f3f3f9] w-auto lg:w-[400px] h-[320px] relative rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline-[5px] outline-offset-[-5px] outline-white overflow-hidden'>
              <div className='w-80 left-[44px] top-[34px] absolute inline-flex flex-col justify-start items-start gap-9'>
                <h3 className="self-stretch justify-start text-zinc-800 text-4xl font-bold font-['Darker_Grotesque'] leading-7">
                  High quality B-Rolls
                </h3>
                <div className='self-stretch flex flex-col justify-start items-start gap-6'>
                  <p className="self-stretch justify-start text-zinc-600 text-2xl font-bold font-['Darker_Grotesque'] leading-7">
                    Integrations with all major models
                  </p>
                  <div className='flex flex-col justify-start items-start gap-1.5'>
                    {/* Sora2 pro */}
                    <div className='inline-flex justify-start items-center gap-3'>
                      <div className='relative flex items-center justify-center w-[24px] h-[24px]'>
                        <Image src='/icons/sora-2.svg' alt='Sora2 pro' width={16} height={16} />
                      </div>
                      <span className="justify-start text-neutral-400 text-xl font-semibold font-['Darker_Grotesque'] leading-7">
                        Sora2 pro
                      </span>
                    </div>
                    {/* Veo3.1 */}
                    <div className='inline-flex justify-start items-center gap-3'>
                      <div className='relative flex items-center justify-center w-[24px] h-[24px]'>
                        <Image src='/icons/veo3.svg' alt='veo3' width={16} height={16} />
                      </div>
                      <span className="justify-start text-neutral-400 text-xl font-semibold font-['Darker_Grotesque'] leading-7">
                        Veo3.1
                      </span>
                    </div>
                    {/* Nanobanana */}
                    <div className='inline-flex justify-start items-center gap-3'>
                      <div className='relative flex items-center justify-center w-[24px] h-[24px]'>
                        <Image
                          src='/icons/nanobanana.svg'
                          alt='nanobanana'
                          width={16}
                          height={16}
                        />
                      </div>
                      <span className="justify-start text-neutral-400 text-xl font-semibold font-['Darker_Grotesque'] leading-7">
                        Nanobanana
                      </span>
                    </div>
                    {/* 10+ more */}
                    <div className='inline-flex justify-start items-center gap-3'>
                      <div className='relative flex items-center justify-center w-[24px] h-[24px]'>
                        <Image src='/checked-blue.svg' alt='plus' width={24} height={24} />
                      </div>
                      <span className="justify-start text-neutral-400 text-xl font-semibold font-['Darker_Grotesque'] leading-7">
                        10+ more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative glow effect */}
              <div className='w-32 h-32 left-[277.50px] top-[210px] absolute bg-violet-300/50 rounded-full blur-[50px]' />
              {/* Video frame thumbnails */}
              <Image
                src='/images/ai-video-1.jpg'
                alt='video frame'
                width={45}
                height={80}
                className='w-11 h-20 left-[261.50px] top-[159px] absolute rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] border-[3px] border-white object-cover'
              />
              <Image
                src='/images/ai-video-2.jpg'
                alt='video frame'
                width={45}
                height={80}
                className='w-11 h-20 left-[339.50px] top-[200px] absolute rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] border-[3px] border-white object-cover'
              />
              {/* Decorative arrow */}
              <svg
                width='34'
                height='25'
                viewBox='0 0 34 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='left-[313.50px] top-[167px] absolute'>
                <path
                  d='M1.00021 1.00027C9.06013 3.03956 23.8651 9.47009 20.5099 19.5942C18.2192 26.5064 10.7493 22.3768 13.5421 14.9157C16.3349 7.45464 29.7119 7.86912 30.3816 23.5266M30.3816 23.5266L27.8214 21.7338M30.3816 23.5266L32.6017 19.9836'
                  stroke='#929292'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>

            {/* Built-in video editor */}
            <div className='bg-[#f3f3f9] w-auto lg:w-[400px] h-[300px] relative rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] border-4 border-white outline-[5px] outline-offset-[-5px] outline-white/50 overflow-hidden'>
              <div className='w-80 left-[44px] top-[34px] absolute inline-flex flex-col justify-start items-start gap-9'>
                <h3 className="self-stretch justify-start text-zinc-800 text-4xl font-bold font-['Darker_Grotesque'] leading-7">
                  Built-in video editor
                </h3>
                <div className='self-stretch flex flex-col justify-start items-start gap-2.5'>
                  <p className="self-stretch justify-start text-zinc-600 text-2xl font-bold font-['Darker_Grotesque'] leading-7">
                    Edit your videos effortlessly
                  </p>
                  <div className='py-3 flex flex-col justify-start items-start gap-3'>
                    {/* Overlays, split screens */}
                    <div className='inline-flex justify-start items-center gap-3'>
                      <div className='relative flex items-center justify-center w-7 h-7'>
                        <div className='w-7 h-7 bg-indigo-400/10 rounded-full absolute' />
                        <svg
                          width='22'
                          height='22'
                          viewBox='0 0 22 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'>
                          <circle
                            cx='11'
                            cy='11'
                            r='11'
                            fill='url(#paint0_linear_overlay)'
                            fillOpacity='0.5'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_overlay'
                              x1='11'
                              y1='0'
                              x2='11'
                              y2='22'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#8F8DFF' />
                              <stop offset='1' stopColor='#B7B6FF' />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'>
                          <circle
                            cx='8'
                            cy='8'
                            r='7.5'
                            fill='url(#paint0_linear_overlay_inner)'
                            stroke='url(#paint1_linear_overlay_inner)'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_overlay_inner'
                              x1='8'
                              y1='0'
                              x2='8'
                              y2='16'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#8F85FF' />
                              <stop offset='1' stopColor='#492BDA' />
                            </linearGradient>
                            <linearGradient
                              id='paint1_linear_overlay_inner'
                              x1='8'
                              y1='16'
                              x2='8'
                              y2='0'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#492BDA' />
                              <stop offset='1' stopColor='white' />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width='10'
                          height='10'
                          viewBox='0 0 10 10'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='relative z-10'>
                          <path
                            d='M1.66669 5.25455L3.71797 7.29159L8.33335 2.70825'
                            stroke='white'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <span className="justify-start text-neutral-400 text-xl font-semibold font-['Darker_Grotesque'] leading-7">
                        Overlays, split screens
                      </span>
                    </div>
                    {/* AI captions (50+ fonts) */}
                    <div className='inline-flex justify-start items-center gap-3'>
                      <div className='relative flex items-center justify-center w-7 h-7'>
                        <svg
                          width='28'
                          height='28'
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'>
                          <circle cx='14' cy='14' r='14' fill='#8898EA' fillOpacity='0.1' />
                        </svg>
                        <svg
                          width='22'
                          height='22'
                          viewBox='0 0 22 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'>
                          <circle
                            cx='11'
                            cy='11'
                            r='11'
                            fill='url(#paint0_linear_captions)'
                            fillOpacity='0.5'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_captions'
                              x1='11'
                              y1='0'
                              x2='11'
                              y2='22'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#8F8DFF' />
                              <stop offset='1' stopColor='#B7B6FF' />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'>
                          <circle
                            cx='8'
                            cy='8'
                            r='7.5'
                            fill='url(#paint0_linear_captions_inner)'
                            stroke='url(#paint1_linear_captions_inner)'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_captions_inner'
                              x1='8'
                              y1='0'
                              x2='8'
                              y2='16'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#8F85FF' />
                              <stop offset='1' stopColor='#492BDA' />
                            </linearGradient>
                            <linearGradient
                              id='paint1_linear_captions_inner'
                              x1='8'
                              y1='16'
                              x2='8'
                              y2='0'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#492BDA' />
                              <stop offset='1' stopColor='white' />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width='10'
                          height='10'
                          viewBox='0 0 10 10'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='relative z-10'>
                          <path
                            d='M1.66669 5.25455L3.71797 7.29159L8.33335 2.70825'
                            stroke='white'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <span className="justify-start text-neutral-400 text-xl font-semibold font-['Darker_Grotesque'] leading-7">
                        AI captions (50+ fonts)
                      </span>
                    </div>
                    {/* Transitions & effects */}
                    <div className='inline-flex justify-start items-center gap-3'>
                      <div className='relative flex items-center justify-center w-7 h-7'>
                        <svg
                          width='28'
                          height='28'
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'>
                          <circle cx='14' cy='14' r='14' fill='#8898EA' fillOpacity='0.1' />
                        </svg>
                        <svg
                          width='22'
                          height='22'
                          viewBox='0 0 22 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'>
                          <circle
                            cx='11'
                            cy='11'
                            r='11'
                            fill='url(#paint0_linear_transitions)'
                            fillOpacity='0.5'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_transitions'
                              x1='11'
                              y1='0'
                              x2='11'
                              y2='22'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#8F8DFF' />
                              <stop offset='1' stopColor='#B7B6FF' />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='absolute'>
                          <circle
                            cx='8'
                            cy='8'
                            r='7.5'
                            fill='url(#paint0_linear_transitions_inner)'
                            stroke='url(#paint1_linear_transitions_inner)'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_transitions_inner'
                              x1='8'
                              y1='0'
                              x2='8'
                              y2='16'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#8F85FF' />
                              <stop offset='1' stopColor='#492BDA' />
                            </linearGradient>
                            <linearGradient
                              id='paint1_linear_transitions_inner'
                              x1='8'
                              y1='16'
                              x2='8'
                              y2='0'
                              gradientUnits='userSpaceOnUse'>
                              <stop stopColor='#492BDA' />
                              <stop offset='1' stopColor='white' />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width='10'
                          height='10'
                          viewBox='0 0 10 10'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='relative z-10'>
                          <path
                            d='M1.66669 5.25455L3.71797 7.29159L8.33335 2.70825'
                            stroke='white'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <span className="justify-start text-neutral-400 text-xl font-semibold font-['Darker_Grotesque'] leading-7">
                        Transitions & effects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative glow effect */}
              <div className='w-32 h-32 left-[245.50px] top-[237px] absolute bg-violet-300 rounded-full blur-[50px]' />
              {/* Video element */}
              <div className='w-20 h-40 left-[315px] top-[153px] absolute shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] rounded-[10px]'>
                <video
                  className='w-20 h-40 rounded-[10px] object-cover border-[3px] border-white'
                  src='/videos/AI UGC Overlay.mov'
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* Feature 4 - Automate */}
          <div className='bg-[#1e1e22] border-[5px] border-[#36383f] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] p-9 shadow-lg w-auto lg:w-[400px]'>
            <h3 className="font-['Darker_Grotesque'] text-[34px] font-bold text-[#eeeeee] tracking-[-1.02px] mb-9 leading-7">
              Automate your content
            </h3>
            <p className="font-['Darker_Grotesque'] text-2xl font-bold text-[#e0e0e0] tracking-[-0.72px] mb-3 leading-6">
              Build systems that actually work, reduce inconsistency & weird cuts
            </p>

            <FeatureList features={AUTOMATION_FEATURES} iconColor='pink' className='mt-6' />

            {/* Decorative workflow visualization */}
            <div className='mt-8 flex items-center justify-center gap-4'>
              <div className='flex flex-col gap-3'>
                <Image
                  src='/images/brands/revibe.png'
                  alt='instagram'
                  width={21}
                  height={21}
                  className='rounded'
                />
                <Image
                  src='/images/brands/voodoo.png'
                  alt='tiktok'
                  width={21}
                  height={21}
                  className='rounded-[5px]'
                />
                <Image
                  src='/images/brands/mojo.png'
                  alt='youtube'
                  width={21}
                  height={21}
                  className='rounded-[5px]'
                />
              </div>
              <div className='h-20 w-px bg-[#484848]' />
              <div className='bg-[#485df4] px-4 py-3 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1),0px_4px_15px_0px_rgba(46,71,249,0.5),inset_0px_2px_2px_0px_rgba(21,44,211,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.35)]'>
                <p className="font-['Darker_Grotesque'] text-xl font-bold text-white tracking-[-0.4px]">
                  degaus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
