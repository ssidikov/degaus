'use client'

import dynamic from 'next/dynamic'

// Dynamic import with ssr disabled to avoid hydration mismatch
const CookieConsent = dynamic(() => import('./CookieConsent'), {
  ssr: false,
})

export default CookieConsent
