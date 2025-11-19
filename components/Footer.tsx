import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-gray-50 border-t border-gray-200'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1'>
            <Link href='/' className='flex items-center gap-2 mb-4'>
              <Image
                src='/logo.svg'
                alt='degaus logo'
                width={20}
                height={20}
                className='w-5 h-5 sm:w-6 sm:h-6 lg:w-[25px] lg:h-[25px]'
              />
              <span className='text-xl font-semibold text-gray-900'>degaus</span>
            </Link>
            <p className='text-sm text-gray-600'>AI content that actually converts</p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-4'>Product</h3>
            <ul className='space-y-3'>
              <li>
                <Link href='#' className='text-sm text-gray-600 hover:text-gray-900'>
                  Features
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm text-gray-600 hover:text-gray-900'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm text-gray-600 hover:text-gray-900'>
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-4'>Company</h3>
            <ul className='space-y-3'>
              <li>
                <Link href='#' className='text-sm text-gray-600 hover:text-gray-900'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm text-gray-600 hover:text-gray-900'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm text-gray-600 hover:text-gray-900'>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-4'>Legal</h3>
            <ul className='space-y-3'>
              <li>
                <Link href='#' className='text-sm text-gray-600 hover:text-gray-900'>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm text-gray-600 hover:text-gray-900'>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-200'>
          <p className='text-sm text-gray-600 text-center'>
            © {new Date().getFullYear()} degaus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
