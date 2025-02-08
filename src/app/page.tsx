import Hero from "@/components/hero"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  )
}

