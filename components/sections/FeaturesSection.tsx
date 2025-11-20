import Image from 'next/image'
import { Badge, SectionHeading, FeatureCard, FadeInView } from '@/components/ui'

export default function FeaturesSection() {
  return (
    <section id='features' className='bg-[#e9e8f5] px-4 sm:px-5 md:px-6 py-12 sm:py-14 md:py-16'>
      <div className='mx-auto max-w-7xl'>
        <FadeInView>
          <Badge>Features</Badge>
        </FadeInView>

        <FadeInView delay={0.1}>
          <SectionHeading title='Everything you need in one place' />
        </FadeInView>

        {/* Features Grid - responsive layout */}
        {/* sm: 2 columns, md: 2 columns with Automate below, lg: 3 columns with Automate in grid */}
        <FadeInView delay={0.2}>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
            {/* Feature 1 - AI UGCs with Video */}
            <FeatureCard
              title='#1 realistic AI UGCs'
              subtitle='Create the most realistic AI Influencers'
              videoSrc='/videos/1 realistic AI UGCs.mov'
              showVideo={true}
            />

            {/* Feature 2 & 3 - Stacked */}
            <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 justify-between'>
              {/* High quality B-Rolls */}
              <div className='bg-[#f3f3f9] w-full h-[260px] sm:h-[298px] relative rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline-[5px] outline-offset-[-5px] outline-white overflow-hidden'>
                <div className='inline-flex flex-col justify-start items-start gap-4 xl:gap-7 px-6 xl:px-10 pt-6 xl:pt-10 pb-6'>
                  <h3 className="self-stretch justify-start text-zinc-800 text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-8">
                    High quality B-Rolls
                  </h3>
                  <div className='flex flex-col gap-4 xl:gap-6'>
                    <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl md:text-2xl font-bold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                      Integrations with all major models
                    </p>
                    <div className='flex flex-col justify-start items-start gap-1 sm:gap-1.5'>
                      {/* Sora2 pro */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6'>
                          <Image
                            src='/icons/sora-2.svg'
                            alt='Sora2 pro'
                            width={16}
                            height={16}
                            className='w-3.5 sm:w-4 md:w-4'
                          />
                        </div>
                        <span className="justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          Sora2 pro
                        </span>
                      </div>
                      {/* Veo3.1 */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6'>
                          <Image
                            src='/icons/veo3.svg'
                            alt='veo3'
                            width={16}
                            height={16}
                            className='w-3.5 sm:w-4 md:w-4'
                          />
                        </div>
                        <span className="justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          Veo3.1
                        </span>
                      </div>
                      {/* Nanobanana */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6'>
                          <Image
                            src='/icons/nanobanana.svg'
                            alt='nanobanana'
                            width={16}
                            height={16}
                            className='w-3.5 sm:w-4 md:w-4'
                          />
                        </div>
                        <span className="justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          Nanobanana
                        </span>
                      </div>
                      {/* 10+ more */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6'>
                          <Image
                            src='/checked-blue.svg'
                            alt='plus'
                            width={24}
                            height={24}
                            className='w-5 sm:w-6'
                          />
                        </div>
                        <span className="justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          10+ more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative glow effect */}
                <div className='w-20 sm:w-24 md:w-28 lg:w-28 h-20 sm:h-24 md:h-28 lg:h-28 left-[50%] sm:left-[52%] md:right-[15%] lg:left-[65%] top-[190px] sm:top-[210px] md:top-[230px] lg:top-[70%] -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-0 lg:translate-x-0 absolute bg-violet-300/50 rounded-full blur-2xl' />
                {/* Video frame thumbnails */}
                <Image
                  src='/images/ai-video-1.jpg'
                  alt='video frame'
                  width={45}
                  height={80}
                  className='w-11 h-20 left-[63%] md:left-[65%] xl:left-[68%] top-[50%] absolute rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] border-2 border-white object-cover'
                />
                <Image
                  src='/images/ai-video-2.jpg'
                  alt='video frame'
                  width={45}
                  height={80}
                  className='w-11 h-20 left-[84%] top-[65%] absolute rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] border-2 border-white object-cover'
                />
                {/* Decorative arrow */}
                <svg
                  width='34'
                  height='25'
                  viewBox='0 0 34 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='left-[77%] lg:left-[82%] xl:left-[80%] top-[54%] absolute w-8'>
                  <path
                    d='M1.00021 1.00027C9.06013 3.03956 23.8651 9.47009 20.5099 19.5942C18.2192 26.5064 10.7493 22.3768 13.5421 14.9157C16.3349 7.45464 29.7119 7.86912 30.3816 23.5266M30.3816 23.5266L27.8214 21.7338M30.3816 23.5266L32.6017 19.9836'
                    stroke='#929292'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </div>

              {/* Built-in video editor */}
              <div className='bg-[#f3f3f9] w-full h-60 sm:h-[298px] relative rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] border-4 border-white outline-[5px] outline-offset-[-5px] outline-white/50 overflow-hidden'>
                <div className='inline-flex flex-col justify-start items-start gap-4 xl:gap-7 px-6 xl:px-10 pt-6 xl:pt-10 pb-6'>
                  <h3 className="self-stretch justify-start text-zinc-800 text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-8">
                    Built-in video editor
                  </h3>
                  <div className='flex flex-col gap-4 xl:gap-6'>
                    <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl md:text-2xl font-bold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                      Edit your videos effortlessly
                    </p>
                    <div className='py-1.5 sm:py-2 md:py-2.5 lg:py-2 flex flex-col justify-start items-start gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-2'>
                      {/* Overlays, split screens */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7'>
                          <div className='w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 bg-indigo-400/10 rounded-full absolute' />
                          <svg
                            width='22'
                            height='22'
                            viewBox='0 0 22 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='absolute w-[18px] sm:w-5 md:w-[22px]'>
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
                        <span className="justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          Overlays, split screens
                        </span>
                      </div>
                      {/* AI captions (50+ fonts) */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7'>
                          <svg
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='absolute w-6 sm:w-7 md:w-7'>
                            <circle cx='14' cy='14' r='14' fill='#8898EA' fillOpacity='0.1' />
                          </svg>
                          <svg
                            width='22'
                            height='22'
                            viewBox='0 0 22 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='absolute w-[18px] sm:w-5 md:w-[22px]'>
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
                            className='absolute w-[14px] sm:w-[15px] md:w-4'>
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
                            className='relative z-10 w-2 sm:w-2.5'>
                            <path
                              d='M1.66669 5.25455L3.71797 7.29159L8.33335 2.70825'
                              stroke='white'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <span className="justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          AI captions (50+ fonts)
                        </span>
                      </div>
                      {/* Transitions & effects */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7'>
                          <svg
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='absolute w-6 sm:w-7 md:w-7'>
                            <circle cx='14' cy='14' r='14' fill='#8898EA' fillOpacity='0.1' />
                          </svg>
                          <svg
                            width='22'
                            height='22'
                            viewBox='0 0 22 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='absolute w-[18px] sm:w-5 md:w-[22px]'>
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
                            className='absolute w-3.5 sm:w-[15px] md:w-4'>
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
                            className='relative z-10 w-2 sm:w-2.5'>
                            <path
                              d='M1.66669 5.25455L3.71797 7.29159L8.33335 2.70825'
                              stroke='white'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <span className="justify-start text-neutral-400 text-base sm:text-lg md:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          Transitions & effects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative glow effect */}
                <div className='w-28 h-28 left-[85%] sm:left-[70%] top-[60%] -translate-x-1/2 sm:translate-x-0 absolute bg-violet-300 rounded-full blur-2xl sm:blur-[45px] md:blur-[50px]' />
                {/* Video element */}
                <div className='w-18 xl:w-22 h-39 left-[88%] md:left-[75%] xl:left-[77%] top-[45%] sm:top-[50%] -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-0 absolute shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] rounded-[10px]'>
                  <video
                    className='w-full h-full rounded-[10px] object-cover border-[3px] border-white'
                    src='/videos/AI UGC Overlay.mov'
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>

            {/* Feature 4 - Automate - full width on sm and md, third column on lg */}
            <div className='sm:col-span-2 md:col-span-2 lg:col-span-1'>
              <div className='bg-zinc-900 w-full h-[620px] md:h-[700px] lg:h-[620px] relative rounded-tl-[5px] rounded-tr-[20px] rounded-bl-[5px] rounded-br-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline-[5px] outline-offset-[-5px] outline-neutral-700 overflow-hidden border-[5px] border-neutral-800'>
                <div className='inline-flex flex-col justify-start items-start gap-4 xl:gap-7 px-6 xl:px-10 pt-6 xl:pt-10 pb-6'>
                  <h3 className="self-stretch justify-start text-zinc-100 text-3xl sm:text-4xl lg:text-[32px] font-bold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-8">
                    Automate your content
                  </h3>
                  <div className='w-full max-w-80 flex flex-col justify-start items-start gap-2 sm:gap-2.5 lg:gap-2'>
                    <p className="self-stretch justify-start text-neutral-200 text-lg sm:text-xl md:text-2xl lg:text-xl font-bold font-['Darker_Grotesque'] leading-tight sm:leading-6 lg:leading-6">
                      Build systems that actually work, reduce inconsistency & weird cuts
                    </p>
                    <div className='py-2 sm:py-2.5 md:py-3 lg:py-2 flex flex-col justify-start items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-2'>
                      {/* AI Auto-selects best output */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-6 sm:w-6 md:w-7 h-6 sm:h-6 md:h-7'>
                          <Image
                            src='/checked-blue.svg'
                            alt='check'
                            width={24}
                            height={24}
                            className='relative z-10 w-5 sm:w-6'
                          />
                        </div>
                        <span className="justify-start text-stone-300 text-lg sm:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          AI Auto-selects best output
                        </span>
                      </div>
                      {/* Automatic editing */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-6 sm:w-6 md:w-6 lg:w-6 h-6 sm:h-6 md:h-6 lg:h-6'>
                          <Image
                            src='/checked-blue.svg'
                            alt='check'
                            width={24}
                            height={24}
                            className='relative z-10 w-5 sm:w-6 lg:w-5'
                          />
                        </div>
                        <span className="justify-start text-stone-300 text-lg sm:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          Automatic editing
                        </span>
                      </div>
                      {/* Plug into your n8n workflows */}
                      <div className='inline-flex justify-start items-center gap-2 sm:gap-2.5 md:gap-3'>
                        <div className='relative flex items-center justify-center w-6 sm:w-6 md:w-6 lg:w-6 h-6 sm:h-6 md:h-6 lg:h-6'>
                          <Image
                            src='/checked-blue.svg'
                            alt='check'
                            width={24}
                            height={24}
                            className='relative z-10 w-5 sm:w-6 lg:w-5'
                          />
                        </div>
                        <span className="justify-start text-stone-300 text-lg sm:text-xl lg:text-lg font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 lg:leading-6">
                          Plug into your n8n workflows
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* n8n schema */}
                <Image
                  src='/images/n8n-schema-image.png'
                  alt='n8n schema'
                  width={400}
                  height={300}
                  className='w-72 sm:w-80 md:w-96 lg:w-80 h-auto left-1/2 -translate-x-1/2 bottom-0 absolute object-contain'
                />
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
