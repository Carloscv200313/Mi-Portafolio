export type ProjectCategory = "Frontend" | "Backend" | "Fullstack" | "Mobile"

export interface Project {
  id: string
  title: string
  client?: string
  description: string
  /** Rutas a imágenes en /public. La primera se usa como miniatura de la card; si hay más de una, el modal muestra carrusel. Si no hay ninguna, se muestra un placeholder con el nombre del proyecto. */
  images?: string[]
  languages: string[]
  /** URL pública funcionando (demo, landing, app). */
  demoUrl?: string
  /** Repositorio público en GitHub. */
  repoUrl?: string
  /** true = proyecto de cliente / código privado, sin repo ni demo pública. */
  private?: boolean
  category: ProjectCategory
}

export const projects: Project[] = [
  {
    id: "kardex360",
    title: "Kardex360",
    client: "Caldex Solutions",
    description:
      "Arquitectura SaaS multitenant desde cero para inventario, ventas, compras y reportes. Aislamiento de datos por cliente vía Row Level Security desde la primera migración, capa de IA operativa detrás de un backend propio (sin SQL libre generado por el modelo) y escaneo de códigos de barra. Diseñado para escalar a nuevos tenants sin tocar el esquema.",
    images: ["/kardex360-01.png", "/kardex360-02.png", "/kardex360-03.png"],
    languages: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API", "Redis"],
    demoUrl: "https://kardex360.vercel.app/",
    category: "Fullstack",
  },
  {
    id: "grupo-lopar",
    title: "Grupo Lopar",
    client: "Grupo Lopar",
    description:
      "Plataforma de punto de venta y logística que unifica dos operaciones de negocio en un mismo dominio: ventas con niveles de precio y pagos divididos, caja con sesiones y cierre automático, y un módulo de logística con control de tanques, flota, conductores y despachos en tiempo real. Modelo de datos pensado para escalar a más sucursales sin duplicar lógica.",
    images: ["/grupo-lopar-01.png", "/grupo-lopar-02.png", "/grupo-lopar-03.png"],
    languages: ["React", "Vite", "TypeScript", "Supabase", "Gemini API", "Recharts"],
    demoUrl: "https://www.grupolopar.com/",
    category: "Fullstack",
  },
  {
    id: "arquitectos-salazar",
    title: "Arquitectos Salazar",
    client: "Arquitectos Salazar",
    description:
      "Sistema de gestión interna con autenticación y control de acceso por roles y permisos diseñado a medida, motor de distribución financiera automático por área de proyecto (propuesta, modelado 3D, planos, render) y trazabilidad de obras, pedidos y finanzas en un mismo modelo de dominio.",
    images: ["/arquitectos-salazar-01.png", "/arquitectos-salazar-02.png", "/arquitectos-salazar-03.png"],
    languages: ["Next.js 16", "TypeScript", "Supabase", "Tailwind v4", "Zod"],
    demoUrl: "https://arquitectos-salazar.vercel.app/",
    category: "Fullstack",
  },
  {
    id: "caudal",
    title: "Caudal",
    description:
      "Sistema de finanzas personales con detección automática de movimientos vía Gmail API (OAuth de solo lectura), tokens cifrados con AES-256-GCM y capa de autenticación propia con bcrypt y JWT. Ingresos, egresos, presupuestos y metas de ahorro sobre un modelo de datos pensado para crecer a multi-cuenta.",
    images: ["/caudal-01.png", "/caudal-02.png", "/caudal-03.png"],
    languages: ["Next.js 16", "TypeScript", "Supabase", "Gmail API", "Recharts", "Zod"],
    demoUrl: "https://caudal-black.vercel.app/",
    category: "Fullstack",
  },
  {
    id: "mentes-creadoras",
    title: "Mentes Creadoras",
    description:
      "Plataforma modular que integra múltiples dominios (tareas, entrenamiento, nutrición con IA) bajo una misma base de datos y capa de autenticación, con panel de administración para monitoreo de usuarios. Pensada para agregar nuevos módulos sin reescribir los existentes.",
    images: ["/taks-01.png", "/taks-02.png", "/taks-03.png"],
    languages: ["Next.js 16", "TypeScript", "Supabase", "IA (chat)", "Recharts"],
    demoUrl: "https://codigo-abundante.vercel.app/login",
    repoUrl: "https://github.com/Carloscv200313/MultiTaks",
    category: "Fullstack",
  },
  {
    id: "amatia-message-center",
    title: "Amatia Message Center",
    client: "Amatia / CodeLatin",
    description:
      "Centro de mensajería tipo Outlook con editor enriquecido (Lexical), calendario y tableros drag-and-drop, integrado con chat en tiempo real embebido sobre Rocket.Chat. Capa de datos vía GraphQL/Apollo con gestión de estado centralizada sobre una interfaz en Material UI.",
    images: ["/messa-center-01.png", "/messa-center-02.png", "/messa-center-03.png"],
    languages: ["React", "GraphQL", "Apollo", "Material UI", "Rocket.Chat"],
    private: true,
    category: "Frontend",
  },
  {
    id: "caldex-landing",
    title: "Caldex Solutions — Landing",
    client: "Caldex Solutions",
    description:
      "Landing corporativa con animaciones 3D (Spline + react-three-fiber) y scroll suave, optimizada para performance y SEO como puerta de entrada a los productos de Caldex Solutions.",
    images: ["/caldex-solutions-01.png", "/caldex-solutions-02.png", "/caldex-solutions-03.png"],
    languages: ["Next.js", "TypeScript", "Three.js", "Framer Motion"],
    demoUrl: "https://caldev-solutions.vercel.app/productos/resto",
    repoUrl: "https://github.com/Carloscv200313/caldev-solutions",
    category: "Frontend",
  },
  {
    id: "servimach",
    title: "ServiMach",
    description:
      "Plataforma para solicitar técnicos especializados con un flujo de registro reforzado por diseño: verificación en tres etapas (código por email, validación de identidad con comparación de imágenes y consulta de antecedentes) para reducir accesos no autorizados.",
    images: ["/ServiMach.png"],
    languages: ["React", "Next.js", "TypeScript", "Tailwind", "AWS", "Cloudinary"],
    repoUrl: "https://github.com/Carloscv200313/servi-mach",
    category: "Backend",
  },
  {
    id: "votaciones",
    title: "Sistema de Votaciones",
    description:
      "Sistema en tiempo real con WebSocket y CRUD para votación y gestión de bandas, con propagación instantánea de cambios de estado a todos los clientes conectados.",
    images: ["/Votaciones.png"],
    languages: ["React", "Node.js", "Express", "Socket.io", "Tailwind"],
    demoUrl: "https://votacion-bandas.netlify.app/",
    category: "Backend",
  },
]
