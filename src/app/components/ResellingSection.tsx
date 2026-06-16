'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface FlipItem {
  id: number
  item: string
  platform: string
  bought: number
  sold: number
  category: string
  timeToSell: string
}

const flips: FlipItem[] = [
  { id: 1, item: 'Next Coat — Girls Age 10', platform: 'Vinted', bought: 1, sold: 22, category: 'Kids Clothing', timeToSell: '4 hours' },
  { id: 2, item: 'M&S Cashmere Jumper', platform: 'eBay', bought: 2, sold: 28, category: 'Womens', timeToSell: '2 days' },
  { id: 3, item: 'LEGO City Set (Complete)', platform: 'Facebook', bought: 3, sold: 32, category: 'Toys', timeToSell: '1 hour' },
  { id: 4, item: 'Nike Air Max (Size 5)', platform: 'Depop', bought: 2, sold: 19, category: 'Footwear', timeToSell: '6 hours' },
  { id: 5, item: 'Barbour Wax Jacket', platform: 'eBay', bought: 3, sold: 31, category: 'Outerwear', timeToSell: '3 days' },
  { id: 6, item: 'John Lewis Bedding Set', platform: 'Vinted', bought: 1, sold: 14, category: 'Homeware', timeToSell: '12 hours' },
]

function FlipCard({ flip }: { flip: FlipItem }) {
  const [revealed, setRevealed] = useState(false)
  const profit = flip.sold - flip.bought
  const multiplier = Math.round(flip.sold / flip.bought)

  return (
    <div
      className="bg-brand-cream border border-brand-tan-light overflow-hidden group"
      role="article"
      aria-label={`${flip.item}: bought for £${flip.bought}, sold for £${flip.sold}`}
    >
      {/* Category bar */}
      <div className="bg-brand-green-dark px-4 py-2 flex items-center justify-between">
        <span className="font-mono-brand text-brand-tan text-xs tracking-wider uppercase">
          {flip.category}
        </span>
        <span className="font-mono-brand text-brand-green-mid text-xs">
          via {flip.platform}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-brand-green-dark text-base leading-snug mb-4">
          {flip.item}
        </h3>

        {/* Price reveal */}
        <div className="flex items-center gap-3 mb-4">
          {/* Bought */}
          <div className="flex-1 text-center bg-brand-tan-light p-3">
            <div className="font-mono-brand text-brand-green-dark text-xs tracking-wider uppercase mb-1">
              Paid
            </div>
            <div className="font-display font-black text-brand-green-dark text-2xl">
              £{flip.bought}
            </div>
          </div>

          {/* Arrow */}
          <div aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="#2D5A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Sold — tap to reveal */}
          <button
            onClick={() => setRevealed(true)}
            className={`flex-1 text-center p-3 transition-all duration-500 focus-visible:outline-2 focus-visible:outline-brand-green-mid ${
              revealed
                ? 'bg-brand-green-mid'
                : 'bg-brand-green-dark cursor-pointer hover:bg-brand-green-dark'
            }`}
            aria-label={revealed ? `Sold for £${flip.sold}` : 'Tap to reveal sale price'}
          >
            <div className="font-mono-brand text-brand-cream/70 text-xs tracking-wider uppercase mb-1">
              Sold
            </div>
            {revealed ? (
              <div className="font-display font-black text-brand-cream text-2xl">
                £{flip.sold}
              </div>
            ) : (
              <div className="font-body text-brand-tan text-xs">
                Tap to reveal
              </div>
            )}
          </button>
        </div>

        {/* Profit line */}
        {revealed && (
          <div className="flex items-center justify-between pt-3 border-t border-brand-tan-light">
            <span className="font-mono-brand text-brand-green-dark/70 text-xs tracking-wider uppercase">
              Profit
            </span>
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-brand-green-mid text-xl">
                +£{profit}
              </span>
              <span className="font-mono-brand text-brand-green-dark/60 text-xs bg-brand-tan-light px-2 py-1">
                {multiplier}×
              </span>
            </div>
          </div>
        )}

        {/* Time to sell */}
        <div className="mt-3 flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5" stroke="#C9B99A" strokeWidth="1.2"/>
            <path d="M6 3.5V6l2 1.5" stroke="#C9B99A" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span className="font-mono-brand text-brand-tan text-xs">
            Sold in {flip.timeToSell}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ResellingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const totalBought = flips.reduce((s, f) => s + f.bought, 0)
  const totalSold = flips.reduce((s, f) => s + f.sold, 0)

  return (
    <section
      ref={sectionRef}
      id="reselling"
      className="bg-brand-green-dark py-20 sm:py-28 relative overflow-hidden"
      aria-label="Reselling flips"
    >
      {/* Background fire glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, #2D5A2D, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="scroll-reveal block font-mono-brand text-brand-green-mid text-xs tracking-[0.2em] uppercase mb-3">
              The flip diary
            </span>
            <h2
              className="scroll-reveal font-display font-black text-brand-cream leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Real flips.{' '}
              <span className="text-brand-green-mid italic">Real numbers.</span>
            </h2>
          </div>
          <Link
            href="/reselling"
            className="scroll-reveal font-body text-sm font-semibold text-brand-green-mid hover:text-brand-cream underline underline-offset-4 transition-colors duration-200 self-start sm:self-auto"
          >
            All flips →
          </Link>
        </div>

        {/* Summary bar */}
        <div className="scroll-reveal grid grid-cols-3 gap-4 mb-10 p-5 sm:p-8 bg-brand-green-dark">
          {[
            { label: 'Total spent', value: `£${totalBought}`, sub: 'on these 6 items' },
            { label: 'Total earned', value: `£${totalSold}`, sub: 'from selling' },
            { label: 'Profit', value: `£${totalSold - totalBought}`, sub: 'pure margin', highlight: true },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-brand text-brand-tan/70 text-xs tracking-wider uppercase mb-1">
                {stat.label}
              </div>
              <div className={`font-display font-black text-xl sm:text-3xl leading-none mb-1 ${stat.highlight ? 'text-brand-green-mid' : 'text-brand-cream'}`}>
                {stat.value}
              </div>
              <div className="font-mono-brand text-brand-tan/50 text-xs hidden sm:block">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Flip cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flips.map((flip) => (
            <div key={flip.id} className="scroll-reveal">
              <FlipCard flip={flip} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-reveal mt-12 text-center">
          <p className="font-body text-brand-tan mb-6 max-w-md mx-auto">
            Want to learn how I source, list, and sell? I&apos;ll break down every step — 
            platforms, photography, pricing, and which charity shops are worth your time.
          </p>
          <Link
            href="/reselling"
            className="inline-flex items-center gap-2 bg-brand-green-mid text-brand-cream font-body font-semibold text-sm px-8 py-4 hover:bg-brand-cream hover:text-brand-green-mid transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand-cream"
          >
            The Full Reselling Guide
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
