import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carlos Calderón | Portfolio Profesional 🚀",
  description:
    "Soy Carlos Calderón, desarrollador fullstack especializado en React, Node.js y bases de datos. Descubre mis proyectos, experiencia y habilidades en programación moderna.",
  keywords: [
    "Carlos Calderón",
    "Portfolio",
    "Desarrollador Fullstack",
    "React",
    "Node.js",
    "SQL",
    "Next.js",
    "GitHub",
    "LinkedIn",
    "Proyectos de programación",
  ],
  openGraph: {
    title: "Portfolio de Carlos Calderón | Fullstack Developer 🚀",
    description:
      "Explora mis proyectos de desarrollo web, experiencia en frontend y backend, y conecta conmigo en LinkedIn o GitHub.",
    url: "https://www.carlos-calderon.site/Proyectos",
    siteName: "Carlos Calderón | Portfolio",
    images: [
      {
        url: "https://www.carlos-calderon.site/icono.png", // crea un banner atractivo (1200x630 recomendado)
        width: 1200,
        height: 630,
        alt: "Portfolio de Carlos Calderón",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.carlos-calderon.site/Proyectos",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "linkedin:profile": "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/",
    "github:profile": "https://github.com/Carloscv200313",
  },
};

import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <section className="py-12">
      <Portfolio />
    </section>
  );
}
