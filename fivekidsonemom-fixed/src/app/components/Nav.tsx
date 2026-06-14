'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/reselling', label: 'Reselling' },
  { href: '#newsletter', label: 'Join the Club' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-black/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group flex flex-col leading-none"
              aria-label="Five Kids One Mom - Home"
            >
              <span className="font-display font-bold text-brand-cream text-xl sm:text-2xl tracking-tight group-hover:text-brand-fire transition-colors duration-200">
                Five Kids
              </span>
              <span className="font-mono-brand text-brand-fire text-xs sm:text-sm tracking-widest uppercase">
                One Mom
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                    link.label === 'Join the Club'
                      ? 'bg-brand-fire text-brand-cream px-4 py-2 hover:bg-brand-cream hover:text-brand-fire transition-all duration-200'
                      : 'text-brand-tan hover:text-brand-cream'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 focus-visible:outline-brand-fire"
            >
              <span
                className={`block w-6 h-0.5 bg-brand-cream transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-brand-cream transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-brand-cream transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-brand-black flex flex-col pt-20 px-8 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-2xl font-bold transition-colors duration-200 ${
                  link.label === 'Join the Club'
                    ? 'text-brand-fire'
                    : 'text-brand-cream hover:text-brand-fire'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Tagline at bottom */}
          <div className="mt-auto pb-12">
            <p className="font-mono-brand text-brand-tan text-xs leading-relaxed">
              Real life. Real savings.<br />No filter. No fluff.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
