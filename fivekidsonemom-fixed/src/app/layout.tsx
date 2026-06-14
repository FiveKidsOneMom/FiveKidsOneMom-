import type { Metadata } from 'next'
import { Playfair_Display, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fivekidsonemom.com'),
  title: {
    default: 'Five Kids One Mom | Brutally Honest Parenting & Savvy Reselling',
    template: '%s | Five Kids One Mom',
  },
  description:
    'Real talk from a full-time working mum of five. No filters, no sugar-coating — just honest parenting, savvy savings, and how I flip premium finds for a fraction of the price.',
  keywords: [
    'mum of five',
    'single mom blog',
    'savvy savings',
    'budget parenting',
    'reselling uk',
    'thrifting uk',
    'honest parenting blog',
    'working mum',
    'SEN parenting',
    'vinted reselling',
    'depop flipping',
    'ebay reselling uk',
    'premium finds cheap',
    'five kids one mom',
  ],
  authors: [{ name: 'Aypril', url: 'https://fivekidsonemom.com' }],
  creator: 'Aypril',
  publisher: 'Five Kids One Mom',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://fivekidsonemom.com',
    siteName: 'Five Kids One Mom',
    title: 'Five Kids One Mom | Brutally Honest Parenting & Savvy Reselling',
    description:
      'Real talk from a full-time working mum of five. No filters, no sugar-coating — honest parenting, savvy savings, and premium finds for cheap.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Five Kids One Mom — Brutally Honest Parenting & Savvy Reselling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Five Kids One Mom',
    description:
      'No filters. No sugar-coating. Real mum life, savvy savings & reselling secrets.',
    images: ['/og-image.jpg'],
    creator: '@fivekidsonemom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://fivekidsonemom.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D0D0D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: 'Five Kids One Mom',
              description:
                'Brutally honest parenting blog and reselling guide from a full-time working mum of five.',
              url: 'https://fivekidsonemom.com',
              author: {
                '@type': 'Person',
                name: 'Aypril',
                url: 'https://fivekidsonemom.com/about',
              },
              inLanguage: 'en-GB',
            }),
          }}
        />
      </head>
      <body className="bg-brand-cream text-brand-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  )
}
