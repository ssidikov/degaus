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
  const iconSrc =
    checkColor === 'pink'
      ? '/checked-pink.svg'
      : checkColor === 'blue'
      ? '/checked-blue.svg'
      : '/checked-black.svg'

  return (
    <div className='relative h-auto rounded-[15px] sm:rounded-[20px] border-4 sm:border-[5px] border-white bg-[#f3f3f9] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)]'>
      {/* Popular Badge */}
      {popular && (
        <>
          <div className='left-1/2 -translate-x-1/2 -top-6 absolute z-20'>
            {/* Blur effect behind badge */}
            <div className='absolute inset-0 bg-white/80 rounded-[20px] blur-md -z-10 shadow-[0px_4px_10px_0px_rgba(50,84,255,0.25)]' />
            <Image
              src='/icons/most-popular.svg'
              alt='Most popular'
              width={150}
              height={40}
              className='w-[150px] h-auto relative z-10 '
              priority
              quality={100}
            />
          </div>
          {/* Glow effects - SVG ellipses */}
          {/* Left ellipse */}
          <div className='absolute left-0 bottom-0 w-[382px] h-[191px] pointer-events-none overflow-hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='382'
              height='191'
              viewBox='0 0 382 191'
              fill='none'
              className='w-full h-full'>
              <g filter='url(#filter0_f_left_glow)'>
                <ellipse cx='137.5' cy='211' rx='94' ry='61' fill='#C3C3FF' />
              </g>
              <defs>
                <filter
                  id='filter0_f_left_glow'
                  x='-106.5'
                  y='0'
                  width='488'
                  height='422'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='75' result='effect1_foregroundBlur_1_551' />
                </filter>
              </defs>
            </svg>
          </div>
          {/* Right ellipse */}
          <div className='absolute right-0 bottom-0 w-[371px] h-[192px] pointer-events-none overflow-hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='371'
              height='192'
              viewBox='0 0 371 192'
              fill='none'
              className='w-full h-full'>
              <g filter='url(#filter0_f_right_glow)'>
                <ellipse cx='246' cy='211' rx='96' ry='61' fill='#C3C3FF' />
              </g>
              <defs>
                <filter
                  id='filter0_f_right_glow'
                  x='0'
                  y='0'
                  width='492'
                  height='422'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='75' result='effect1_foregroundBlur_1_552' />
                </filter>
              </defs>
            </svg>
          </div>
        </>
      )}

      <div className='flex h-full flex-col px-6 sm:px-8 md:px-10 lg:px-10 pt-8 sm:pt-9 md:pt-10 lg:pt-[42px] pb-6 sm:pb-7 xl:pr-9 gap-[30px]'>
        {/* Plan Name */}
        <h3 className="font-['Darker_Grotesque'] text-3xl sm:text-[32px] md:text-[34px] font-bold leading-tight sm:leading-7 tracking-tight sm:tracking-[-1.02px] text-gray-800">
          {name}
        </h3>

        {/* Price */}
        <div className="font-['Darker_Grotesque'] font-bold text-gray-800">
          {price.startsWith('$') ? (
            <p className='leading-[28px] tracking-[-1.02px]'>
              <span className='text-3xl sm:text-[32px] md:text-[34px]'>{price}</span>
              {period && (
                <span className='text-xl sm:text-[34px] leading-[28px] tracking-tight sm:tracking-[-1.02px]'>
                  {period}
                </span>
              )}
            </p>
          ) : (
            <span className='text-xl sm:text-[34px] leading-[28px] tracking-tight sm:tracking-[-1.02px]'>
              {price}
            </span>
          )}
        </div>

        {/* Features */}
        <ul className='flex-1 space-y-2 sm:space-y-2.5 md:space-y-3 py-2'>
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
                  "font-['Darker_Grotesque'] text-base sm:text-[20px] font-semibold leading-tight sm:leading-7 tracking-tight sm:tracking-[-0.6px] text-[#8D8D8D] pb-[2px]",
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
            "z-10 rounded-[15px] px-4 pt-2.5 pb-3.5 m-auto font-['Darker_Grotesque'] text-xl sm:text-2xl md:text-[26px] font-bold text-[#EEE] transition-transform hover:scale-105 leading-[28px] tracking-[-0.52px]"
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
