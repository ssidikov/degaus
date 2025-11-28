import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanity Studio - degaus',
  robots: {
    index: false,
    follow: false,
  },
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
