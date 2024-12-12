import Hero from '@/components/Hero'
import HeroTest from '@/components/HeroTest'
import NytechLanding from '@/components/NytechLanding'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
        <Hero />
        <HeroTest />
        <NytechLanding />
    </main>
  )
}