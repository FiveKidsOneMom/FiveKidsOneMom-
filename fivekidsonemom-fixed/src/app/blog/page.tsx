import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Brutally honest parenting, savvy savings, and real mum life from Aypril — mum of five, reseller, and full-time worker. No sugar-coating, ever.',
  openGraph: {
    title: 'Blog | Five Kids One Mom',
    description:
      'Real stories, real savings, real mum life. No filters from a full-time working mum of five.',
    url: 'https://fivekidsonemom.com/blog',
  },
  alternates: {
    canonical: 'https://fivekidsonemom.com/blog',
  },
}

const allPosts = [
  {
    slug: 'i-lost-her-then-i-lost-myself',
    category: 'Real Life',
    title: "I Lost Her. Then I Lost Myself. I'm Still Looking.",
    excerpt: "Her name was Alison. She was my best friend — my sister in every way that mattered. I was pregnant when they told us she had cancer. She battled for two years. I was there for every single moment of it.",
    date: '2024-01-15',
    readTime: '10 min',
    comingSoon: false,
  },
  {
    slug: '',
    category: 'Reselling',
    title: 'How I Flipped £50 into £300 in One Weekend',
    excerpt: 'Charity shops, car boots, and one very lucky Vinted haul. The exact items, the exact prices, the exact effort. Nothing hidden.',
    date: '2024-01-08',
    readTime: '6 min',
    comingSoon: true,
  },
  {
    slug: '',
    category: 'Mental Health',
    title: "Saying No When You're Wired to Say Yes",
    excerpt: "I've spent my whole life being the reliable one. Here's what that actually costs you.",
    date: '2023-12-20',
    readTime: '5 min',
    comingSoon: true,
  },
  {
    slug: '',
    category: 'Savings',
    title: 'Premium School Uniform for Less Than Supermarket Price',
    excerpt: "Five kids means five lots of school uniforms. I've cracked it. M&S quality for Primark prices.",
    date: '2023-12-10',
    readTime: '4 min',
    comingSoon: true,
  },
  {
    slug: '',
    category: 'Real Life',
    title: 'What Working in SEN Taught Me About Myself',
    excerpt: "Spending every day with neurodivergent children made me realise something I'd never been told about myself.",
    date: '2023-11-28',
    readTime: '7 min',
    comingSoon: true,
  },
  {
    slug: '',
    category: 'Savings',
    title: 'Christmas for Five Kids Under £200',
    excerpt: 'The full breakdown. What I bought, where I bought it, and how I kept the magic alive without going into debt.',
    date: '2023-11-15',
    readTime: '6 min',
    comingSoon: true,
  },
]

const categoryColors: Record<string, string> = {
  'Real Life': 'bg-brand-fire text-brand-cream',
  'Reselling': 'bg-brand-black text-brand-cream',
  'Mental Health': 'bg-brand-charcoal text-brand-tan',
  'Savings': 'bg-brand-tan text-brand-black',
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-brand-black pt-28 pb-16 sm:pt-36 sm:pb-20" aria-label="Blog header">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block font-mono-brand text-brand-fire text-xs tracking-[0.2em] uppercase mb-4">
              The blog
            </span>
            <h1
              className="font-display font-black text-brand-cream leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              The Unfiltered Truth
            </h1>
            <p className="font-body text-brand-tan text-base sm:text-xl max-w-2xl leading-relaxed">
              Parenting, money, mental health, and reselling — all told exactly as it is.
              No sponsored smiles. No perfect houses. Just real life.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-brand-cream py-12 sm:py-16" aria-label="Blog posts">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post) => (
                <article key={post.title}>
                  {post.comingSoon ? (
                    <div className="blog-card h-full border border-brand-tan-light p-6 sm:p-8 opacity-60 cursor-default">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-mono-brand text-xs tracking-widest uppercase px-2 py-1 ${categoryColors[post.category] ?? 'bg-brand-tan text-brand-black'}`}>
                          {post.category}
                        </span>
                        <span className="font-mono-brand text-brand-charcoal/60 text-xs bg-brand-tan-light px-2 py-1">
                          Coming Soon
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-brand-black text-lg sm:text-xl leading-tight mb-3">
                        {post.title}
                      </h2>
                      <p className="font-body text-brand-charcoal text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <time dateTime={post.date} className="font-mono-brand text-brand-charcoal/50 text-xs">
                        {formatDate(post.date)}
                      </time>
                    </div>
                  ) : (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="blog-card block h-full border border-brand-tan-light p-6 sm:p-8 group focus-visible:outline-2 focus-visible:outline-brand-fire"
                      aria-label={`Read: ${post.title}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-mono-brand text-xs tracking-widest uppercase px-2 py-1 ${categoryColors[post.category] ?? 'bg-brand-tan text-brand-black'}`}>
                          {post.category}
                        </span>
                        <span className="font-mono-brand text-brand-charcoal/60 text-xs">
                          {post.readTime} read
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-brand-black text-lg sm:text-xl leading-tight mb-3 group-hover:text-brand-fire transition-colors duration-200">
                        {post.title}
                      </h2>
                      <p className="font-body text-brand-charcoal text-sm leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-tan-light">
                        <time dateTime={post.date} className="font-mono-brand text-brand-charcoal/50 text-xs">
                          {formatDate(post.date)}
                        </time>
                        <span className="font-body text-brand-fire text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                          Read →
                        </span>
                      </div>
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
