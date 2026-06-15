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
  comingSoon?: boolean
}

const posts: BlogPost[] = [
  {
    slug: 'i-lost-her-then-i-lost-myself',
    category: 'Real Life',
    title: "I Lost Her. Then I Lost Myself. I'm Still Looking.",
    excerpt:
      'Her name was Alison. She was my best friend — my sister in every way that mattered. I was pregnant when they told us she had cancer. She battled for two years. I was there for every single moment of it.',
    date: '2024-01-15',
    readTime: '10 min',
    featured: true,
  },
  {
    slug: '',
    category: 'Reselling',
    title: 'How I Flipped £50 into £300 in One Weekend',
    excerpt:
      'Charity shops, car boots, and one very lucky Vinted haul. The exact items, the exact prices, the exact effort. Nothing hidden.',
    date: '2024-01-08',
    readTime: '6 min',
    featured: true,
    comingSoon: true,
  },
  {
    slug: '',
    category: 'Mental Health',
    title: "Saying No When You're Wired to Say Yes",
    excerpt:
      "I've spent my whole life being the reliable one. The helpful one. The one who never causes a problem. Here's what that actually costs you.",
    date: '2023-12-20',
    readTime: '5 min',
    comingSoon: true,
  },
  {
    slug: '',
    category: 'Savings',
    title: 'Premium School Uniform for Less Than Supermarket Price',
    excerpt:
      "Five kids means five lots of school uniforms. I've cracked it. M&S quality for Primark prices — every time.",
    date: '2023-12-10',
    readTime: '4 min',
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
          >
            All posts →
          </Link>
        </div>

        {/* Featured posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((post) => (
            <article key={post.title} className="scroll-reveal">
              {post.comingSoon ? (
                <div className="blog-card block bg-brand-black p-8 sm:p-10 h-full opacity-60 cursor-default">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono-brand text-xs tracking-widest uppercase px-2 py-1 ${categoryColors[post.category] ?? 'bg-brand-tan text-brand-black'}`}>
                      {post.category}
                    </span>
                    <span className="font-mono-brand text-brand-tan text-xs bg-brand-charcoal px-2 py-1">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-brand-cream text-xl sm:text-2xl leading-tight mb-4">
                    {post.title}
                  </h3>
                  <p className="font-body text-brand-tan text-sm sm:text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-card block bg-brand-black p-8 sm:p-10 h-full group focus-visible:outline-2 focus-visible:outline-brand-fire"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono-brand text-xs tracking-widest uppercase px-2 py-1 ${categoryColors[post.category] ?? 'bg-brand-tan text-brand-black'}`}>
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
                    <time dateTime={post.date} className="font-mono-brand text-brand-tan/60 text-xs">
                      {formatDate(post.date)}
                    </time>
                    <span className="font-body text-brand-fire text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      Read →
                    </span>
                  </div>
                </Link>
              )}
            </article>
          ))}
        </div>

        {/* Regular posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {regular.map((post) => (
            <article key={post.title} className="scroll-reveal">
              <div className="blog-card border border-brand-tan-light p-6 h-full opacity-60 cursor-default">
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono-brand text-xs tracking-widest uppercase px-2 py-1 ${categoryColors[post.category] ?? 'bg-brand-tan text-brand-black'}`}>
                    {post.category}
                  </span>
                  <span className="font-mono-brand text-brand-charcoal/60 text-xs bg-brand-tan-light px-2 py-1">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-display font-bold text-brand-black text-lg leading-tight mb-3">
                  {post.title}
                </h3>
                <p className="font-body text-brand-charcoal text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
