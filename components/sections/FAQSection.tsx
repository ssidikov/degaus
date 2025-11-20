'use client'

import { useState } from 'react'
import { Badge, SectionHeading, FadeInView } from '@/components/ui'

const FAQ_ITEMS = [
  {
    question: 'Is it difficult to create highly performing content?',
    answer:
      'No. With Degaus, in minutes you can create ads that actually convert, and organic content that actually performs. Our AI Agent takes care of finding the best performing formats for your content, editing included.',
  },
  {
    question: 'Can I post this content as organic or ads on Instagram / TikTok?',
    answer:
      'Our content performs for both ads and organic content, allowing you to test hundreds of hooks or formats in minutes. You can either create your own content formats, or choose from 20+ high converting ad templates (talking head, wall of text, split screen, UGC, etc.) or highly viral organic templates (shock hook, crying hook, b-roll hook).',
  },
  {
    question: 'Is the quality of videos good?',
    answer:
      "We have the highest quality of content, it's practically impossible to tell that it's AI generated content. This is what performs the best. Try for yourself for free.",
  },
  {
    question: 'Can you generate static posts as well?',
    answer:
      "Yes. We support all of the world's best models. You can make any edits to an image, add text overlays to post as a Tiktok slideshow, or combine images together.",
  },
  {
    question: 'How long does it take to generate?',
    answer:
      "Depending on the quality, videos can take between 2 mins and 20 mins. You don't need to leave the browser open.",
  },
  {
    question: 'Does it work in other languages or cultures?',
    answer: 'Yes, we support 150+ languages with culture-context aware content.',
  },
  {
    question: 'What is the maximum video length?',
    answer: 'We support the generation of 25 seconds videos, and unlimited for faceswap.',
  },
  {
    question: 'Are characters consistent?',
    answer:
      'Yes. You can easily create consistent characters or use one of our own. They are of the highest quality.',
  },
  {
    question: 'How do I integrate with my workflows?',
    answer:
      'You can integrate your n8n, Zapier or Make workflows using our API. The benefit of using Degaus for automating your content is that (i) you can access 25 seconds long, HD, cameos included Sora2 videos; and (ii) you can automatically edit your videos to have talking heads, captions and more to have fully end-to-end content on autopilot',
  },
  {
    question: 'How can I run AI influencers or faceless accounts on autopilot?',
    answer:
      'You can integrate Degaus with your n8n, Zapier or Make workflows to automatically publish content on your fleet of accounts.',
  },
  {
    question: 'How can I become an affiliate?',
    answer: 'To access our 30% affiliate commission, contact us on contact@degaus.com.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id='faq' className='bg-[#f3f3f9] px-6 py-16'>
      <div className='mx-auto max-w-7xl'>
        <FadeInView>
          <Badge>FAQ</Badge>
        </FadeInView>

        {/* Content Grid */}
        <FadeInView delay={0.1}>
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
            {FAQ_ITEMS.map((item, index) => (
              <div key={index}>
                <button
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
                      {item.question}
                    </p>
                  </div>
                </button>
                {openIndex === index && (
                  <div className='bg-white border-2 border-white rounded-[10px] p-6 mt-2 shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05)]'>
                    <p className="font-['Darker_Grotesque'] text-xl text-[#616161] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </FadeInView>
      </div>
    </section>
  )
}
