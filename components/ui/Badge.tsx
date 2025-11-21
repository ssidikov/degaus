import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <div className='mb-8 flex justify-center'>
      <div
        className={cn(
          'rounded-[24px] bg-white px-6 py-2',
          'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]',
          className
        )}>
        <p className="font-['Darker_Grotesque'] text-2xl font-semibold tracking-[-0.72px] text-gray-500">
          {children}
        </p>
      </div>
    </div>
  )
}
