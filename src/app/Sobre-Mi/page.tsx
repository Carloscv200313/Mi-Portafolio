import type { Metadata } from "next";
import SobreMi from "@/components/SobreMi";

export const metadata: Metadata = {
  title: "Sobre mí | Carlos Sebastian Calderon Vega",
  description:
    "Conoce a Carlos Sebastian Calderon Vega, desarrollador web full-stack y mobile enfocado en performance, escalabilidad, CI/CD y nube.",
  keywords: [
    "Carlos Sebastian Calderon Vega",
    "Sobre mí",
    "Desarrollador web full-stack",
    "Desarrollador mobile",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "CI/CD",
    "AWS",
  ],
  openGraph: {
    title: "Sobre mí | Carlos Sebastian Calderon Vega",
    description:
      "Desarrollador web full-stack y mobile con foco en performance, escalabilidad y despliegues en nube.",
    url: "https://www.carlos-calderon.site/Sobre-Mi",
    siteName: "Portfolio de Carlos Sebastian Calderon Vega",
    images: [
      {
        url: "https://www.carlos-calderon.site/icono.png", // <-- puedes cambiarlo por una imagen tuya real
        width: 1200,
        height: 630,
        alt: "Sobre mí - Carlos Sebastian Calderon Vega",
      },
    ],
    locale: "es_ES",
    type: "profile",
  },
  alternates: {
    canonical: "https://www.carlos-calderon.site/Sobre-Mi",
  },
  authors: [{ name: "Carlos Sebastian Calderon Vega" }],
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
