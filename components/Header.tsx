import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full'>
      <div className='container mx-auto px-6 py-8'>
        <div
          className='mx-auto max-w-5xl px-3 rounded-[20px] liquid-glass p-3 flex items-center justify-between '
          style={{ background: 'rgba(190, 190, 190, 0.2)' }}>
          <Link href='/' aria-label='degaus home' className='flex items-center gap-2'>
            <Image src='/logo.svg' alt='degaus logo' width={25} height={25} />
            <span className='text-[28px] font-bold text-gray-900 leading-none tracking-tight'>
              degaus
            </span>
          </Link>

          <div className='flex items-center gap-2.5'>
            <button
              aria-label='Login'
              className='rounded-lg bg-neutral-200 px-4 py-2 text-xl font-bold text-black shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:bg-gray-300 transition cursor-pointer'>
              Login
            </button>

            <button
              aria-label='Try for free'
              className='rounded-lg px-4 py-2 text-xl font-bold text-gray-100 bg-linear-to-r from-[#152cd3] to-[#b308a7] shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)] hover:opacity-90 transition'>
              Try for free
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
