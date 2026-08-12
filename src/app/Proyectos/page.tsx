import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | Carlos Sebastian Calderon Vega",
  description:
    "Proyectos reales de desarrollo web full-stack y mobile con foco en performance, escalabilidad y despliegues en nube.",
  keywords: [
    "Carlos Sebastian Calderon Vega",
    "Proyectos",
    "Desarrollador web full-stack",
    "Desarrollador mobile",
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "CI/CD",
    "AWS",
  ],
  openGraph: {
    title: "Proyectos | Carlos Sebastian Calderon Vega",
    description:
      "Explora proyectos reales de desarrollo web full-stack y mobile con enfoque en performance y escalabilidad.",
    url: "https://www.carlos-calderon.site/Proyectos",
    siteName: "Carlos Sebastian Calderon Vega | Portfolio",
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
    <section className="pt-20">
      <Portfolio />
    </section>
  );
}
