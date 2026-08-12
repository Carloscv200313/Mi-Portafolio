import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
//import SplashCursor from "@/components/Efecto";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Carlos Sebastian Calderon Vega | Web Full-Stack & Mobile",
    template: "%s | Carlos Sebastian Calderon Vega"
  },
  description: "Desarrollador Web Full-Stack y Mobile en Lima, Perú. Performance, escalabilidad, CI/CD y nube para productos reales.",
  keywords: ["Carlos Calderon", "desarrollador web full-stack", "desarrollador mobile", "Next.js", "React", "TypeScript", "Node.js", "CI/CD", "AWS", "performance web"],
  metadataBase: new URL('https://www.carlos-calderon.site'),
  publisher: "Carlos Sebastian Calderon Vega",
  creator: "Carlos Sebastian Calderon Vega",
  icons: {
    icon: '/favicon.ico', // Asegúrate que sea PNG
    apple: '/favicon.ico',
  },
  authors: [{ name: "Carlos Sebastian Calderon Vega" }],
  applicationName: "Carlos Sebastian Calderon Vega",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Carlos Sebastian Calderon Vega | Web Full-Stack & Mobile",
    description: "Portafolio profesional con proyectos reales, métricas de impacto y enfoque en performance y escalabilidad.",
    url: "https://www.carlos-calderon.site",
    siteName: "Carlos Sebastian Calderon Vega",
    images: [
      {
        url: "https://www.carlos-calderon.site/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Portafolio de Carlos Sebastian Calderon Vega"
      }
    ],
    locale: "es_ES",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Structured data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "Brand"],
              "name": "Carlos Sebastian Calderon Vega",
              "brand": {
                "@type": "Brand",
                "logo": "https://www.carlos-calderon.site/favicon.ico",
                "name": "Carlos Calderon Dev"
              },
              "url": "https://www.carlos-calderon.site",
              "logo": "https://www.carlos-calderon.site/favicon.ico",
              "image": "https://www.carlos-calderon.site/favicon.ico",
              "jobTitle": "Desarrollador Web Full-Stack y Desarrollador Mobile",
              "description": "Portafolio profesional con enfoque en performance, escalabilidad, CI/CD y despliegues en nube.",
              "sameAs": [
                "https://github.com/Carloscv200313",
                "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/"
              ]
            })
          }}
        />
      </head>
      <body className={`${manrope.variable} ${bricolage.variable} ${plexMono.variable} min-h-screen bg-bg-dark antialiased bg-grid-white/[0.02] relative font-sans overflow-x-hidden`}>
        <div className="relative">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
