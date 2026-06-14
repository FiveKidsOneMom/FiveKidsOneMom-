import Nav from './components/Nav'
import Hero from './components/Hero'
import AboutStrip from './components/AboutStrip'
import BlogPreview from './components/BlogPreview'
import ResellingSection from './components/ResellingSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-fire focus:text-brand-cream focus:px-4 focus:py-2 focus:font-body focus:text-sm"
        >
          Skip to main content
        </a>

        <Hero />
        <AboutStrip />
        <BlogPreview />
        <ResellingSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
