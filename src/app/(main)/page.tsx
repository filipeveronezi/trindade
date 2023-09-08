import { Hero } from '@/components/hero'
import { SubHero } from '@/components/sub-hero'

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center overflow-y-hidden px-4">
      <Hero />
      <SubHero />
    </main>
  )
}
