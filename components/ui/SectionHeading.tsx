import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      <h2
        className={cn(
          'text-4xl lg:text-5xl font-bold leading-tight tracking-[-1.5px] text-[#323232]',
          subtitle && 'mb-6'
        )}>
        {title}
      </h2>
      {subtitle && (
        <p className="font-['Darker_Grotesque'] text-2xl font-bold text-[#8d8d8d] tracking-[-0.72px] leading-6">
          {subtitle}
        </p>
      )}
    </div>
  )
}
