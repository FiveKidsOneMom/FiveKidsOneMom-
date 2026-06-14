'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

interface BlogPost {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    slug: 'the-day-i-found-a-tracker-in-my-car',
    category: 'Real Life',
    title: 'The Day I Found a Tracker in My Car',
    excerpt:
      'I thought I was being paranoid. I wasn\'t. Here\'s what happened, what I did, and what every woman needs to know about coercive control.',
    date: '2024-01-15',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'how-i-flipped-50-quid-into-300-in-one-weekend',
    category: 'Reselling',
    title: 'How I Flipped £50 into £300 in One Weekend',
    excerpt:
      'Charity shops, car boots, and one very lucky Vinted haul. The exact items, the exact prices, the exact effort. Nothing hidden.',
    date: '2024-01-08',
    readTime: '6 min',
    featured: true,
  },
  {
    slug: 'saying-no-when-youre-wired-to-say-yes',
    category: 'Mental Health',
    title: 'Saying No When You\'re Wired to Say Yes',
    excerpt:
      'I\'ve spent my whole life being the reliable one. The helpful one. The one who never causes a problem. Here\'s what that actually costs you.',
    date: '2023-12-20',
    readTime: '5 min',
  },
  {
    slug: 'premium-school-uniform-for-less-than-supermarket-price',
    category: 'Savings',
    title: 'Premium School Uniform for Less Than Supermarket Price',
    excerpt:
      'Five kids means five lots of school uniforms. I\'ve cracked it. M&S, Next, and John Lewis quality for Primark prices — every time.',
    date: '2023-12-10',
    readTime: '4 min',
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

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const featured = posts.filter((p) => p.featured)
  const regular = posts.filter((p) => !p.featured)

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="bg-brand-cream py-20 sm:py-28"
      aria-label="Latest blog posts"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="scroll-reveal block font-mono-brand text-brand-fire text-xs tracking-[0.2em] uppercase mb-3">
              From the blog
            </span>
            <h2
              className="scroll-reveal font-display font-black text-brand-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              The{' '}
              <span className="fire-underline">unfiltered</span>{' '}
              truth
            </h2>
          </div>
          <Link
            href="/blog"
            className="scroll-reveal font-body text-sm font-semibold text-brand-fire hover:text-brand-black underline underline-offset-4 transition-colors duration-200 self-start sm:self-auto"
            aria-label="View all blog posts"
          >
            All posts →
          </Link>
        </div>

        {/* Featured posts — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((post) => (
            <article key={post.slug} className="scroll-reveal">
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card block bg-brand-black p-8 sm:p-10 h-full group focus-visible:outline-2 focus-visible:outline-brand-fire"
                aria-label={`Read: ${post.title}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`font-mono-brand text-xs tracking-widest uppercase px-2 py-1 ${categoryColors[post.category] ?? 'bg-brand-tan text-brand-black'}`}
                  >
                    {post.category}
                  </span>
                  <span className="font-mono-brand text-brand-tan text-xs">
                    {post.readTime} read
                  </span>
                </div>

                <h3 className="font-display font-bold text-brand-cream text-xl sm:text-2xl leading-tight mb-4 group-hover:text-brand-fire transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="font-body text-brand-tan text-sm sm:text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <time
                    dateTime={post.date}
                    className="font-mono-brand text-brand-tan/60 text-xs"
                  >
                    {formatDate(post.date)}
                  </time>
                  <span
                    className="font-body text-brand-fire text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    Read →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Regular posts — smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {regular.map((post) => (
            <article key={post.slug} className="scroll-reveal">
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card block border border-brand-tan-light p-6 h-full group focus-visible:outline-2 focus-visible:outline-brand-fire"
                aria-label={`Read: ${post.title}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono-brand text-xs tracking-widest uppercase px-2 py-1 ${categoryColors[post.category] ?? 'bg-brand-tan text-brand-black'}`}
                  >
                    {post.category}
                  </span>
                  <span className="font-mono-brand text-brand-charcoal/60 text-xs">
                    {post.readTime} read
                  </span>
                </div>

                <h3 className="font-display font-bold text-brand-black text-lg leading-tight mb-3 group-hover:text-brand-fire transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="font-body text-brand-charcoal text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <time
                  dateTime={post.date}
                  className="font-mono-brand text-brand-charcoal/50 text-xs"
                >
                  {formatDate(post.date)}
                </time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
