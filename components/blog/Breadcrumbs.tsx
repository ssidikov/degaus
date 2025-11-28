import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label='Breadcrumb' className='mb-8'>
      <ol className='flex flex-wrap items-center align-center justify-center gap-2 text-sm text-gray-600'>
        <li>
          <Link href='/' className='transition-colors hover:text-[#492BDA]'>
            Main page
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className='flex items-center gap-2'>
            <svg
              className='h-4 w-4 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
            {item.url ? (
              <Link href={item.url} className='transition-colors hover:text-[#492BDA]'>
                {item.name}
              </Link>
            ) : (
              <span className='font-medium text-gray-900'>{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
