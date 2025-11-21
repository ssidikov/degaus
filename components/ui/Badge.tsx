import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  badgeClassName?: string
}

export default function Badge({
  children,
  className,
  containerClassName,
  badgeClassName,
}: BadgeProps) {
  return (
    <div className={cn('flex justify-center', containerClassName)}>
      <div
        className={cn(
          'rounded-[20px] bg-[#FDFDFD] p-[15px] h-[44px] flex items-center justify-center',
          'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]',
          badgeClassName,
          className
        )}>
        <p className="font-['Darker_Grotesque'] text-2xl font-semibold leading-4 tracking-[-0.72px] text-[#7E7E7E] mb-1">
          {children}
        </p>
      </div>
    </div>
  )
}
