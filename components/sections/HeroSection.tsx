import InstagramIcon from '../icons/InstagramIcon'
import TikTokIcon from '../icons/TikTokIcon'

export default function HeroSection() {
  const contentCards = [
    { type: 'Faceless Account', color: 'from-purple-400 to-pink-400' },
    { type: 'AI UGC', color: 'from-pink-300 to-orange-300' },
    { type: 'Organic Podcast', color: 'from-amber-400 to-orange-400' },
    { type: 'AI Influencer', color: 'from-gray-400 to-gray-500' },
    { type: 'AI UGC Overlay', color: 'from-blue-400 to-cyan-400' },
    { type: 'Polished Ad', color: 'from-amber-200 to-pink-200' },
  ]

  return (
    <section className='pt-16 pb-20 px-4 sm:px-6 bg-gray-50'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-700 mb-6 leading-tight'>
            AI content that <br /> actually
            <span className='text-gray-900'> converts</span>
          </h1>

          <p className='text-lg sm:text-xl text-gray-600 font-bold mb-8 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-2'>
            <span>In minutes, create & automate your</span>
            <InstagramIcon className='w-6 h-6 text-pink-600' />
            <span>and</span>
            <TikTokIcon className='w-6 h-6 text-gray-900' />
            <span>content for your</span>
            <span className='inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full'>
              ✨ e-commerce
            </span>
          </p>

          <button className='px-6 py-3 text-2xl font-bold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-all shadow-lg hover:shadow-xl'>
            Try for free with 1-click
          </button>
        </div>

        <div className='relative mt-16'>
          <div className='flex gap-4 justify-center overflow-x-auto pb-4'>
            {contentCards.map((card, index) => (
              <div
                key={index}
                className={`shrink-0 w-44 h-80 bg-linear-to-br ${card.color} rounded-3xl shadow-xl overflow-hidden relative`}>
                <div className='absolute top-4 left-4 px-3 py-1.5 bg-pink-600/20 backdrop-blur-sm rounded-md text-xs font-medium text-gray-900'>
                  {card.type}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-16 text-center'>
          <p className='text-gray-500 text-sm mb-6'>Trusted by</p>
          <div className='flex flex-wrap items-center justify-center gap-8 opacity-60'>
            <span className='text-xl font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded'>
              RE VIBE
            </span>
            <span className='text-xl font-bold text-gray-900'>Voodoo</span>
            <span className='text-xl font-bold text-orange-500'>mojo</span>
            <span className='text-xl font-bold text-gray-900'>ROULETTE</span>
            <span className='text-xl font-bold text-gray-900'>⬢ Embat</span>
            <span className='text-xl font-bold text-white bg-gray-900 px-3 py-1 rounded'>
              neads
            </span>
            <span className='text-xl font-bold text-gray-900'>WIN◇BOSS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
