import Image from 'next/image'
import { cn } from '@/lib/utils'

interface FeatureListProps {
  features: readonly string[]
  iconSrc?: string
  iconColor?: 'blue' | 'pink'
  className?: string
}

export default function FeatureList({
  features,
  iconSrc,
  iconColor = 'blue',
  className,
}: FeatureListProps) {
  const defaultIcon = iconColor === 'blue' ? '/checked-blue.svg' : '/checked-pink.svg'
  const icon = iconSrc || defaultIcon

  return (
    <ul className={cn('space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3', className)}>
      {features.map((feature, i) => (
        <li key={i} className='flex items-center gap-2 sm:gap-2.5 md:gap-3'>
          <Image
            src={icon}
            alt='check'
            width={24}
            height={24}
            className='shrink-0 w-5 sm:w-5 md:w-6 lg:w-6 h-5 sm:h-5 md:h-6 lg:h-6'
          />
          <span
            className={cn(
              'text-[#8d8d8d]',
              "text-base sm:text-lg md:text-xl lg:text-xl font-semibold font-['Darker_Grotesque'] leading-tight sm:leading-7 tracking-[-0.6px]"
            )}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  )
}
