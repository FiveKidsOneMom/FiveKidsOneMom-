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
    slug: 'the-day-i-found-a-tracker-in-my-car',
    category: 'Real Life',
    title: 'The Day I Found a Tracker in My Car',
    excerpt: "I thought I was being paranoid. I wasn't. Here's what happened, what I did, and what every woman needs to know about coercive control.",
    date: '2024-01-15',
    readTime: '8 min',
  },
  {
    slug: 'how-i-flipped-50-quid-into-300-in-one-weekend',
    category: 'Reselling',
    title: 'How I Flipped £50 into £300 in One Weekend',
    excerpt: 'Charity shops, car boots, and one very lucky Vinted haul. The exact items, the exact prices, the exact effort.',
    date: '2024-01-08',
    readTime: '6 min',
  },
  {
    slug: 'saying-no-when-youre-wired-to-say-yes',
    category: 'Mental Health',
    title: "Saying No When You're Wired to Say Yes",
    excerpt: "I've spent my whole life being the reliable one. Here's what that actually costs you.",
    date: '2023-12-20',
    readTime: '5 min',
  },
  {
    slug: 'premium-school-uniform-for-less-than-supermarket-price',
    category: 'Savings',
    title: 'Premium School Uniform for Less Than Supermarket Price',
    excerpt: "Five kids means five lots of school uniforms. I've cracked it. M&S quality for Primark prices.",
    date: '2023-12-10',
    readTime: '4 min',
  },
  {
    slug: 'what-working-in-sen-taught-me-about-myself',
    category: 'Real Life',
    title: 'What Working in SEN Taught Me About Myself',
    excerpt: "Spending every day with neurodivergent children made me realise something I'd never been told about myself.",
    date: '2023-11-28',
    readTime: '7 min',
  },
  {
    slug: 'christmas-for-five-kids-under-200',
    category: 'Savings',
    title: 'Christmas for Five Kids Under £200',
    excerpt: 'The full breakdown. What I bought, where I bought it, and how I kept the magic alive without going into debt.',
    date: '2023-11-15',
    readTime: '6 min',
  },
]

const categoryColors: Record<string, string> = {
  'Real Life': 'bg-brand-green-mid text-brand-cream',
  'Reselling': 'bg-brand-green-dark text-brand-cream',
  'Mental Health': 'bg-brand-green-dark text-brand-tan',
  'Savings': 'bg-brand-tan text-brand-green-dark',
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const categories = ['All', ...Array.from(new Set(allPosts.map((p) => p.category)))]

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-brand-green-dark pt-28 pb-16 sm:pt-36 sm:pb-20" aria-label="Blog header">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block font-mono-brand text-brand-green-mid text-xs tracking-[0.2em] uppercase mb-4">
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

        {/* Category filter — static, JS progressive enhancement optional */}
        <section className="bg-brand-cream border-b border-brand-tan-light" aria-label="Filter posts by category">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 sm:gap-4 overflow-x-auto py-4 scrollbar-none" role="list" aria-label="Categories">
              {categories.map((cat) => (
                <span
                  key={cat}
                  role="listitem"
                  className="font-mono-brand text-xs tracking-widest uppercase px-4 py-2 whitespace-nowrap cursor-pointer border border-brand-tan-light hover:border-brand-green-mid hover:text-brand-green-mid transition-colors duration-200 first:bg-brand-green-dark first:text-brand-cream first:border-brand-green-dark"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-brand-cream py-12 sm:py-16" aria-label="Blog posts">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-card block h-full border border-brand-tan-light p-6 sm:p-8 group focus-visible:outline-2 focus-visible:outline-brand-green-mid"
                    aria-label={`Read: ${post.title}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono-brand text-xs tracking-widest uppercase px-2 py-1 ${categoryColors[post.category] ?? 'bg-brand-tan text-brand-green-dark'}`}>
                        {post.category}
                      </span>
                      <span className="font-mono-brand text-brand-green-dark/60 text-xs">
                        {post.readTime} read
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-brand-green-dark text-lg sm:text-xl leading-tight mb-3 group-hover:text-brand-green-mid transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="font-body text-brand-green-dark text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-tan-light">
                      <time dateTime={post.date} className="font-mono-brand text-brand-green-dark/50 text-xs">
                        {formatDate(post.date)}
                      </time>
                      <span className="font-body text-brand-green-mid text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                        Read →
                      </span>
                    </div>
                  </Link>
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
