import Link from 'next/link'

const footerLinks = {
  Blog: [
    { href: '/blog', label: 'All Posts' },
    { href: '/blog?category=real-life', label: 'Real Life' },
    { href: '/blog?category=reselling', label: 'Reselling' },
    { href: '/blog?category=savings', label: 'Savings' },
    { href: '/blog?category=mental-health', label: 'Mental Health' },
  ],
  Reselling: [
    { href: '/reselling', label: 'The Flip Diary' },
    { href: '/reselling/guide', label: 'Beginners Guide' },
    { href: '/reselling/platforms', label: 'Best Platforms' },
    { href: '/reselling/sourcing', label: 'Where I Source' },
  ],
  Connect: [
    { href: 'https://instagram.com/fivekidsonemom', label: 'Instagram', external: true },
    { href: 'https://tiktok.com/@fivekidsonemom', label: 'TikTok', external: true },
    { href: 'https://youtube.com/@fivekidsonemom', label: 'YouTube', external: true },
    { href: '/about', label: 'About Aypril' },
    { href: '/contact', label: 'Work With Me' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-green-dark pt-16 sm:pt-20 pb-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Five Kids One Mom - Home">
              <div className="mb-4">
                <span className="font-display font-black text-brand-cream text-3xl leading-none block">
                  Five Kids
                </span>
                <span className="font-mono-brand text-brand-green-mid text-sm tracking-widest uppercase">
                  One Mom
                </span>
              </div>
            </Link>
            <p className="font-body text-brand-tan text-sm leading-relaxed max-w-xs mb-6">
              Real talk about parenting, money, and building a life on your own terms. 
              No filter. No fluff. All honesty.
            </p>

            {/* Affiliate disclaimer */}
            <div className="p-4 border border-brand-green-dark">
              <p className="font-mono-brand text-brand-tan/50 text-xs leading-relaxed">
                This site may contain affiliate links. If you buy through them, 
                I may earn a small commission at no extra cost to you. I only 
                recommend things I actually use.
              </p>
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h3 className="font-mono-brand text-brand-green-mid text-xs tracking-[0.2em] uppercase mb-4">
                  {section}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        {...('external' in link && link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="font-body text-brand-tan text-sm hover:text-brand-cream transition-colors duration-200 focus-visible:outline-brand-green-mid focus-visible:outline-1"
                      >
                        {link.label}
                        {'external' in link && link.external && (
                          <span className="sr-only"> (opens in new tab)</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-green-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono-brand text-brand-tan/50 text-xs text-center sm:text-left">
            © {currentYear} Five Kids One Mom. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: '/privacy', label: 'Privacy' },
              { href: '/disclaimer', label: 'Disclaimer' },
              { href: '/cookies', label: 'Cookies' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono-brand text-brand-tan/50 text-xs hover:text-brand-tan transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
