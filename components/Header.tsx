import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full sticky top-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 py-4 sm:py-5 lg:py-6'>
        <div
          className='mx-auto max-w-4xl rounded-[24px] p-3 liquid-glass flex items-center justify-between gap-2'
          style={{
            background: 'rgba(190, 190, 190, 0.2)',
            backdropFilter: 'blur(80px)',
            WebkitBackdropFilter: 'blur(80px)',
          }}>
          <Link href='/' aria-label='degaus home' className='flex items-center gap-1.5 sm:gap-2'>
            <Image
              src='/icons/logo-header.svg'
              alt='degaus logo'
              width={108}
              height={25}
              className='w-[108px] h-[25px]'
            />
          </Link>

          <div className='flex items-center gap-2.5'>
            <button
              aria-label='Login'
              className='flex items-center justify-center w-[71px] h-[35px] rounded-[10px] bg-[#E0E0E0] px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 pb-[6px] sm:pb-[10px] text-sm sm:text-base lg:text-xl font-bold text-black shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:bg-gray-300 transition cursor-pointer tracking-[-0.4px]'>
              Login
            </button>

            <button
              aria-label='Try for free'
              className='flex items-center justify-center w-[112px] h-[35px] rounded-[10px] px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 pb-[6px] sm:pb-[10px] text-sm sm:text-base lg:text-xl font-bold text-[#EEE] bg-linear-to-r from-[#152cd3] to-[#b308a7] shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:opacity-90 transition whitespace-nowrap tracking-[-0.4px]'>
              Try for free
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
