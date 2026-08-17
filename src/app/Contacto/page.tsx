import ContactoOscuroMejorado from "@/components/contacto-oscuro-mejorado";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contacto | Carlos Sebastian Calderon Vega",
  description:
    "Hablemos sobre tu producto: desarrollo web full-stack y mobile con foco en performance, escalabilidad y despliegues en nube.",
  keywords: [
    "contacto",
    "desarrollador web full-stack",
    "desarrollador mobile",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
  ],
  openGraph: {
    title: "Contacto | Carlos Sebastian Calderon Vega",
    description:
      "Hablemos sobre tu producto: performance, escalabilidad, CI/CD y despliegues en nube.",
    url: "https://carlos-calderon.vercel.app/Contacto",
    siteName: "Carlos Sebastian Calderon Vega",
    images: [
      {
        url: "https://carlos-calderon.vercel.app/icono.png", // coloca tu logo o una imagen optimizada
        width: 1200,
        height: 630,
        alt: "Contacto - Carlos Sebastian Calderon Vega",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Carlos Sebastian Calderon Vega",
    description:
      "Hablemos sobre tu producto y cómo escalarlo con arquitectura moderna.",
    images: ["https://carlos-calderon.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://carlos-calderon.vercel.app/Contacto",
  },
};

export default function Home() {
  return (
    <section className="pt-16">
      <ContactoOscuroMejorado />
    </section>
  );
}
