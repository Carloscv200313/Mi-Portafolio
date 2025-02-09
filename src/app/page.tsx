import ContactoOscuroMejorado from "@/components/contacto-oscuro-mejorado";
import Hero from "@/components/hero";
import Portfolio from "@/components/Portfolio";
import { SparklesCore } from "@/components/sparkles"
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage "
          background="transparent"
          minSize={0.5}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-10">
        {/* Sección Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* Sección Portfolio */}
        <section id="portfolio" className="py-12">
          <Portfolio />
        </section>

        {/* Sección Contacto */}
        <section id="contacto">
          <ContactoOscuroMejorado />
        </section>
      </div>
    </main>
  );
}
