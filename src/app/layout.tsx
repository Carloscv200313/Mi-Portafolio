import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"
//import SplashCursor from "@/components/Efecto";
export const metadata: Metadata = {
  title: "Carlos Calderon | Desarrollador Full Stack",
  description: "Portafolio de Carlos Calderon, desarrollador Full Stack especializado en páginas web, ecommerce, plataformas digitales y soluciones personalizadas. Contacta para llevar tus ideas a la realidad.",
  keywords: ["Carlos Calderon", "desarrollador full stack", "páginas web", "ecommerce", "plataformas digitales", "programador Next.js", "React", "Node.js"],
  authors: [{ name: "Carlos Calderon" }],
  openGraph: {
    title: "Carlos Calderon | Desarrollador Full Stack",
    description: "Conoce mi portafolio de desarrollo web y mis proyectos más recientes.",
    url: "https://www.carlos-calderon.site",
    siteName: "Carlos Calderon",
    images: [
      {
        url: "https://www.carlos-calderon.site/logo.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Carlos Calderon"
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
    <html lang="en">
      <head>
        {/* Structured data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carlos Calderon",
              "url": "https://www.carlos-calderon.site",
              "logo": "https://www.carlos-calderon.site/logo.png",
              "image": "https://www.carlos-calderon.site/logo.png",
              "jobTitle": "Desarrollador Full Stack",
              "description": "Portafolio profesional de Carlos Calderon, especializado en desarrollo web, ecommerce y soluciones digitales.",
              "sameAs": [
                "https://github.com/Carloscv200313",
                "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-black/[0.98] antialiased bg-grid-white/[0.02] relative  ">
        <div className="relative">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
