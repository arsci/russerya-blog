import { headers } from 'next/headers'
import Script from 'next/script'
import { EU_COUNTRY_CODES } from '@/components/Constants'
import { GoogleTagManager } from '@next/third-parties/google'

export default function GoogleAnalytics() {
  const countryCode = headers().get('x-vercel-ip-country') || 'US'
  const GTMID = process.env.NEXT_PUBLIC_GTMID ?? ''

  if (EU_COUNTRY_CODES.includes(countryCode)) {
    return null
  }

  return (
    <GoogleTagManager gtmId={GTMID} />
  )
}