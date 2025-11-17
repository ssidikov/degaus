import Image from 'next/image'
import { Badge, SectionHeading, FeatureList } from '@/components/ui'
import { AI_UGC_FEATURES, VIDEO_EDITOR_FEATURES, AUTOMATION_FEATURES } from '@/lib/constants'

export default function FeaturesSection() {
  return (
    <section className='bg-[#e9e8f5] px-6 py-16'>
      <div className='mx-auto max-w-7xl'>
        <Badge>Features</Badge>

        <SectionHeading title='Everything you need in one place' />

        {/* Features Grid - 3 columns */}
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {/* Feature 1 - AI UGCs */}
          <div className='bg-[#f3f3f9] border-[5px] border-white rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[5px] rounded-br-[5px] p-11 shadow-lg'>
            <h3 className="font-['Darker_Grotesque'] text-[34px] font-bold text-[#323232] tracking-[-1.02px] mb-7 leading-7">
              #1 realistic AI UGCs
            </h3>
            <p className="font-['Darker_Grotesque'] text-2xl font-bold text-[#616161] tracking-[-0.72px] mb-3">
              Create the most realistic AI Influencers
            </p>

            <FeatureList features={AI_UGC_FEATURES} iconColor='blue' className='mt-6' />

            <button className="mt-6 font-['Darker_Grotesque'] text-lg font-semibold text-[#929292] tracking-[-0.54px] flex items-center gap-2 hover:text-[#152cd3] transition-colors">
              <Image src='/sparkles.svg' alt='sparkles' width={16} height={16} />
              See for yourself
            </button>
          </div>

          {/* Feature 2 & 3 - Stacked */}
          <div className='flex flex-col gap-6'>
            {/* High quality B-Rolls */}
            <div className='bg-[#f3f3f9] border-[5px] border-white rounded-[5px] p-11 shadow-lg'>
              <h3 className="font-['Darker_Grotesque'] text-[34px] font-bold text-[#323232] tracking-[-1.02px] mb-9 leading-7">
                High quality B-Rolls
              </h3>
              <p className="font-['Darker_Grotesque'] text-2xl font-bold text-[#616161] tracking-[-0.72px] mb-6">
                Integrations with all major models
              </p>

              <div className='space-y-2'>
                <div className='flex items-center gap-3'>
                  <div className='w-7 h-7 rounded bg-black' />
                  <span className="font-['Darker_Grotesque'] text-xl font-semibold text-[#8d8d8d]">
                    Sora2 pro
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-7 h-7 rounded bg-linear-to-r from-blue-400 to-purple-600' />
                  <span className="font-['Darker_Grotesque'] text-xl font-semibold text-[#8d8d8d]">
                    Veo3.1
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-7 h-7 rounded bg-yellow-400' />
                  <span className="font-['Darker_Grotesque'] text-xl font-semibold text-[#8d8d8d]">
                    Nanobanana
                  </span>
                </div>
                <div className='flex items-center gap-3'>
                  <Image src='/checked-blue.svg' alt='check' width={24} height={24} />
                  <span className="font-['Darker_Grotesque'] text-xl font-semibold text-[#8d8d8d]">
                    10+ more
                  </span>
                </div>
              </div>
            </div>

            {/* Built-in video editor */}
            <div className='bg-[#f3f3f9] border-[5px] border-white/50 rounded-[5px] p-11 shadow-lg'>
              <h3 className="font-['Darker_Grotesque'] text-[34px] font-bold text-[#323232] tracking-[-1.02px] mb-9 leading-7">
                Built-in video editor
              </h3>
              <p className="font-['Darker_Grotesque'] text-2xl font-bold text-[#636363] tracking-[-0.72px] mb-3">
                Edit your videos effortlessly
              </p>

              <FeatureList features={VIDEO_EDITOR_FEATURES} iconColor='blue' className='mt-6' />
            </div>
          </div>

          {/* Feature 4 - Automate */}
          <div className='bg-[#1e1e22] border-[5px] border-[#36383f] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-[20px] rounded-br-[20px] p-9 shadow-lg'>
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
