import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Day I Found a Tracker in My Car',
  description: 'Aypril shares the story of discovering a hidden AirTag in her car, the lies that followed, and what it taught her about coercive control.',
  openGraph: {
    title: 'The Day I Found a Tracker in My Car',
    description: 'It started at 4am with the sound of my car boot opening. By the end of the week, I was handing a hidden AirTag to a police officer.',
    url: 'https://fivekidsonemom.com/blog/the-day-i-found-a-tracker-in-my-car',
  },
  alternates: {
    canonical: 'https://fivekidsonemom.com/blog/the-day-i-found-a-tracker-in-my-car',
  },
}

export default function TrackerPost() {
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
              The Day I Found a Tracker in My Car
            </h1>
            <div className="flex items-center gap-4">
              <span className="font-mono-brand text-brand-tan text-xs">By Aypril Conway</span>
              <span className="font-mono-brand text-brand-tan/50 text-xs">·</span>
              <time className="font-mono-brand text-brand-tan text-xs">2024</time>
              <span className="font-mono-brand text-brand-tan/50 text-xs">·</span>
              <span className="font-mono-brand text-brand-tan text-xs">8 min read</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="bg-brand-cream py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose-content font-body text-brand-charcoal text-base sm:text-lg leading-relaxed space-y-6">

              <p className="text-xl sm:text-2xl font-display font-bold text-brand-black leading-snug">
                It started at 4am with the sound of my car boot opening.
              </p>

              <p>
                I jumped out of bed — heart already going, the way it does when you&apos;re a mum and any unexpected sound at 4am means something&apos;s wrong — and went outside to find him standing there, rummaging through my boot.
              </p>

              <p>&ldquo;What are you doing?&rdquo;</p>
              <p>&ldquo;Looking for the tyre pump.&rdquo;</p>

              <p>
                I told him he already had it. He knew he had it. So why was he stood in my boot, in the dark, at 4am, the morning I leave early for work?
              </p>

              <p>&ldquo;I just wanted to check before you go.&rdquo;</p>

              <p>Right. Okay. Sure.</p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                The notification
              </h2>

              <p>
                That evening, driving home, stuck in traffic like always, my phone buzzed. A notification: <em>someone has been tracking your location.</em> Not &ldquo;there&apos;s a tracker in your car.&rdquo; Just that vague, slightly unsettling line.
              </p>

              <p>
                I didn&apos;t think much of it. I told myself maybe it was a fluke — maybe I was near someone else&apos;s tagged item, another car, another bag, who knows. I got home. I didn&apos;t mention it.
              </p>

              <p>
                The next evening, same thing. Same notification. Same traffic. Same little voice in my head going <em>hmm, that&apos;s odd</em> and then immediately talking itself back down. <em>I&apos;m probably just catching someone else&apos;s signal again.</em>
              </p>

              <p>A few days passed. Nothing. I&apos;d almost forgotten about it.</p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                The night it stopped being a coincidence
              </h2>

              <p>
                We went out for a drink with colleagues — remembering a friend who&apos;d passed away, the kind of evening that&apos;s already heavy before anything else happens. And then, right there, mid-conversation, the notification popped up again.
              </p>

              <p><em>Someone has been tracking your location.</em></p>

              <p>
                I showed my colleagues. &ldquo;Look, this keeps happening, what even is this?&rdquo; We went out to my car. One of them helped me search the boot. I played the sound through my phone — the little chirp Apple lets you trigger to locate a lost AirTag — and there it was.
              </p>

              <p>Wrapped in tissue paper. Hidden underneath the boot liner.</p>

              <p className="font-bold text-brand-black">An AirTag.</p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                The conversation that followed
              </h2>

              <p>
                I called him. Furious — properly furious, the kind of furious where your voice goes very calm and very flat because if you let it go any other way you might actually combust.
              </p>

              <p>&ldquo;What have you put in my boot?&rdquo;</p>
              <p>&ldquo;Nothing. Nothing.&rdquo;</p>
              <p>&ldquo;There&apos;s a tracker in my car.&rdquo;</p>
              <p>&ldquo;That&apos;s not mine.&rdquo;</p>

              <p>
                Funny, that. Because it definitely wasn&apos;t sitting in my boot before the morning I caught him crouched over it at 4am, lying about a tyre pump he already had.
              </p>

              <p>
                I told him — fine, if it&apos;s not yours, I&apos;m calling the police, because somebody has put a tracking device in my car without my knowledge or consent, and that is, in fact, a criminal offence.
              </p>

              <p>&ldquo;Call the police then.&rdquo;</p>

              <p>So I did.</p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                When the story changed
              </h2>

              <p>
                By the time the police arrived, the story had evolved. It always does, doesn&apos;t it. First it was nothing. Then, once nothing wasn&apos;t going to fly anymore, it became:
              </p>

              <blockquote className="border-l-4 border-brand-fire pl-6 my-8 italic text-brand-black text-xl font-display">
                &ldquo;I did it to protect your car.&rdquo;
              </blockquote>

              <p>
                I genuinely had to stop myself laughing at that one. My car — a BMW — already has manufacturer tracking built in. I explained that to him. Several times. He had no answer for that, because there isn&apos;t one. You don&apos;t need to hide a second, secret tracker wrapped in tissue paper under the boot liner of a car that already has tracking installed by the people who made it — unless the thing you&apos;re tracking isn&apos;t the car at all. It&apos;s me.
              </p>

              <p>
                He never once admitted that. Not properly. Not honestly. The closest he ever got was &ldquo;I wanted to make sure you were safe.&rdquo; Caught in lie after lie, and that&apos;s the line he landed on.
              </p>

              <p>
                It wasn&apos;t about safety. It was about control. About knowing exactly where I was, every minute, without me knowing he knew. That&apos;s not love. That&apos;s surveillance.
              </p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                What the police actually said
              </h2>

              <p>
                When the officers arrived, I laid it out plainly. He&apos;d been in my boot a couple of days before, lying about why. The notifications had been happening for over a week. I now had physical evidence in my hand.
              </p>

              <p>They asked, <em>would you like us to arrest him?</em></p>

              <p>I said no.</p>

              <p>
                Not because what he did wasn&apos;t serious enough — it absolutely was, and is. I said no because what I actually wanted, more than anything, was for him to hear it stated plainly, by someone in uniform, that this is an arrestable offence. I wanted him to understand, in a way he couldn&apos;t argue or twist or lie his way out of, that what he&apos;d done wasn&apos;t a misunderstanding or an act of care. It was illegal. It was controlling. And it was over.
              </p>

              <p>
                I handed the officer the AirTag. &ldquo;That&apos;ll be his property. Please give it back to him.&rdquo; And then I asked for my key back, because he was no longer welcome in my home.
              </p>

              <hr className="border-brand-tan-light my-10" />

              <h2 className="font-display font-black text-brand-black text-2xl sm:text-3xl">
                Why I&apos;m telling you this
              </h2>

              <p>
                Because if something like this is happening to you — the unexplained notifications, the questions about where you&apos;ve been, the feeling that you&apos;re being watched even when you can&apos;t prove it — you are not imagining it. You are not paranoid. Trust that gut feeling. Mine was right.
              </p>

              <p>
                A tracker hidden in tissue paper under a boot liner isn&apos;t an act of love. It&apos;s not protection. It&apos;s control wearing a disguise.
              </p>

              <p>
                I left. And every day since has been one more day further away from a man who needed to know my every move more than he ever needed to actually know me.
              </p>

            </div>

            {/* Subscribe CTA */}
            <div className="mt-16 bg-brand-black p-8 sm:p-12 text-center">
              <p className="font-mono-brand text-brand-fire text-xs tracking-widest uppercase mb-4">
                You&apos;re not alone
              </p>
              <p className="font-display font-bold text-brand-cream text-2xl mb-4">
                If anything in this feels familiar — subscribe.
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
