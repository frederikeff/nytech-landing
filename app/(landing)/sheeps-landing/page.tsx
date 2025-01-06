import HeroSheeps from '@/components/HeroSheeps'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSheeps
        imageUrl="sheeps.png"  // Image in public/images/
        title="Modern Comfort"
        subtitle="Handcrafted baby blankets"
        buttonText="Shop Now"
      />
    </main>
  )
}