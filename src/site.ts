/**
 * Every string and asset the hero renders, in one place.
 * Rebranding the page is an edit to this file alone.
 */

export const BRAND = 'Louise Dove'
export const YEAR = '2026'

/** Marquee text: U+2014 em dash (&mdash;) + trailing U+00A0 (&nbsp;), written as escapes. */
export const MARQUEE_TEXT = 'Louise \u2014 Dove\u00A0'

export const NAV_LINKS = ['Story', 'Services', 'Book'] as const

export type SocialLink = { label: string; href: string }

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/louisedovehair/' },
  { label: 'TikTok', href: '#' },
  { label: 'Pinterest', href: '#' },
]

export const FOOTER_LEFT = [
  'Hair Stylist',
  'Colour Specialist',
  'Obsessed with good hair',
] as const

export const FOOTER_RIGHT = ['A studio for', 'Considered hair'] as const

export const DRAWER_LABELS = {
  nav: 'Site Index',
  social: 'Find Me',
} as const

export const IMAGES = {
  background:
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85',
  portrait:
    'https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png',
} as const
