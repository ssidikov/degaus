import InstagramIcon from '../icons/InstagramIcon'
import TikTokIcon from '../icons/TikTokIcon'
import Image from 'next/image'

export default function HeroSection() {
  const contentCards = [
    {
      type: 'Faceless Accounts',
      image: '/images/hero/faceless-accounts.jpg',
      content: {
        title: 'Daily reminder that',
        items: [
          "-you're worth it ✨",
          "-it's time to reclaim your time 🍾",
          '-celebrate the wins 🍷',
        ],
      },
    },
    {
      type: 'AI UGC',
      image: '/images/hero/ai-ugc.jpg',
    },
    {
      type: 'Organic Podcast',
      image: '/images/hero/organic-podcast.jpg',
    },
    {
      type: 'AI Influencer',
      image: '/images/hero/ai-influencer.jpg',
      content: {
        title: '💔 Honest truths about dating part 1',
        items: [
          "-perfect companion doesn't exist 🥀",
          "-if things dont click, don't persist",
          '-looks count in the short term, personality in the long term',
          "-don't date french people",
        ],
      },
    },
    {
      type: 'AI UGC Overlay',
      image: '/images/hero/ai-ugc-overlay.jpg',
    },
    {
      type: 'Polished Ad',
      image: '/images/hero/polished-ad.jpg',
    },
  ]

  const trustedBrands = [
    {
      name: 'RE VIBE',
      image: '/images/brands/revibe.png',
      width: 83,
      height: 27,
    },
    {
      name: 'Voodoo',
      image: '/images/brands/voodoo.png',
      width: 89,
      height: 18,
    },
    {
      name: 'mojo',
      image: '/images/brands/mojo.png',
      width: 132,
      height: 62,
    },
    {
      name: 'ROULETTE',
      image: '/images/brands/roulette.png',
      width: 135,
      height: 25,
    },
    {
      name: 'Embat',
      image: '/images/brands/embat.png',
      width: 141,
      height: 37,
    },
    {
      name: 'neads',
      image: '/images/brands/neads.png',
      width: 99,
      height: 34,
    },
    {
      name: 'WIN◇BOSS',
      image: '/images/brands/winboss.png',
      width: 120,
      height: 63,
    },
  ]

  return (
    <section className='pt-8 pb-20 px-4 sm:px-6'>
      <div className='container mx-auto max-w-7xl'>
        {/* Hero Content */}
        <div className='text-center mb-16 max-w-4xl mx-auto'>
          <h1 className='text-[clamp(3rem,2.4435rem+2.7826vw,5rem)] font-extrabold mb-9 leading-[1.1] tracking-tight'>
            <span className='text-gray-600'>
              AI content that <br />
              actually
            </span>
            <span className='text-black'> converts</span>
          </h1>

          <div className='flex flex-wrap items-center justify-center gap-2 text-[26px] font-bold text-[#7C7C7C] mb-9 leading-none tracking-tight'>
            <span>In minutes, create & automate your</span>
            <InstagramIcon className='w-8 h-8' />
            <span>and</span>
            <TikTokIcon className='w-8 h-8' />
            <span>content for your</span>
            <span className='inline-flex items-center gap-1.5 px-3 py-3 bg-blue-100/60 text-blue-600 rounded-2xl shadow-[0px_4px_10px_0px_rgba(50,84,255,0.25)] backdrop-blur-sm'>
              <Image src='/sparkles.svg' alt='ecommerce icon' width={14} height={14} />
              e-commerce
            </span>
          </div>

          <button className='p-[18px] text-[26px] font-bold text-gray-100 bg-linear-to-r from-[#152cd3] to-[#b308a7] rounded-2xl shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:opacity-90 transition'>
            Try for free with 1-click
          </button>
        </div>

        {/* Content Cards */}
        <div className='relative mb-24'>
          <div className='flex gap-9 justify-center overflow-x-auto pb-4 px-4'>
            {contentCards.map((card, index) => (
              <div
                key={index}
                className='shrink-0 w-[195px] h-[350px] rounded-3xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden relative'>
                <Image
                  src={card.image}
                  alt={card.type}
                  fill
                  className='object-cover'
                  sizes='195px'
                />
                <div className='absolute top-3 left-2 px-1.5 py-1.5 bg-purple-500/30 backdrop-blur-sm rounded-md'>
                  <span className='text-[16px] font-semibold text-pink-200 leading-none tracking-tight'>
                    {card.type}
                  </span>
                </div>
                {card.content && (
                  <div className='absolute inset-x-0 bottom-0 p-4 text-center'>
                    <p className='text-white text-xs font-semibold mb-2 tracking-tight'>
                      {card.content.title}
                    </p>
                    <p className='text-white text-xs font-semibold leading-3.5 tracking-tight whitespace-pre-line'>
                      {card.content.items.join('\n')}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By */}
        <div className='text-center'>
          <p className='text-gray-500 text-[26px] font-bold mb-10 tracking-tight'>Trusted by</p>
          <div className='flex flex-wrap items-center justify-center gap-20'>
            {trustedBrands.map((brand, index) => (
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
      </div>
    </section>
  )
}
