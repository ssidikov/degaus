interface CheckIconProps {
  className?: string
}

export default function CheckIcon({ className = 'size-3 text-white' }: CheckIconProps) {
  return (
    <svg className={className} fill='none' viewBox='0 0 10 10'>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M2 5l2 2 4-4'
      />
    </svg>
  )
}
