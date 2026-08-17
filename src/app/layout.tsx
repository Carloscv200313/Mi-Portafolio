import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
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
    default: "Carlos Calderón | Ingeniero de Software Full-Stack",
    template: "%s | Carlos Calderón"
  },
  description: "Ingeniero de software full-stack en Lima, Perú. Diseño arquitectura y construyo SaaS multitenant, POS y sistemas con IA: Next.js, TypeScript, Node.js.",
  keywords: ["Carlos Calderon", "ingeniero de software", "desarrollador full-stack", "Next.js", "TypeScript", "Node.js", "arquitectura de software", "SaaS multitenant", "React", "IA aplicada", "Lima Perú"],
  metadataBase: new URL('https://carlos-calderon.vercel.app'),
  publisher: "Carlos Sebastian Calderon Vega",
  creator: "Carlos Sebastian Calderon Vega",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  authors: [{ name: "Carlos Sebastian Calderon Vega" }],
  applicationName: "Carlos Sebastian Calderon Vega",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Carlos Calderón | Ingeniero de Software Full-Stack",
    description: "Diseño arquitectura y construyo SaaS multitenant, POS y sistemas con IA. Casos reales: Kardex360, Grupo Lopar, Arquitectos Salazar.",
    url: "https://carlos-calderon.vercel.app",
    siteName: "Carlos Calderón",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Carlos Calderón, Ingeniero de software full-stack"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Calderón | Ingeniero de Software Full-Stack",
    description: "Diseño arquitectura y construyo SaaS multitenant, POS y sistemas con IA. Casos reales: Kardex360, Grupo Lopar, Arquitectos Salazar.",
    images: ["/opengraph-image"],
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
                "logo": "https://carlos-calderon.vercel.app/favicon.ico",
                "name": "Carlos Calderon Dev"
              },
              "url": "https://carlos-calderon.vercel.app",
              "logo": "https://carlos-calderon.vercel.app/favicon.ico",
              "image": "https://carlos-calderon.vercel.app/favicon.ico",
              "jobTitle": "Ingeniero de Software Full-Stack",
              "description": "Diseño arquitectura de software y construyo sistemas SaaS multitenant, POS y plataformas con integraciones de IA usando Next.js, TypeScript y Node.js.",
              "sameAs": [
                "https://github.com/Carloscv200313",
                "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/"
              ]
            })
          }}
        />
      </head>
      <body className={`${manrope.variable} ${bricolage.variable} ${plexMono.variable} min-h-screen bg-bg-dark antialiased bg-grid-white/[0.02] relative font-sans overflow-x-hidden`}>
        <LanguageProvider>
          <div className="relative">
            <Navbar />
          </div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
