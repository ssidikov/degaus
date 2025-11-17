'use client'

import { useState } from 'react'
import { Badge, SectionHeading } from '@/components/ui'

const FAQ_ITEMS = [
  'Is it difficult to create highly performing content?',
  'Can I post this content as organic or ads on insta / tiktok?',
  'Is the quality of videos good?',
  'Can you generate static posts as well?',
  'How long does it take to generate?',
  'Does it work in other languages of cultures?',
  'What is the maximum video length?',
  'Are characters consistent?',
  'How do I integrate with my workflows?',
  'How can I run AI Influencers or faceless accounts on autopilot?',
  'How can I become an affiliate?',
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className='bg-[#f3f3f9] px-6 py-16'>
      <div className='mx-auto max-w-7xl'>
        <Badge>FAQ</Badge>

        {/* Content Grid */}
        <div className='flex flex-col lg:flex-row gap-14 items-start justify-center'>
          {/* Left Side - Heading */}
          <div className='lg:max-w-md'>
            <SectionHeading title='Frequently asked questions' centered={false} className='mb-0' />
            <p className="mt-6 font-['Darker_Grotesque'] text-2xl font-bold text-[#8d8d8d] tracking-[-0.72px] leading-6">
              If you don&apos;t find your answer here, simply{' '}
              <span className='text-[#152cd3] hover:underline cursor-pointer'>reach out.</span>
            </p>
          </div>

          {/* Right Side - FAQ List */}
          <div className='flex flex-col gap-[18px] w-full lg:w-[626px]'>
            {FAQ_ITEMS.map((question, index) => (
              <button
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className='bg-[#f9f9ff] border-2 border-white rounded-[10px] p-6 w-full text-left shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[inset_0px_-2px_2px_0px_rgba(0,0,0,0.05),inset_0px_2px_2px_0px_rgba(255,255,255,0.4)] transition-shadow'>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 shrink-0'>
                    <svg
                      className='w-full h-full text-[#616161]'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d={openIndex === index ? 'M20 12H4' : 'M12 4v16m8-8H4'}
                      />
                    </svg>
                  </div>
                  <p className="font-['Darker_Grotesque'] text-2xl font-bold text-[#616161] tracking-[-0.72px] leading-7">
                    {question}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
