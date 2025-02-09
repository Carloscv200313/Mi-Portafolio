import ContactoOscuroMejorado from "@/components/contacto-oscuro-mejorado";
import Hero from "@/components/hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
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
