'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center mb-12'>
          <p className='text-sm font-semibold text-indigo-600 mb-2'>FAQ</p>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            Frequently asked questions
          </h2>
          <p className='text-gray-600'>
            If you can&apos;t find the answer, simply{' '}
            <button className='text-indigo-600 font-medium hover:underline'>reach out</button>.
          </p>
        </div>

        <div className='space-y-4'>
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl border border-gray-200 overflow-hidden'>
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'>
                <span className='font-semibold text-gray-900 pr-4'>{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                <div className='px-6 pb-5 text-gray-600'>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
