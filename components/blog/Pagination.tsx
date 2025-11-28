import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const showEllipsis = totalPages > 7

  // Display logic: show first, last, current, and 2 pages around current
  const visiblePages = showEllipsis
    ? pages.filter((page) => {
        if (page === 1 || page === totalPages) return true
        if (page >= currentPage - 1 && page <= currentPage + 1) return true
        return false
      })
    : pages

  return (
    <nav className='flex items-center justify-center gap-2 mt-12' aria-label='Pagination'>
      {/* Previous button */}
      {currentPage > 1 ? (
        <Link
          href={currentPage === 2 ? basePath : `${basePath}?page=${currentPage - 1}`}
          className='flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-[#492BDA]'>
          <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
          <span className='hidden sm:inline'>Précédent</span>
        </Link>
      ) : (
        <button
          disabled
          className='flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed'>
          <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
          <span className='hidden sm:inline'>Précédent</span>
        </button>
      )}

      {/* Page numbers */}
      <div className='flex items-center gap-2'>
        {visiblePages.map((page, index) => {
          // Show ellipsis if there's a gap
          const showEllipsisBefore = showEllipsis && index > 0 && page - visiblePages[index - 1] > 1

          return (
            <div key={page} className='flex items-center gap-2'>
              {showEllipsisBefore && <span className='px-2 text-gray-500'>...</span>}
              <Link
                href={page === 1 ? basePath : `${basePath}?page=${page}`}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  page === currentPage
                    ? 'bg-[#492BDA] text-white'
                    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-[#492BDA]'
                }`}
                aria-current={page === currentPage ? 'page' : undefined}>
                {page}
              </Link>
            </div>
          )
        })}
      </div>

      {/* Next button */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className='flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-[#492BDA]'>
          <span className='hidden sm:inline'>Suivant</span>
          <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </Link>
      ) : (
        <button
          disabled
          className='flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed'>
          <span className='hidden sm:inline'>Suivant</span>
          <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
          </svg>
        </button>
      )}
    </nav>
  )
}
