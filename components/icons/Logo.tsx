export default function Logo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 2L15 8L22 10L16 15L18 22L12 18L6 22L8 15L2 10L9 8L12 2Z'
        fill='url(#logo-gradient)'
      />
      <defs>
        <linearGradient
          id='logo-gradient'
          x1='2'
          y1='2'
          x2='22'
          y2='22'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#8B5CF6' />
          <stop offset='1' stopColor='#EC4899' />
        </linearGradient>
      </defs>
    </svg>
  )
}
