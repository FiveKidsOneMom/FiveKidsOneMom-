import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'I Lost Her. Then I Lost Myself. I\'m Still Looking.',
  description: 'Aypril shares the story of losing her best friend Alison to cancer, and the moment her marriage broke beyond repair. Raw, honest, heartbreaking.',
  openGraph: {
    title: 'I Lost Her. Then I Lost Myself. I\'m Still Looking.',
    description: 'Her name was Alison. And she was my best friend. Not best friend in the way people throw that word around. Best friend in the way that means sister.',
    url: 'https://fivekidsonemom.com/blog/i-lost-her-then-i-lost-myself',
  },
  alternates: {
    canonical: 'https://fivekidsonemom.com/blog/i-lost-her-then-i-lost-myself',
  },
}

export default function AlisonsPost() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-brand-black pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono-brand text-brand-tan text-xs tracking-widest uppercase mb-8 hover:text-brand-cream transition-colors duration-200"
            >
              ← Back to Blog
            </Link>
            <div className="mb-6">
              <span className="font-mono-brand text-xs tracking-widest uppercase px-2 py-1 bg-brand-fire text-brand-cream">
                Real Life
              </span>
            </div>
            <h1
              className="font-display font-black text-brand-cream leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              I Lost Her. Then I Lost Myself. I&apos;m Still Looking.
            </h1>
            <div className="flex items-center gap-4">
              <span className="font-mono-brand text-brand-tan text-xs">By Aypril Conway</span>
              <span className="font-mono-brand text-brand-tan/50 text-xs">·</span>
              <time className="font-mono-brand text-brand-tan text-xs">2024</time>
              <span className="font-mono-brand text-brand-tan/50 text-xs">·</span>
              <span className="font-mono-brand text-brand-tan text-xs">10 min read</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="bg-brand-cream py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose-content font-body text-brand-charcoal text-base sm:text-lg leading-relaxed space-y-6">

              <p className="text-xl sm:text-2xl font-display font-bold text-brand-black leading-snug">
                Her name was Alison. And she was my best friend.
              </p>

              <p>
                Not best friend in the way people throw that word around. Best friend in the way that means <em>sister</em>. Means <em>home</em>. Means the person who knew every version of you and loved all of them anyway.
              </p>

              <p>
                I need you to understand that before I tell you the rest. Because the rest is hard to read. And it was harder to live.
              </p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                I was pregnant when they told us.
              </h2>

              <p>
                I found out Alison had cancer while I was carrying my daughter. I want you to sit with that for a second. New life growing inside me, and the person I loved most in the world was being taken apart from the inside.
              </p>

              <p>
                She battled for two years. Two years of watching someone who was full of life — funny, loud, <em>so</em> alive — disappear piece by piece.
              </p>

              <p>I watched her lose her hair.</p>

              <p>I watched her lose weight until I could feel every bone when I held her.</p>

              <p>
                I listened to her cry in her sleep. I listened to her scream in pain — real, raw, animal pain that no person should ever have to make and no person who loves them should ever have to hear.
              </p>

              <p>
                I was sleeping on a camp bed in the young person&apos;s unit. Heavily pregnant. Getting up in the night to her. Picking up her small, frail body — this woman who used to dance, who used to throw her head back laughing — and lowering her into a hot bath because the heat was the only thing that gave her any relief from the pain she was in.
              </p>

              <p>I did that. I was there. Every time.</p>

              <p>
                And when I came home — when I drove back to my family, to my baby, to the man who was supposed to be my partner — I was told I was a bad mother for leaving.
              </p>

              <p>
                For leaving my baby daughter to go and be at my best friend&apos;s side.
              </p>

              <p className="font-bold text-brand-black">A bad mother.</p>

              <p>
                For choosing to be present at the slow, devastating end of someone I loved like a sister. For not abandoning her in that hospital room. For showing up, every single time, even when it destroyed me.
              </p>

              <p>He called me a bad mother for that.</p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                She passed at 5:26 in the morning.
              </h2>

              <p>
                Her mum sent me a text. <em>It&apos;s time.</em>
              </p>

              <p>
                I drove to the hospital. I was there. I held the space with her. And then she was gone.
              </p>

              <p>I saw her after she took her last breath.</p>

              <p>
                That image will stay with me for ever. I will carry it every single day for the rest of my life. There are no words for what it does to you — seeing the person you love most in the world, still, silent, no longer in pain but no longer <em>there.</em> No longer anywhere.
              </p>

              <p>
                I got in my car and drove home. Absolutely hysterical. Falling apart at the wheel. Because what else do you do? Where do you go when the person who was your person is just... gone?
              </p>

              <p>I came through the door.</p>

              <p>
                And he looked at me — this man, my husband, the person who was supposed to love me — and he said:
              </p>

              <blockquote className="border-l-4 border-brand-fire pl-6 my-8 italic text-brand-black text-xl font-display">
                &ldquo;It&apos;s life. People die. It was expected. We need to go and get balloons for our daughter&apos;s first birthday tomorrow.&rdquo;
              </blockquote>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                Something in me broke that morning. And it never came back.
              </h2>

              <p>
                Not the grief. Grief I could have survived. Grief is natural. Grief means you loved someone real.
              </p>

              <p>
                What broke was my belief that I was someone worth showing up for.
              </p>

              <p>
                Because if the person who vowed to love me couldn&apos;t find one single moment of softness for me on the worst morning of my life — then what did that say about me? What did I deserve?
              </p>

              <p>
                I know now that it said everything about him and nothing about me. But I didn&apos;t know that then. Then, I just went quiet inside. A part of Aypril left with Alison that morning. And I have never fully got her back.
              </p>

              <p>
                We had two more children after that. I don&apos;t know why. Grief does strange things. Loneliness does stranger things. I kept trying to build something with someone who didn&apos;t know how to love me, because I had forgotten what it felt like to expect more.
              </p>

              <p>
                Every argument we ever had after that day came back to that morning. That sentence. That look on his face. The complete and total absence of him when I needed someone the most.
              </p>

              <p>
                I never forgave him. Not really. I tried. I performed forgiveness. But it lived in me like a stone.
              </p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                And then there was everything else.
              </h2>

              <p>
                The control. The coercion. The constant questioning. The way he made me feel small and watched and never quite free.
              </p>

              <p>The tracker he put in my car.</p>

              <p>
                Finding that — knowing that even my physical movements weren&apos;t mine — was the moment something shifted. Not broke. <em>Shifted.</em> Like a door finally opening after years of pressing against it.
              </p>

              <p>I left.</p>

              <p>
                And I want to tell you it felt like freedom immediately. It didn&apos;t. It felt terrifying. It felt like standing in a field with no map. Five children. One income. The grief of Alison still living in my chest like a bruise that never fully healed. The weight of years of being made to feel like I was too much and never enough at the same time.
              </p>

              <p>But I left.</p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                I am still looking for the woman I was before all of this.
              </h2>

              <p>
                I catch glimpses of her sometimes. When I&apos;m in a charity shop and I spot something that&apos;s going to make me £25 profit and I feel that little spark of <em>I did that.</em> When one of my children laughs so hard they can&apos;t breathe and I think — <em>I made that.</em> When I sit down late at night, after everyone is in bed, and I write.
              </p>

              <p>
                She&apos;s still in here. The Aypril who existed before the grief, before the control, before the slow erosion of someone telling you who you are until you forget who you were.
              </p>

              <p>She&apos;s still in here.</p>

              <p>This blog is how I&apos;m finding her.</p>

              <hr className="border-brand-tan-light my-10" />

              <p className="font-display font-bold text-brand-black text-xl italic text-center">
                Alison. You were my person. This one&apos;s for you. 🤍
              </p>

            </div>

            {/* Subscribe CTA */}
            <div className="mt-16 bg-brand-black p-8 sm:p-12 text-center">
              <p className="font-mono-brand text-brand-fire text-xs tracking-widest uppercase mb-4">
                You&apos;re not alone
              </p>
              <p className="font-display font-bold text-brand-cream text-2xl mb-4">
                If this resonated with you — subscribe.
              </p>
              <p className="font-body text-brand-tan mb-8 max-w-md mx-auto">
                No spam. No fluff. Just honest writing from a mum who&apos;s been through it and is still standing.
              </p>
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 bg-brand-fire text-brand-cream font-body font-semibold px-8 py-4 hover:bg-brand-cream hover:text-brand-fire transition-all duration-200"
              >
                Join the Club →
              </Link>
            </div>

            {/* Back to blog */}
            <div className="mt-12">
              <Link
                href="/blog"
                className="font-body text-brand-fire font-semibold hover:text-brand-black underline underline-offset-4 transition-colors duration-200"
              >
                ← Read more posts
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
