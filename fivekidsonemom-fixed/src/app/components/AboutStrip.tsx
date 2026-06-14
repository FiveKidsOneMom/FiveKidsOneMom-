'use client'

import { useEffect, useRef } from 'react'

export default function AboutStrip() {
  const sectionRef = useRef<HTMLElement>(null)

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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-brand-cream py-20 sm:py-28 relative"
      aria-label="About Aypril"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <div className="scroll-reveal mb-4">
              <span className="font-mono-brand text-brand-fire text-xs tracking-[0.2em] uppercase">
                The woman behind it
              </span>
            </div>

            <h2 className="scroll-reveal font-display font-black text-brand-black leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              I didn&apos;t choose the{' '}
              <span className="italic text-brand-fire">easy</span>{' '}
              story.
            </h2>

            <div className="scroll-reveal space-y-4 font-body text-brand-charcoal text-base sm:text-lg leading-relaxed">
              <p>
                I left home at 18, raised my five kids mostly alone, left a controlling relationship,
                and still show up full-time at work every single day. No one handed me anything.
              </p>
              <p>
                I started reselling to build something of my own. Buying at £1-3, flipping 
                for £12-32. It works — and I&apos;m going to show you exactly how.
              </p>
              <p className="font-semibold text-brand-black">
                This blog is for every mum who&apos;s tired of pretending everything&apos;s fine.
              </p>
            </div>
          </div>

          {/* Right — truth cards */}
          <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                emoji: '🔥',
                title: 'No Filter',
                body: 'I show the mess, the wins, and the days I nearly gave up. All of it.',
              },
              {
                emoji: '💰',
                title: 'Real Numbers',
                body: 'Exact buy prices, sell prices, platforms. No vague "passive income" nonsense.',
              },
              {
                emoji: '👶',
                title: 'Mum Life',
                body: 'Five kids, one income, one house to run. I talk about what actually helps.',
              },
              {
                emoji: '💪',
                title: 'Building Up',
                body: "I'm in the middle of this journey, not at the end. You'll grow with me.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-brand-black p-6 group hover:bg-brand-charcoal transition-colors duration-200"
              >
                <div className="text-2xl mb-3" aria-hidden="true">{card.emoji}</div>
                <h3 className="font-display font-bold text-brand-cream text-lg mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-brand-tan text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
