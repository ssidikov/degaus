import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PricingFeature {
  text: string
  enabled: boolean
}

interface PricingCardProps {
  name: string
  price: string
  period?: string
  buttonColor: string
  buttonText: string
  checkColor: 'pink' | 'blue' | 'gray'
  features: PricingFeature[]
  popular?: boolean
}

export default function PricingCard({
  name,
  price,
  period = '',
  buttonColor,
  buttonText,
  checkColor,
  features,
  popular = false,
}: PricingCardProps) {
  // Определяем иконку в зависимости от цвета
  const iconSrc = checkColor === 'pink' ? '/checked-pink.svg' : '/checked-blue.svg'

  return (
    <div className='relative h-auto rounded-[15px] sm:rounded-[20px] border-4 sm:border-[5px] border-white bg-[#f3f3f9] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] overflow-visible'>
      {/* Popular Badge */}
      {popular && (
        <>
          <div className='left-1/2 -translate-x-1/2 -top-8 absolute z-20'>
            {/* Blur effect behind badge */}
            <div className='absolute inset-0 bg-white/90 rounded-[20px] blur-md -z-10 shadow-[0px_4px_10px_0px_rgba(50,84,255,0.25)]' />
            <Image
              src='/icons/most-popular.svg'
              alt='Most popular'
              width={150}
              height={40}
              className='w-[150px] h-auto relative z-10 '
            />
          </div>
          {/* Glow effects */}
          <div className='w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32 left-[15%] sm:left-[43.50px] bottom-[-100px] absolute bg-[#C3C3FF] rounded-full blur-2xl sm:blur-3xl' />
          <div className='w-32 sm:w-40 md:w-48 h-24 sm:h-28 md:h-32 right-[15%] sm:left-[179.50px] bottom-[-100px] absolute bg-[#C3C3FF] rounded-full blur-2xl sm:blur-3xl' />
        </>
      )}

      <div className='flex h-full flex-col px-6 sm:px-8 md:px-10 lg:px-10 pt-8 sm:pt-9 md:pt-10 lg:pt-11 pb-6 sm:pb-7 xl:pr-9'>
        {/* Plan Name */}
        <h3 className="mb-5 sm:mb-6 md:mb-7 font-['Darker_Grotesque'] text-3xl sm:text-[32px] md:text-[34px] font-bold leading-tight sm:leading-7 tracking-tight sm:tracking-[-1.02px] text-[#323232]">
          {name}
        </h3>

        {/* Price */}
        <div className="mb-5 sm:mb-6 md:mb-7 font-['Darker_Grotesque'] font-bold text-[#323232]">
          {price.startsWith('$') ? (
            <p className='leading-tight sm:leading-7'>
              <span className='text-3xl sm:text-[32px] md:text-[34px]'>{price}</span>
              {period && (
                <span className='text-xl sm:text-2xl tracking-tight sm:tracking-[-0.72px]'>
                  {period}
                </span>
              )}
            </p>
          ) : (
            <span className='text-xl sm:text-2xl leading-tight sm:leading-7 tracking-tight sm:tracking-[-0.72px]'>
              {price}
            </span>
          )}
        </div>

        {/* Features */}
        <ul className='mb-6 sm:mb-7 md:mb-8 flex-1 space-y-2 sm:space-y-2.5 md:space-y-3 py-2 sm:py-2.5 md:py-3'>
          {features.map((feature, i) => (
            <li key={i} className='flex items-center gap-2 sm:gap-2.5 md:gap-3'>
              <div className='flex items-center justify-center w-6 sm:w-6 md:w-7 h-6 sm:h-6 md:h-7 shrink-0'>
                <Image
                  src={iconSrc}
                  alt='check'
                  width={28}
                  height={28}
                  className={cn(
                    'w-6 sm:w-6 md:w-7 h-6 sm:h-6 md:h-7',
                    !feature.enabled && 'opacity-50'
                  )}
                />
              </div>
              <span
                className={cn(
                  "font-['Darker_Grotesque'] text-base sm:text-lg md:text-xl font-semibold leading-tight sm:leading-7 tracking-tight sm:tracking-[-0.6px] text-[#8d8d8d]",
                  !feature.enabled && 'line-through'
                )}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          className={cn(
            buttonColor,
            "z-10 rounded-[15px] px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 m-auto font-['Darker_Grotesque'] text-xl sm:text-2xl md:text-[26px] font-bold text-white transition-transform hover:scale-105"
          )}
          style={{
            boxShadow:
              '0px 4px 15px 0px rgba(16,16,17,0.25), inset 0px -4px 4px 0px rgba(0,0,0,0.3), inset 0px 4px 4px 0px rgba(255,255,255,0.35)',
          }}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}
