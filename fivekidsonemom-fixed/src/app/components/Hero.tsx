'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = [headlineRef.current, subRef.current, ctaRef.current, statsRef.current]
    elements.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      setTimeout(() => {
        if (!el) return
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100 + i * 150)
    })
  }, [])

  return (
    <section
      className="relative min-h-screen bg-brand-black overflow-hidden flex flex-col justify-center torn-edge-bottom"
      aria-label="Welcome to Five Kids One Mom"
    >
      {/* Texture overlay — subtle grain */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
        aria-hidden="true"
      />

      {/* Fire accent top-right */}
      <div
        className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, #E8440A, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-40">
        {/* Eyebrow */}
        <div className="mb-6 sm:mb-8">
          <span className="font-mono-brand text-brand-fire text-xs sm:text-sm tracking-[0.2em] uppercase">
            The blog that tells it how it is
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-display font-black text-brand-cream leading-[0.92] tracking-tight mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)' }}
        >
          Five Kids.<br />
          <span className="text-brand-fire">One Mom.</span><br />
          Zero <span className="italic">Filter.</span>
        </h1>

        {/* Sub copy */}
        <p
          ref={subRef}
          className="font-body text-brand-tan text-base sm:text-xl max-w-xl leading-relaxed mb-10 sm:mb-12"
        >
          I&apos;m Aypril — full-time working mum, single-handedly raising five kids, 
          and building a life on my own terms. I show you the chaos, the wins, 
          and how I flip £1 finds into £30 profits. The good, the bad, and the ugly. 
          All of it.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16 sm:mb-20">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 bg-brand-fire text-brand-cream font-body font-semibold text-sm sm:text-base px-8 py-4 hover:bg-brand-cream hover:text-brand-fire transition-all duration-200 tracking-wide focus-visible:outline-2 focus-visible:outline-brand-cream"
          >
            Read the Blog
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="/reselling"
            className="inline-flex items-center justify-center gap-2 border border-brand-tan text-brand-tan font-body font-semibold text-sm sm:text-base px-8 py-4 hover:border-brand-cream hover:text-brand-cream transition-all duration-200 tracking-wide focus-visible:outline-2 focus-visible:outline-brand-tan"
          >
            See the Flips
          </Link>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-brand-charcoal"
          aria-label="Key stats"
        >
          {[
            { number: '5', label: 'Kids raised solo' },
            { number: '10×', label: 'Average resell margin' },
            { number: '0%', label: 'Sugar coating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="font-display font-black text-brand-cream text-2xl sm:text-4xl leading-none mb-1">
                {stat.number}
              </div>
              <div className="font-mono-brand text-brand-tan text-xs tracking-wider uppercase leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        aria-hidden="true"
      >
        <span className="font-mono-brand text-brand-tan text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="#C9B99A" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="2.5" fill="#E8440A"/>
        </svg>
      </div>
    </section>
  )
}
