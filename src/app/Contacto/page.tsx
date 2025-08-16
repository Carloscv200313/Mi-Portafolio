import ContactoOscuroMejorado from "@/components/contacto-oscuro-mejorado";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contáctanos | Tu Aliado Digital en Soluciones Web",
  description:
    "Conéctate con nuestro equipo de expertos en desarrollo web, diseño y soluciones digitales. Estamos listos para ayudarte a impulsar tu negocio con innovación y tecnología.",
  keywords: [
    "contacto",
    "desarrollo web",
    "diseño web",
    "soluciones digitales",
    "consultoría tecnológica",
    "contactar empresa digital",
    "servicios TI",
  ],
  openGraph: {
    title: "Contáctanos | Tu Aliado Digital en Soluciones Web",
    description:
      "Habla con nuestro equipo de expertos en desarrollo web y soluciones digitales. Transformamos tu visión en resultados reales.",
    url: "https://www.carlos-calderon.site/Contacto",
    siteName: "Tu Empresa",
    images: [
      {
        url: "https://www.carlos-calderon.site/icono.png", // coloca tu logo o una imagen optimizada
        width: 1200,
        height: 630,
        alt: "Contáctanos - Tu Aliado Digital",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contáctanos | Tu Aliado Digital en Soluciones Web",
    description:
      "Conéctate con nosotros y lleva tu proyecto al siguiente nivel con soluciones digitales innovadoras.",
    images: ["https://www.carlos-calderon.site/logo.png"],
  },
  alternates: {
    canonical: "https://www.carlos-calderon.site/Contacto",
  },
};

export default function Home() {
  return (
    <section className="pt-16">
      <ContactoOscuroMejorado />
    </section>
  );
}
