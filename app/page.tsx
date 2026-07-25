import { Nav } from '@/components/landing/nav'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { HowToPlay } from '@/components/landing/how-to-play'
import { Biomes } from '@/components/landing/biomes'
import { FinalCta } from '@/components/landing/final-cta'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowToPlay />
        <Biomes />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
