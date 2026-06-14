'use client'

import { useState, useRef, useEffect } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const sectionRef = useRef<HTMLElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.')
      setState('error')
      inputRef.current?.focus()
      return
    }

    setState('loading')
    setErrorMsg('')

    // TODO: Replace with your email provider (Mailchimp, ConvertKit, etc.)
    // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
    setEmail('')
  }

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="bg-brand-cream py-20 sm:py-28 relative overflow-hidden"
      aria-label="Newsletter signup"
    >
      {/* Decorative element */}
      <div
        className="absolute top-0 left-0 w-48 h-48 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top left, #E8440A, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="scroll-reveal inline-block font-mono-brand text-brand-fire text-xs tracking-[0.2em] uppercase mb-4">
          Join the club
        </span>

        <h2
          className="scroll-reveal font-display font-black text-brand-black leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          No spam.{' '}
          <span className="italic text-brand-fire">No fluff.</span>
          <br />
          Just the real stuff.
        </h2>

        <p className="scroll-reveal font-body text-brand-charcoal text-base sm:text-lg leading-relaxed mb-3 max-w-lg mx-auto">
          Get new blog posts, my latest flip finds, and honest money-saving tips
          delivered straight to your inbox. Mum to mum.
        </p>

        <p className="scroll-reveal font-mono-brand text-brand-tan text-xs tracking-wider mb-10">
          Unsubscribe any time. I hate spam as much as you do.
        </p>

        {state === 'success' ? (
          <div
            className="scroll-reveal bg-brand-black p-8 sm:p-12"
            role="status"
            aria-live="polite"
          >
            <div className="text-4xl mb-4" aria-hidden="true">🔥</div>
            <h3 className="font-display font-bold text-brand-cream text-2xl mb-2">
              You&apos;re in.
            </h3>
            <p className="font-body text-brand-tan">
              Welcome to the club. Watch your inbox — the real talk starts now.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="scroll-reveal flex flex-col sm:flex-row gap-0 max-w-lg mx-auto"
            noValidate
            aria-label="Email newsletter signup"
          >
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                ref={inputRef}
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (state === 'error') {
                    setState('idle')
                    setErrorMsg('')
                  }
                }}
                placeholder="your@email.com"
                required
                disabled={state === 'loading'}
                aria-describedby={state === 'error' ? 'newsletter-error' : undefined}
                aria-invalid={state === 'error'}
                className="w-full bg-brand-black text-brand-cream font-body text-base px-5 py-4 placeholder-brand-tan/40 focus:outline-none focus:ring-2 focus:ring-brand-fire border-0 disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={state === 'loading'}
              className="bg-brand-fire text-brand-cream font-body font-semibold text-sm px-8 py-4 hover:bg-brand-black transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-brand-fire whitespace-nowrap"
              aria-label={state === 'loading' ? 'Subscribing...' : 'Subscribe to newsletter'}
            >
              {state === 'loading' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Joining...
                </span>
              ) : (
                "I'm in →"
              )}
            </button>
          </form>
        )}

        {state === 'error' && (
          <p
            id="newsletter-error"
            role="alert"
            aria-live="assertive"
            className="mt-3 font-body text-brand-fire text-sm"
          >
            {errorMsg}
          </p>
        )}

        {/* What to expect */}
        <div className="scroll-reveal mt-12 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { emoji: '📬', label: 'Weekly posts' },
            { emoji: '💰', label: 'Flip reveals' },
            { emoji: '🛒', label: 'Saving tips' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl mb-2" aria-hidden="true">{item.emoji}</div>
              <div className="font-mono-brand text-brand-charcoal text-xs tracking-wider uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
