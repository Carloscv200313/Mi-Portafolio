import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"
//import SplashCursor from "@/components/Efecto";
export const metadata: Metadata = {
  title: {
    default: "Carlos Calderon | Desarrollador Full Stack",
    template: "%s | Carlos Calderon"
  },
  description: "Portafolio de Carlos Calderon, desarrollador Full Stack especializado en páginas web, ecommerce, plataformas digitales y soluciones personalizadas. Contacta para llevar tus ideas a la realidad.",
  keywords: ["Carlos Calderon", "desarrollador full stack", "páginas web", "ecommerce", "plataformas digitales", "programador Next.js", "React", "Node.js"],
  metadataBase: new URL('https://www.carlos-calderon.site'),
  publisher: "Carlos Calderon",
  creator: "Carlos Calderon",
  icons: {
    icon: '/logo.png', // Asegúrate que sea PNG
    apple: '/logo.png',
  },
  authors: [{ name: "Carlos Calderon" }],
  applicationName: "Carlos Calderon",
  alternates: {
    canonical: '/',
  },
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
              "@type": ["Person", "Brand"],
              "name": "Carlos Calderon",
              "alternateName": "Cartos Calderon", // Solo si aparece mal escrito en algunos lugares
              "brand": {
                "@type": "Brand",
                "logo": "https://www.carlos-calderon.site/logo.png",
                "name": "Carlos Calderon Dev"
              },
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
