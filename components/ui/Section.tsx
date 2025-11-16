interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'gradient'
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600',
  }

  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  )
}
