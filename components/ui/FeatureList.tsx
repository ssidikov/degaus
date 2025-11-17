import Image from 'next/image'
import { cn } from '@/lib/utils'

interface FeatureListProps {
  features: string[]
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
    <ul className={cn('space-y-3', className)}>
      {features.map((feature, i) => (
        <li key={i} className='flex items-center gap-3'>
          <Image src={icon} alt='check' width={24} height={24} className='shrink-0' />
          <span className="font-['Darker_Grotesque'] text-lg lg:text-xl font-semibold text-[#8d8d8d]">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  )
}
