import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import {
  BRAND,
  DRAWER_LABELS,
  FOOTER_LEFT,
  FOOTER_RIGHT,
  IMAGES,
  MARQUEE_TEXT,
  NAV_LINKS,
  SOCIAL_LINKS,
  YEAR,
} from '../site'

/** Shared easing for the drawer + hamburger morph. */
const EASE = 'cubic-bezier(0.76, 0, 0.24, 1)'

/** Off-site links open in a new tab; the unset '#' placeholders do not. */
const external = (href: string) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : null

export default function Hero() {
  const [open, setOpen] = useState(false)

  // Lock the page behind the drawer while it is open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* -------------------------------------------------- background -- */}
      <img
        src={IMAGES.background}
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
      />

      {/* ------------------------------------------------------ marquee -- */}
      <div
        className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]"
        style={{ animationDelay: '500ms' }}
        aria-hidden="true"
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] leading-none text-cream sm:text-[26vh]">
          <span className="pr-[6vw]">{MARQUEE_TEXT}</span>
          <span className="pr-[6vw]">{MARQUEE_TEXT}</span>
        </div>
      </div>

      {/* --------------------------------------------------- cream rule -- */}
      <div
        className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28"
        style={{ animationDelay: '1200ms' }}
      />

      {/* ------------------------------------------------------- footer -- */}
      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          {FOOTER_LEFT.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="anim-fade-up text-right" style={{ animationDelay: '1550ms' }}>
          {FOOTER_RIGHT.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </footer>

      {/* ---------------------------------- front portrait, over the name -- */}
      <img
        src={IMAGES.portrait}
        alt="Portrait"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover"
        style={{ animationDelay: '300ms' }}
      />

      {/* ------------------------------------------------------- header -- */}
      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#"
          className="anim-fade-up font-hn text-lg tracking-wide text-cream"
          style={{ animationDelay: '800ms' }}
        >
          {BRAND}
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span
            className="anim-fade-up text-sm text-cream"
            style={{ animationDelay: '900ms' }}
          >
            {YEAR}
          </span>

          <nav className="flex flex-col gap-0.5 text-sm">
            {NAV_LINKS.map((label, i) => (
              <a
                key={label}
                href="#"
                className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-0.5 text-sm">
            {SOCIAL_LINKS.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                {...external(href)}
                className="anim-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ------------------------------------------------ mobile drawer -- */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
      />

      <aside
        id="site-menu"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 sm:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: `transform 600ms ${EASE}` }}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          className="absolute right-6 top-6 text-cream transition-all duration-500"
          style={{
            transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
            opacity: open ? 1 : 0,
            transitionDelay: open ? '300ms' : '0ms',
          }}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <p
          className="text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500"
          style={{
            transform: open ? 'translateY(0)' : 'translateY(1rem)',
            opacity: open ? 1 : 0,
            transitionDelay: open ? '250ms' : '0ms',
          }}
        >
          {DRAWER_LABELS.nav}
        </p>

        <nav className="mt-6 flex flex-col gap-2">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              tabIndex={open ? 0 : -1}
              className="font-hn text-4xl text-cream transition-all duration-500"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(1.5rem)',
                opacity: open ? 1 : 0,
                transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <p
          className="mt-14 text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500"
          style={{
            transform: open ? 'translateY(0)' : 'translateY(1rem)',
            opacity: open ? 1 : 0,
            transitionDelay: open ? '500ms' : '0ms',
          }}
        >
          {DRAWER_LABELS.social}
        </p>

        <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {SOCIAL_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              {...external(href)}
              tabIndex={open ? 0 : -1}
              className="font-hn text-sm text-cream transition-all duration-500"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(1rem)',
                opacity: open ? 1 : 0,
                transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/*
        Hamburger, morphing into an X. It sits at z-50 ("always on top") while
        the drawer is closed and drops to z-30 while it is open, so the sliding
        panel covers it: otherwise its morphed X and the panel's Lucide X — both
        anchored at right-6 top-6 — render as one doubled, 7px-offset X.
      */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="site-menu"
        className={`anim-fade-up absolute right-6 top-6 flex h-10 w-10 items-center justify-center sm:hidden ${
          open ? 'z-30' : 'z-50'
        }`}
        style={{ animationDelay: '900ms' }}
      >
        <span className="relative block h-4 w-6">
          {[0, 1, 2].map((i) => {
            const closed = ['translateY(-7px)', 'translateY(0)', 'translateY(7px)'][i]
            const opened = ['rotate(45deg)', 'translateY(0)', 'rotate(-45deg)'][i]
            const isMiddle = i === 1
            return (
              <span
                key={i}
                className="absolute left-0 top-1/2 block h-0.5 w-full bg-cream"
                style={{
                  marginTop: '-1px',
                  transform: open ? opened : closed,
                  opacity: isMiddle && open ? 0 : 1,
                  transition: isMiddle
                    ? `opacity 300ms ${EASE}`
                    : `transform 500ms ${EASE}`,
                }}
              />
            )
          })}
        </span>
      </button>
    </section>
  )
}
