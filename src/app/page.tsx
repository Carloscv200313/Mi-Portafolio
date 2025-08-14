import ContactoOscuroMejorado from "@/components/contacto-oscuro-mejorado";
import SplashCursor from "@/components/Efecto";
import Hero from "@/components/hero";
import { Imagen3D } from "@/components/Imagen3D";
import Portfolio from "@/components/Portfolio";
import SobreMi from "@/components/SobreMi";
//import { SparklesCore } from "@/components/sparkles"
//import Publicidad from "@/components/ui/Publicidad";
export default function Home() {
  return (
    <main className="relative overflow-hidden md:pt-16">
      <div className="absolute inset-0 z-0">
        {/* <SparklesCore
          id="tsparticlesfullpage "
          background="transparent"
          minSize={0.5}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />*/}
      </div>
      <SplashCursor/>
      {/* <Publicidad />*/}
      <div className="relative z-10">
        {/* Sección Hero */}
        <section id="hero" className="xl:grid xl:grid-cols-2 min-h-[calc(100vh-85px)] flex flex-col-reverse">
          <div className="flex items-center justify-center">
            <Imagen3D />
          </div>
          <Hero />
        </section>
        <section id="about" className="py-12">
          <SobreMi />
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
