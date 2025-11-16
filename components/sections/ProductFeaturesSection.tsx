import { PRODUCT_FEATURES } from '@/lib/constants'

export default function ProductFeaturesSection() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto max-w-7xl'>
        <div className='text-center mb-16'>
          <p className='text-sm font-semibold text-indigo-600 mb-2'>Features</p>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900'>
            Everything you need in one place
          </h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {PRODUCT_FEATURES.map((feature) => {
            const isDark = 'isDark' in feature && feature.isDark

            return (
              <div
                key={feature.id}
                className={`${feature.bgColor} rounded-3xl p-8 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                <h3 className='text-2xl font-bold mb-2'>{feature.title}</h3>
                <p className={`text-sm mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.subtitle}
                </p>

                <ul className='space-y-3 mb-8'>
                  {feature.features.map((item, index) => (
                    <li key={index} className='flex items-center gap-3'>
                      <svg
                        className={`w-5 h-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      <span className={isDark ? 'text-gray-200' : 'text-gray-700'}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`rounded-2xl h-48 overflow-hidden ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                  <div className='w-full h-full flex items-center justify-center'>
                    <div
                      className={`w-32 h-32 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
