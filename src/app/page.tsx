import ContactoOscuroMejorado from "@/components/contacto-oscuro-mejorado";
import SplashCursor from "@/components/Efecto";
import Hero from "@/components/hero";
import { Imagen3D } from "@/components/Imagen3D";
import Portfolio from "@/components/Portfolio";
import SobreMi from "@/components/SobreMi";
import Impacto from "@/components/Impacto";
import Servicios from "@/components/Servicios";
import Experiencia from "@/components/Experiencia";
import CasosEstudio from "@/components/CasosEstudio";
import Comunidad from "@/components/Comunidad";
import MobileSection from "@/components/MobileSection";
//import Publicidad from "@/components/ui/Publicidad";
export default function Home() {
  return (
    <main className="relative overflow-hidden md:pt-16">
      <SplashCursor/>
      {/* <Publicidad />*/}
      <div className="relative z-10">
        {/* Sección Hero */}
        <section className="xl:grid xl:grid-cols-2 min-h-[calc(100vh-85px)] flex flex-col-reverse">
          <div className="flex items-center justify-center">
            <Imagen3D />
          </div>
          <Hero />
        </section>
        <section id="sobre-mi" className="md:py-12 border-t border-white/5">
          <SobreMi />
        </section>
        <section id="impacto" className="border-t border-white/5">
          <Impacto />
        </section>
        <section id="servicios" className="border-t border-white/5">
          <Servicios />
        </section>
        <section id="experiencia" className="border-t border-white/5">
          <Experiencia />
        </section>
        <section id="casos-estudio" className="border-t border-white/5">
          <CasosEstudio />
        </section>
        {/* Sección Portfolio */}
        <section id="proyectos" className="pt-20 border-t border-white/5">
          <Portfolio />
        </section>
        <section id="comunidad" className="border-t border-white/5">
          <Comunidad />
        </section>
        <section id="mobile" className="border-t border-white/5">
          <MobileSection />
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="border-t border-white/5">
          <ContactoOscuroMejorado />
        </section>
      </div>
    </main>
  );
}
