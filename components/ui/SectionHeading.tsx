import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
  titleClassName?: string
  titleClassNameWithSubtitle?: string
  subtitleClassName?: string
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  centered = true,
  titleClassName,
  titleClassNameWithSubtitle,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      <h2
        className={cn(
          'text-4xl lg:text-[50px] leading-[28px] font-bold tracking-[-1.5px]',
          subtitle && titleClassNameWithSubtitle,
          titleClassName || 'text-[#323232]'
        )}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-['Darker_Grotesque'] text-2xl font-bold tracking-[-0.72px] leading-6 text-[#8d8d8d]",
            subtitleClassName
          )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
