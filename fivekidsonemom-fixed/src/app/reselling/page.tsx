import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Reselling',
  description:
    'Real reselling flips from Aypril — buying at £1-3 and selling for £12-32. Exact items, platforms, and profits. Learn to flip on Vinted, eBay, Depop, and Facebook Marketplace.',
  keywords: [
    'reselling uk',
    'thrifting uk',
    'vinted tips',
    'ebay flipping',
    'depop selling',
    'charity shop flips',
    'how to resell',
    'reselling for beginners',
    'flip items for profit uk',
  ],
  openGraph: {
    title: 'Reselling | Five Kids One Mom',
    description: 'Real flips. Real numbers. How I buy at £1-3 and sell for £12-32.',
    url: 'https://fivekidsonemom.com/reselling',
  },
  alternates: {
    canonical: 'https://fivekidsonemom.com/reselling',
  },
}

const platforms = [
  {
    name: 'Vinted',
    emoji: '👗',
    bestFor: 'Kids & womenswear',
    fees: 'Free to sell — buyer pays platform fee',
    myRating: '⭐⭐⭐⭐⭐',
    tip: 'Fast sales, great for kids clothing. Bundle feature is your best friend.',
  },
  {
    name: 'eBay',
    emoji: '📦',
    bestFor: 'Branded items, toys, collectables',
    fees: '~12.8% + listing fees (250 free/month)',
    myRating: '⭐⭐⭐⭐',
    tip: 'Best for premium brands and toys. Use "sold listings" to price correctly.',
  },
  {
    name: 'Facebook Marketplace',
    emoji: '📍',
    bestFor: 'Local collection, bulky items',
    fees: 'Free for local. 5% for shipping',
    myRating: '⭐⭐⭐⭐',
    tip: 'LEGO, furniture, large toys sell fast locally. No fees, cash in hand.',
  },
  {
    name: 'Depop',
    emoji: '✨',
    bestFor: 'Streetwear, vintage, trainers',
    fees: '10% seller fee',
    myRating: '⭐⭐⭐',
    tip: 'Younger audience, higher prices for the right brands. Nike, Adidas, vintage.',
  },
]

const sourcingTips = [
  { title: 'Charity shops', body: "Go midweek, first thing. Best stock hits the floor Tuesday-Thursday. Avoid Saturday — it's been picked over." },
  { title: 'Car boot sales', body: "Summer only. Get there early (before official opening if you can). Bring cash. Bulk buy from sellers packing up." },
  { title: 'Facebook groups', body: "'Free stuff' and 'selling' local groups. Set notifications. Some of my best flips cost me nothing." },
  { title: 'Supermarket clearance', body: "Asda and Tesco clearance rails are slept on. Next-season kids clothing for 50p-£1. Straight on Vinted at full price." },
  { title: 'Skip diving (yes, really)', body: "Skips outside houses. LEGO sets, books, kitchen equipment. Ask permission. You'd be amazed what people throw away." },
]

export default function ResellingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-brand-black pt-28 pb-16 sm:pt-36 sm:pb-20 relative overflow-hidden" aria-label="Reselling page header">
          <div
            className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top right, #E8440A, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block font-mono-brand text-brand-fire text-xs tracking-[0.2em] uppercase mb-4">
              The flip diary
            </span>
            <h1
              className="font-display font-black text-brand-cream leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              £1 in.{' '}
              <span className="text-brand-fire">£30 out.</span>
            </h1>
            <p className="font-body text-brand-tan text-base sm:text-xl max-w-2xl leading-relaxed">
              I didn&apos;t start reselling with capital, a business plan, or a course. 
              I started with £3 and a Vinted account. Here&apos;s everything I know — 
              the platforms, the sourcing spots, and the exact numbers.
            </p>
          </div>
        </section>

        {/* Quick stats */}
        <section className="bg-brand-fire py-8" aria-label="Reselling statistics">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { num: '£1-3', label: 'Average buy price' },
                { num: '£12-32', label: 'Average sell price' },
                { num: '10×', label: 'Average return' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-black text-brand-cream text-2xl sm:text-4xl leading-none mb-1">
                    {s.num}
                  </div>
                  <div className="font-mono-brand text-brand-cream/70 text-xs tracking-wider uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform breakdown */}
        <section className="bg-brand-cream py-16 sm:py-24" aria-label="Reselling platforms">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-black text-brand-black mb-3"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Which platform should you use?
            </h2>
            <p className="font-body text-brand-charcoal text-base mb-10 max-w-xl">
              I use all four. Here&apos;s my honest breakdown — no affiliate bias.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platforms.map((platform) => (
                <article
                  key={platform.name}
                  className="bg-brand-black p-6 sm:p-8"
                  aria-label={`${platform.name} platform review`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl" aria-hidden="true">{platform.emoji}</span>
                    <div>
                      <h3 className="font-display font-bold text-brand-cream text-xl">
                        {platform.name}
                      </h3>
                      <div className="font-mono-brand text-brand-fire text-xs" aria-label={`Rating: ${platform.myRating}`}>
                        {platform.myRating}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-start gap-4">
                      <span className="font-mono-brand text-brand-tan/60 text-xs tracking-wider uppercase shrink-0">Best for</span>
                      <span className="font-body text-brand-cream text-sm text-right">{platform.bestFor}</span>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <span className="font-mono-brand text-brand-tan/60 text-xs tracking-wider uppercase shrink-0">Fees</span>
                      <span className="font-body text-brand-cream text-sm text-right">{platform.fees}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-brand-charcoal">
                    <p className="font-body text-brand-tan text-sm leading-relaxed">
                      <strong className="text-brand-fire">My tip: </strong>
                      {platform.tip}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sourcing tips */}
        <section className="bg-brand-black py-16 sm:py-24" aria-label="Sourcing tips">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-black text-brand-cream mb-3"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              Where I find the stock
            </h2>
            <p className="font-body text-brand-tan text-base mb-10 max-w-xl">
              No secret warehouses. No minimum orders. Just knowing where to look.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {sourcingTips.map((tip, i) => (
                <div
                  key={tip.title}
                  className="flex gap-6 p-6 bg-brand-charcoal group hover:bg-brand-fire/10 transition-colors duration-200"
                >
                  <div className="font-mono-brand text-brand-fire text-xs shrink-0 mt-1">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-cream text-lg mb-2">
                      {tip.title}
                    </h3>
                    <p className="font-body text-brand-tan text-sm leading-relaxed">
                      {tip.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
