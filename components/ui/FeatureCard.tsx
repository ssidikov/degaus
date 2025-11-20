import FeatureList from './FeatureList'
import { AI_UGC_FEATURES } from '@/lib/constants'

interface FeatureCardProps {
  title: string
  subtitle: string
  videoSrc?: string
  showVideo?: boolean
}

export default function FeatureCard({
  title,
  subtitle,
  videoSrc,
  showVideo = true,
}: FeatureCardProps) {
  return (
    <div className='relative w-full h-[450px] sm:h-[620px] bg-gray-50 border-[5px] border-white rounded-tl-[20px] rounded-tr-[5px] rounded-bl-[20px] rounded-br-[5px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.10)] outline-[5px] outline-offset-[-5px] outline-white overflow-hidden'>
      <div className='inline-flex flex-col justify-start items-start gap-4 xl:gap-7 px-6 xl:px-10 pt-6 xl:pt-10 pb-6'>
        <h3 className='text-zinc-800 text-2xl md:text-4xl font-bold leading-tight sm:leading-7 lg:leading-8'>
          {title}
        </h3>

        <div className='flex flex-col gap-4 xl:gap-6'>
          <p className='text-zinc-600 text-lg md:text-2xl font-bold leading-tight sm:leading-6 lg:leading-6'>
            {subtitle}
          </p>

          <FeatureList features={AI_UGC_FEATURES} iconColor='blue' />
        </div>
      </div>

      {showVideo && (
        <>
          {/* "See for yourself" indicator with arrow */}
          <div className='w-auto right-[6%] top-[50%] sm:top-[40%] lg:top-[47%] absolute flex items-center gap-1 sm:gap-1.5'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-3.5 sm:w-4'>
              <path
                d='M11.9999 10.6667V13.3334M3.99986 2.6667V5.33336M10.6665 12H13.3332M2.66653 4.00003H5.3332M4.66653 9.67673V8.00003H6.55958M10.4576 6.6667H11.9999V4.9254M2.46842 13.1347L2.86574 13.532C3.14455 13.8108 3.28395 13.9503 3.44318 13.9988C3.58312 14.0415 3.73322 14.0369 3.87033 13.9859C4.02633 13.9278 4.15704 13.7802 4.41848 13.485L13.6879 3.0196C13.7858 2.90897 13.8348 2.85366 13.8565 2.79343C13.8851 2.71394 13.8825 2.62656 13.8491 2.54894C13.8238 2.49013 13.7716 2.43788 13.6671 2.33338C13.5626 2.22888 13.5103 2.17663 13.4515 2.15136C13.3739 2.118 13.2865 2.11535 13.207 2.14395C13.1468 2.16563 13.0915 2.21462 12.9809 2.31261L2.51543 11.582C2.22027 11.8434 2.07268 11.9741 2.01458 12.1301C1.96352 12.2672 1.95897 12.4173 2.00165 12.5573C2.05021 12.7165 2.18961 12.8559 2.46842 13.1347Z'
                stroke='#929292'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className='text-neutral-400 text-base sm:text-lg font-semibold leading-tight sm:leading-7'>
              See for yourself
            </span>
          </div>

          {/* Eclipse effects below video */}
          <div className='w-40 h-28 left-[20%] sm:left-[22%] md:right-[25%] lg:left-[35px] top-[440px] sm:top-[480px] md:top-[550px] lg:top-[560px] absolute bg-violet-300 rounded-full blur-2xl sm:blur-[45px] md:blur-[50px]' />
          <div className='w-24 sm:w-28 md:w-32 lg:w-40 h-20 sm:h-20 md:h-24 lg:h-28 left-[60%] sm:left-[58%] md:right-[5%] lg:left-40 top-[440px] sm:top-[480px] md:top-[550px] lg:top-[560px] absolute bg-violet-300 rounded-full blur-2xl sm:blur-[45px] md:blur-[50px]' />

          {/* Video with play button */}
          <div className='w-32 sm:w-48 h-56 sm:h-80 left-[50%] md:left-[25%] lg:left-[20%] xl:left-[25%] top-[58%] sm:top-[50%] lg:top-[55%] xl:top-80 -translate-x-1/2 md:translate-x-0 lg:translate-x-0 absolute shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-[20px]'>
            <video
              className='w-full h-full rounded-[20px] object-cover'
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className='p-1.5 sm:p-2 lg:p-2.5 left-[50%] lg:left-[72px] top-[50%] sm:top-[130px] -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 absolute bg-black/50 rounded-[100px] flex justify-center items-center gap-2.5'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 18 18'
                className='w-4 sm:w-[18px]'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12.4937 6.96473C13.5735 7.6396 14.1134 7.97704 14.2985 8.40906C14.4602 8.78637 14.4602 9.21347 14.2985 9.59078C14.1134 10.0228 13.5735 10.3602 12.4937 11.0351L7.422 14.2049C6.22354 14.954 5.62431 15.3285 5.1298 15.2887C4.69876 15.2541 4.30364 15.0351 4.0458 14.6879C3.75 14.2897 3.75 13.583 3.75 12.1697V5.83012C3.75 4.41683 3.75 3.71019 4.0458 3.31192C4.30364 2.96476 4.69876 2.74577 5.1298 2.71112C5.62431 2.67136 6.22354 3.04588 7.422 3.79492L12.4937 6.96473Z'
                  stroke='#EEEEEE'
                  strokeWidth='2'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>

          {/* Arrow indicator pointing to video */}
          <svg
            width='71'
            height='79'
            viewBox='0 0 71 79'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='right-[15%] lg:right-[23%] xl:right-[20%] top-[52%] sm:top-[45%] lg:top-[52%] -translate-x-1/2 lg:translate-x-0 absolute sm:block w-12 sm:w-14 md:w-16 lg:w-[71px]'>
            <path
              d='M68.8677 2.00049C61.1912 22.0287 40.3275 57.9567 15.8842 46.0957C-0.804533 37.9981 11.9513 20.155 29.8641 29.7176C47.777 39.2802 42.5173 73.4717 2.86771 70.1661M2.86771 70.1661L8.19039 64.1717M2.86771 70.1661L11.0922 77.0005'
              stroke='#929292'
              strokeWidth='4'
              strokeLinecap='round'
            />
          </svg>
        </>
      )}
    </div>
  )
}
