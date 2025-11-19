import Image from 'next/image'
import { Badge, SectionHeading, FeatureCard } from '@/components/ui'

export default function FeaturesSection() {
  return (
    <section className='bg-[#e9e8f5] px-4 sm:px-5 md:px-6 py-12 sm:py-14 md:py-16'>
      <div className='mx-auto max-w-7xl'>
        <Badge>Features</Badge>

        <SectionHeading title='Everything you need in one place' />

        {/* Features Grid - responsive layout */}
        {/* sm: 2 columns, md: 2 columns with Automate below, lg: 3 columns with Automate in grid */}
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
            <div className='bg-[#f3f3f9] w-full h-[260px] sm:h-[280px] md:h-[300px] lg:h-[298px] relative rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline-[5px] outline-offset-[-5px] outline-white overflow-hidden'>
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
                className='w-7 sm:w-8 md:w-10 lg:w-10 h-12 sm:h-14 md:h-16 lg:h-[72px] left-[58%] sm:left-[60%] md:right-[25%] lg:left-[69%] top-[140px] sm:top-[150px] md:top-[170px] lg:top-[175px] absolute rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] border-2 sm:border-[3px] border-white object-cover'
              />
              <Image
                src='/images/ai-video-2.jpg'
                alt='video frame'
                width={45}
                height={80}
                className='w-7 sm:w-8 md:w-10 lg:w-10 h-12 sm:h-14 md:h-16 lg:h-[72px] left-[72%] sm:left-[75%] md:right-[5%] lg:left-[85%] top-[175px] sm:top-[185px] md:top-[210px] lg:top-[210px] absolute rounded-lg shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] border-2 sm:border-[3px] border-white object-cover'
              />
              {/* Decorative arrow */}
              <svg
                width='34'
                height='25'
                viewBox='0 0 34 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='left-[68%] sm:left-[70%] md:left-[70%] lg:left-[82%] xl:left-[80%] top-[165px] sm:top-[55%] md:top-[60%] lg:top-[62%] absolute w-7 sm:w-8 md:w-[34px] lg:w-7'>
                <path
                  d='M1.00021 1.00027C9.06013 3.03956 23.8651 9.47009 20.5099 19.5942C18.2192 26.5064 10.7493 22.3768 13.5421 14.9157C16.3349 7.45464 29.7119 7.86912 30.3816 23.5266M30.3816 23.5266L27.8214 21.7338M30.3816 23.5266L32.6017 19.9836'
                  stroke='#929292'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </div>

            {/* Built-in video editor */}
            <div className='bg-[#f3f3f9] w-full h-60 sm:h-[260px] md:h-[300px] lg:h-[298px] relative rounded-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] border-4 border-white outline-[5px] outline-offset-[-5px] outline-white/50 overflow-hidden'>
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
              <div className='w-20 sm:w-24 md:w-28 lg:w-28 h-20 sm:h-24 md:h-28 lg:h-28 left-[50%] sm:left-[52%] md:right-[15%] lg:left-[225px] top-[180px] sm:top-[200px] md:top-[230px] lg:top-[220px] -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-0 lg:translate-x-0 absolute bg-violet-300 rounded-full blur-2xl sm:blur-[45px] md:blur-[50px]' />
              {/* Video element */}
              <div className='w-14 sm:w-16 md:w-20 lg:w-[72px] h-28 sm:h-32 md:h-36 lg:h-36 left-[50%] sm:left-[52%] md:left-auto md:right-[10%] lg:left-[290px] top-[170px] sm:top-[180px] md:top-[180px] lg:top-[148px] -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-0 lg:translate-x-0 absolute shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)] rounded-lg sm:rounded-[10px]'>
                <video
                  className='w-14 sm:w-16 md:w-20 lg:w-[72px] h-28 sm:h-32 md:h-36 lg:h-36 rounded-lg sm:rounded-[10px] object-cover border-2 sm:border-[3px] border-white'
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
            <div className='bg-zinc-900 w-full h-[450px] sm:h-[560px] md:h-[620px] lg:h-[620px] relative rounded-tl-[5px] rounded-tr-[20px] rounded-bl-[5px] rounded-br-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline-[5px] outline-offset-[-5px] outline-neutral-700 overflow-hidden border-[5px] border-neutral-800'>
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

              {/* n8n logo */}
              <Image
                src='/icons/n8n-icon.png'
                alt='n8n'
                width={74}
                height={24}
                className='w-14 sm:w-16 md:w-18 lg:w-[70px] h-4 sm:h-5 lg:h-[22px] left-[5%] sm:left-[5.5%] md:left-[5%] lg:left-8 top-[260px] sm:top-[280px] md:top-[260px] lg:top-[260px] absolute object-cover hidden sm:block'
              />

              {/* Social media icons */}
              <div className='px-3 sm:px-4 md:px-5 lg:px-5 right-[5%] sm:right-[6%] md:right-[8%] lg:left-[265px] top-[240px] sm:top-[260px] md:top-[34px] lg:top-[240px] absolute flex-col justify-center items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-2 hidden md:flex'>
                <Image
                  src='/icons/instagram.png'
                  alt='instagram'
                  width={21}
                  height={21}
                  className='w-5 sm:w-[21px]'
                />
                <Image
                  src='/icons/tiktok.png'
                  alt='tiktok'
                  width={21}
                  height={21}
                  className='rounded-[5px] w-5 sm:w-[21px]'
                />
                <Image
                  src='/icons/youtube.png'
                  alt='youtube'
                  width={21}
                  height={21}
                  className='rounded-[5px] w-5 sm:w-[21px]'
                />
              </div>

              {/* Decorative glow */}
              <div className='w-24 sm:w-32 md:w-40 lg:w-40 h-20 sm:h-24 md:h-28 lg:h-28 left-[50%] sm:left-[48%] md:left-auto md:right-[15%] lg:left-[95px] top-[-20px] sm:top-[-30px] md:top-[-40px] lg:top-[-45px] -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-0 lg:translate-x-0 absolute bg-indigo-400 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[100px]' />

              {/* Horizontal lines */}
              <div className='w-9 h-0 md:left-auto md:right-[24.5%] lg:left-[111.50px] md:top-[220px] lg:top-[336px] absolute border-t border-zinc-500 hidden md:block' />
              <div className='w-16 h-0 md:left-auto md:right-[8%] lg:left-[249.50px] md:top-[220px] lg:top-[336px] absolute border-t border-zinc-500 hidden md:block' />

              {/* Curved connecting lines */}
              <svg
                width='65'
                height='34'
                viewBox='0 0 65 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='md:left-auto md:right-[8%] lg:left-[250px] md:top-[184px] lg:top-[300.59px] absolute hidden md:block'>
                <path
                  d='M0.5 32.6855C0.5 32.6855 24.0026 32.0038 36.7507 16.2518C49.4988 0.499872 64.3166 0.499928 64.3166 0.499928'
                  stroke='#808080'
                  strokeLinecap='round'
                />
              </svg>
              <svg
                width='64'
                height='33'
                viewBox='0 0 64 33'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='md:left-auto md:right-[8%] lg:left-[250.84px] md:top-[214px] lg:top-[331.06px] absolute hidden md:block'>
                <path
                  d='M0.5 0.5C0.5 0.5 22.5952 0.985972 35.2976 16.4997C47.9999 32.0134 63 32.4997 63 32.4997'
                  stroke='#808080'
                  strokeLinecap='round'
                />
              </svg>

              {/* degaus button with icon */}
              <div className='w-20 sm:w-24 lg:w-24 left-[50%] sm:left-[48%] md:left-auto md:right-[20%] lg:left-[136px] top-60 sm:top-[260px] md:top-[180px] lg:top-[260px] -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-0 lg:translate-x-0 absolute flex-col justify-start items-center gap-px hidden md:flex'>
                <div className='self-stretch px-2.5 sm:px-3 py-1.5 sm:py-2 bg-indigo-600 rounded-xl sm:rounded-2xl shadow-[0px_4px_15px_0px_rgba(46,71,249,0.50),0px_4px_20px_0px_rgba(0,0,0,0.10),inset_0px_4px_4px_0px_rgba(255,255,255,0.35),inset_0px_-4px_4px_0px_rgba(0,0,0,0.30),inset_0px_2px_2px_0px_rgba(21,44,211,0.25)] inline-flex justify-center items-center gap-2 sm:gap-2.5'>
                  <Image
                    src='/icons/degaus-btn.svg'
                    alt='degaus icon'
                    width={16}
                    height={16}
                    className='w-3.5 sm:w-4'
                  />
                  <p className="justify-start text-white text-lg sm:text-xl font-bold font-['Darker_Grotesque'] leading-tight sm:leading-7">
                    degaus
                  </p>
                </div>
                <div className='relative top-14 w-24 sm:w-28 h-0 rotate-90 border-t border-zinc-500' />
              </div>

              {/* Bottom glow effects */}
              <div className='w-5 sm:w-6 h-20 sm:h-24 md:h-28 lg:h-32 left-[20%] sm:left-[22%] md:left-auto md:right-[40%] lg:left-[85px] top-[520px] sm:top-[550px] md:top-[580px] lg:top-[530px] absolute origin-top-left rotate-[-17.23deg] bg-linear-to-b from-white/50 to-zinc-900/50 blur-2xl sm:blur-[45px] md:blur-[50px]' />
              <div className='w-5 sm:w-6 md:w-7 lg:w-7 h-20 sm:h-24 md:h-28 lg:h-28 left-[50%] sm:left-[48%] md:left-auto md:right-[23%] lg:left-[165px] top-[520px] sm:top-[550px] md:top-[580px] lg:top-[525px] -translate-x-1/2 sm:-translate-x-1/2 md:translate-x-0 lg:translate-x-0 absolute bg-linear-to-b from-white/50 to-zinc-900/50 blur-2xl sm:blur-[45px] md:blur-[50px]' />
              <div className='w-5 sm:w-6 h-20 sm:h-24 md:h-28 lg:h-32 left-[75%] sm:left-[72%] md:left-auto md:right-[6%] lg:left-[255px] top-[520px] sm:top-[550px] md:top-[580px] lg:top-[525px] absolute origin-top-left rotate-[17.23deg] bg-linear-to-b from-white/50 to-zinc-900/50 blur-2xl sm:blur-[45px] md:blur-[50px]' />

              {/* n8n schema image */}
              <Image
                src='/images/n8n-schema.png'
                alt='n8n workflow schema'
                width={319}
                height={191}
                className='w-[90%] sm:w-[85%] md:w-[48%] max-w-80 md:max-w-[380px] lg:max-w-[285px] h-36 sm:h-40 md:h-48 lg:h-[170px] left-[5%] sm:left-[7.5%] md:left-auto md:right-[5%] lg:left-[21%] top-[400px] sm:top-[430px] md:top-[390px] lg:top-[430px] absolute rounded-2xl sm:rounded-[20px] border-2 sm:border-[3px] border-neutral-700 object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
