import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-full bg-gray-50'>
      <div className='container mx-auto px-6 py-6'>
        <div
          className='mx-auto max-w-5xl rounded-2xl liquid-glass px-4 py-3'
          style={{ background: 'rgba(190, 190, 190, 0.2)' }}>
          <div className='flex items-center justify-between'>
            <Link href='/' aria-label='degaus home' className='flex items-center gap-3'>
              <span className='inline-flex items-center justify-center w-9 h-9 rounded-lg bg-linear-to-br from-indigo-500 to-pink-500 shadow-sm'>
                <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden>
                  <path d='M12 2 15 8 22 10 16 15 18 22 12 18 6 22 8 15 2 10 9 8z' fill='white' />
                </svg>
              </span>

              <span className='text-3xl font-bold text-gray-900 leading-tight'>degaus</span>
            </Link>

            <div className='flex items-center gap-3'>
              <button
                aria-label='Login'
                className='rounded-lg bg-gray-300 border border-gray-200 px-3 py-1 text-xl font-bold shadow-sm hover:bg-gray-500 transition'>
                Login
              </button>

              <button
                aria-label='Try for free'
                className='rounded-lg px-3 py-1 text-xl font-semibold text-white bg-linear-to-r from-indigo-600 to-pink-500 shadow-md hover:scale-[1.02] transition-transform'>
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
