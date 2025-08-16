import type { Metadata } from "next";
import SobreMi from "@/components/SobreMi";

export const metadata: Metadata = {
  title: "Sobre mí | Carlos Sebastián Calderón Vega",
  description:
    "Conoce a Carlos Sebastián Calderón Vega, desarrollador full stack apasionado por crear soluciones innovadoras en la web, con experiencia en React, Node.js, SQL Server y proyectos de inteligencia artificial.",
  keywords: [
    "Carlos Sebastián Calderón Vega",
    "Sobre mí",
    "Desarrollador full stack",
    "React",
    "Node.js",
    "SQL Server",
    "Next.js",
    "Inteligencia Artificial",
    "Programación",
    "Portfolio desarrollador",
  ],
  openGraph: {
    title: "Sobre mí | Carlos Sebastián Calderón Vega",
    description:
      "Soy un desarrollador full stack con experiencia en frontend y backend, apasionado por el aprendizaje constante y la construcción de proyectos tecnológicos innovadores.",
    url: "https://www.carlos-calderon.site/Sobre-Mi",
    siteName: "Portfolio de Carlos Calderón",
    images: [
      {
        url: "https://www.carlos-calderon.site/icono.png", // <-- puedes cambiarlo por una imagen tuya real
        width: 1200,
        height: 630,
        alt: "Sobre mí - Carlos Calderón",
      },
    ],
    locale: "es_ES",
    type: "profile",
  },
  alternates: {
    canonical: "https://www.carlos-calderon.site/Sobre-Mi",
  },
  authors: [{ name: "Carlos Sebastián Calderón Vega" }],
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "linkedin:profile": "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/",
    "github:profile": "https://github.com/Carloscv200313",
  },
};

export default function Home() {
  return (
    <section className="py-12">
      <SobreMi />
    </section>
  );
}
