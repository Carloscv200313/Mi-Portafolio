export type Language = "es" | "en";

export interface Dictionary {
  nav: {
    inicio: string;
    sobreMi: string;
    proyectos: string;
    contacto: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    description: string;
    tags: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    ctaCv: string;
  };
  sobreMi: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    bio: string;
    chapitecName: string;
    communitySuffix: string;
    stacks: { title: string; items: string[] }[];
  };
  impacto: {
    eyebrow: string;
    heading: string;
    metrics: { value: string; title: string; desc: string }[];
  };
  servicios: {
    eyebrow: string;
    heading: string;
    items: string[];
  };
  experiencia: {
    eyebrow: string;
    heading: string;
    items: { title: string; period: string; bullets: string[] }[];
  };
  casosEstudio: {
    eyebrow: string;
    heading: string;
    description: string;
    labels: { problema: string; solucion: string; resultado: string; stack: string; rol: string };
    ctaLive: string;
    cases: { title: string; problem: string; solution: string; result: string; stack: string; role: string; url: string }[];
  };
  portfolio: {
    eyebrow: string;
    heading: string;
    description: string;
    filters: { all: string; frontend: string; backend: string; fullstack: string };
    client: string;
    ctaLive: string;
    ctaCode: string;
    privateCode: string;
    privateCodeClient: string;
    zoomHint: string;
  };
  projects: Record<string, { title: string; description: string; client?: string }>;
  comunidad: {
    eyebrow: string;
    heading: string;
    bioPre: string;
    chapitecName: string;
    bioPost: string;
    bullets: string[];
    imageAlt: string;
  };
  mobile: {
    eyebrow: string;
    heading: string;
    bio1Pre: string;
    appName: string;
    bio1Post: string;
    bio2: string;
    bullets: string[];
    comingSoon: string;
  };
  contacto: {
    eyebrow: string;
    heading: string;
    description: string;
    availability: string;
    location: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
  };
  lightbox: { captureLabel: string; close: string };
  menu: { openLabel: string; closeLabel: string; menuWord: string; closeWord: string };
  langToggle: { label: string };
}

const es: Dictionary = {
  nav: {
    inicio: "Inicio",
    sobreMi: "Sobre mí",
    proyectos: "Proyectos",
    contacto: "Contacto",
  },
  hero: {
    badge: "Disponible para nuevos proyectos en Lima, Perú",
    titleLine1: "Carlos Calderón,",
    titleHighlight: "ingeniero",
    titleLine2: "de software full-stack.",
    description:
      "Diseño arquitectura de software y construyo sistemas SaaS escalables de punta a punta: modelado de dominio, multitenancy, autenticación y control de acceso, integraciones con IA. Next.js, TypeScript y Supabase como base, en remoto o híbrido desde Lima.",
    tags: ["Next.js", "TypeScript", "Supabase", "Node.js", "Docker / AWS"],
    ctaPrimary: "Hablemos",
    ctaSecondary: "Ver proyectos",
    ctaCv: "Descargar CV",
  },
  sobreMi: {
    eyebrow: "01 / Sobre mí",
    heading1: "Ingeniería de producto,",
    heading2: "no solo código.",
    bio: "Soy Carlos Sebastián Calderón Vega, desarrollador full-stack en Lima, Perú. Diseño e implemento sistemas completos de punta a punta (modelado de dominio, arquitectura multitenant, autenticación y control de acceso, integraciones con IA) para negocios reales: distribuidoras, estudios de arquitectura, freelancers y SaaS propios. Priorizo decisiones de arquitectura que sostengan el crecimiento del negocio: aislamiento de datos por diseño, capas de servicio claras y sistemas que se puedan extender sin reescribirse. Fuera del código, fundé y lidero",
    chapitecName: "CHAPITEC",
    communitySuffix: ", una comunidad universitaria de programación con más de 500 miembros.",
    stacks: [
      { title: "Frontend", items: ["TypeScript, JavaScript ES6+", "React, Next.js (App Router)", "Tailwind CSS, Framer Motion"] },
      { title: "Backend & datos", items: ["Node.js, Express, NestJS, Django", "PostgreSQL / Supabase, MySQL, SQL Server", "APIs REST y GraphQL, autenticación JWT, cifrado AES-256"] },
      { title: "Arquitectura & patrones", items: ["Multitenancy con RLS a nivel de base de datos", "Arquitectura por capas: controlador, servicio, repositorio", "Modelado de dominio y diseño orientado a escalabilidad"] },
      { title: "Herramientas & DevOps", items: ["Git, GitHub Actions", "Docker, Docker Compose", "AWS (EC2, S3, RDS)"] },
    ],
  },
  impacto: {
    eyebrow: "02 / Resultados",
    heading: "Impacto medible",
    metrics: [
      { value: "-40%", title: "Tiempo de carga", desc: "Lazy loading y code splitting en React." },
      { value: "+60%", title: "Escalabilidad", desc: "Migración de monolito a microservicios." },
      { value: "15 min", title: "Deploys", desc: "CI/CD con Docker (antes: 2 horas)." },
      { value: "99.9%", title: "Uptime", desc: "En AWS EC2 durante el periodo." },
    ],
  },
  servicios: {
    eyebrow: "03 / Qué hago",
    heading: "Servicios",
    items: [
      "Desarrollo web full-stack enfocado en performance y conversión.",
      "Arquitectura moderna y migraciones a microservicios.",
      "Implementación de CI/CD y despliegues automatizados.",
      "Dashboards en tiempo real para operación y métricas.",
      "Integraciones seguras con APIs, IA y bases de datos.",
      "Soporte a productos móviles y experiencias multiplataforma.",
    ],
  },
  experiencia: {
    eyebrow: "04 / Trayectoria",
    heading: "Experiencia",
    items: [
      {
        title: "CHAPITEC, Fundador, Organizador y Ponente Técnico",
        period: "Ene 2023 – Presente",
        bullets: [
          "Comunidad con 500+ miembros y 15+ eventos técnicos.",
          "200+ asistentes acumulados en charlas y talleres.",
          "Lideré 8 desarrolladores para diseñar y desplegar el sitio oficial.",
          "Ponencias sobre IA + SQL y desarrollo moderno con Next.js, TypeScript y Docker.",
          "Alianzas con empresas tech en Perú.",
        ],
      },
      {
        title: "Desarrollador Full Stack (Prácticas), Expertis",
        period: "Mar 2025 – Dic 2025",
        bullets: [
          "-40% tiempo de carga con lazy loading y code splitting en React.",
          "Monolito → microservicios (+60% escalabilidad).",
          "UI responsiva con React + Tailwind para 3 módulos críticos.",
          "CI/CD con Docker: 2h → 15min.",
          "AWS EC2 con 99.9% de uptime en el periodo.",
        ],
      },
      {
        title: "Freelance, Proyectos para clientes y productos propios",
        period: "2024 – Presente",
        bullets: [
          "SaaS multitenant de inventario (Kardex360) con RLS e IA operativa.",
          "POS y logística de combustible para Grupo Lopar, con arquitectura pensada para multi-sucursal.",
          "Sistema de gestión interna para un estudio de arquitectura (Arquitectos Salazar).",
          "Plataforma personal con IA (Mentes Creadoras) y finanzas para freelancers (Caudal).",
        ],
      },
    ],
  },
  casosEstudio: {
    eyebrow: "05 / Casos reales",
    heading: "Casos de estudio",
    description: "Proyectos reales con enfoque en resultados, arquitectura sólida y métricas claras.",
    labels: { problema: "Problema:", solucion: "Solución:", resultado: "Resultado:", stack: "Stack:", rol: "Rol:" },
    ctaLive: "Ver proyecto en vivo",
    cases: [
      {
        title: "Kardex360 (Caldex Solutions)",
        problem: "Caldex necesitaba una base SaaS propia para inventario, ventas y compras, aislada por cliente.",
        solution: "Arquitectura multitenant con Row Level Security desde la primera migración e IA operativa vía backend privado.",
        result: "Base sobre la que corren los módulos de inventario, ventas, compras y reportes de Caldex.",
        stack: "Next.js, TypeScript, Supabase, OpenAI API",
        role: "Full-stack",
        url: "https://kardex360.vercel.app/",
      },
      {
        title: "Grupo Lopar",
        problem: "El distribuidor necesitaba unificar venta de vinos y logística de combustible en un solo sistema.",
        solution: "POS con niveles de precio y caja por sesiones, más un módulo de logística con tanques, flota y despachos en tiempo real.",
        result: "Operación de ventas y logística de diesel controlada desde un solo panel.",
        stack: "React, Vite, Supabase, Gemini API",
        role: "Full-stack",
        url: "https://www.grupolopar.com/",
      },
      {
        title: "Arquitectos Salazar",
        problem: "El estudio de arquitectura llevaba proyectos, obras y finanzas en hojas sueltas, sin control centralizado.",
        solution: "Sistema interno con auth propia por roles, control de obras y pedidos, y finanzas con distribución automática por área.",
        result: "Gestión unificada de proyectos, gastos y utilidades del estudio.",
        stack: "Next.js 16, Supabase, Tailwind v4",
        role: "Full-stack",
        url: "https://arquitectos-salazar.vercel.app/",
      },
    ],
  },
  portfolio: {
    eyebrow: "08 / Selección",
    heading: "Mis Proyectos",
    description:
      "Sistemas diseñados para escalar: SaaS multitenant, plataformas de punto de venta y logística, apps móviles e integraciones con IA construidas con arquitectura sólida desde el primer commit.",
    filters: { all: "Todos", frontend: "Frontend", backend: "Backend", fullstack: "Fullstack" },
    client: "Cliente:",
    ctaLive: "Ver proyecto en vivo",
    ctaCode: "Ver código en GitHub",
    privateCode: "Código privado",
    privateCodeClient: "Código privado (proyecto de cliente)",
    zoomHint: "Ver imagen en grande",
  },
  projects: {
    kardex360: {
      title: "Kardex360",
      client: "Caldex Solutions",
      description:
        "Arquitectura SaaS multitenant diseñada desde cero, con separación clara entre dominio, capa de servicio y acceso a datos para inventario, ventas, compras y reportes. Aislamiento de tenants aplicado a nivel de base de datos con Row Level Security como límite de seguridad real, no solo lógico. Capa de IA operativa orquestada por un backend propio que valida y ejecuta acciones sobre el dominio, sin exponer SQL libre al modelo, más escaneo de códigos de barra. Pensado para escalar a nuevos clientes sin migraciones de esquema.",
    },
    "grupo-lopar": {
      title: "Grupo Lopar",
      client: "Grupo Lopar",
      description:
        "Backend que modela dos operaciones de negocio distintas, ventas y logística de combustible, bajo un mismo dominio: niveles de precio, pagos divididos y cierre de caja resueltos como lógica de servicio en el backend, no en el cliente. Módulo de logística con control de tanques, flota, conductores y despachos en tiempo real vía suscripciones. Modelo de datos preparado para escalar a más sucursales sin duplicar reglas de negocio.",
    },
    "arquitectos-salazar": {
      title: "Arquitectos Salazar",
      client: "Arquitectos Salazar",
      description:
        "Sistema interno con autenticación y control de acceso por roles y permisos implementado a medida, sin depender de un paquete genérico. Motor de distribución financiera automático que reparte ingresos y costos por área de proyecto (propuesta, modelado 3D, planos, render) según reglas de negocio configurables. Trazabilidad de obras, pedidos y finanzas resuelta con un único modelo de dominio, evitando lógica duplicada entre módulos.",
    },
    caudal: {
      title: "Caudal",
      description:
        "Backend de finanzas personales con detección automática de movimientos vía Gmail API bajo OAuth de solo lectura, y una capa de autenticación propia con bcrypt y JWT en vez de depender de un proveedor externo. Tokens y datos sensibles cifrados en reposo con AES-256-GCM. Ingresos, egresos, presupuestos y metas de ahorro sobre un modelo de datos diseñado para escalar a multi-cuenta sin reescribir la capa de negocio.",
    },
    "mentes-creadoras": {
      title: "Mentes Creadoras",
      description:
        "Backend modular donde cada dominio (tareas, entrenamiento, nutrición con IA) vive detrás de su propia capa de servicio sobre una base de datos y autenticación compartidas, con panel de administración para monitoreo de usuarios. Arquitectura pensada para agregar módulos nuevos sin tocar los existentes.",
    },
    "amatia-message-center": {
      title: "Amatia Message Center",
      client: "Amatia / CodeLatin",
      description:
        "Centro de mensajería tipo Outlook con editor enriquecido (Lexical), calendario y tableros drag-and-drop, integrado con chat en tiempo real embebido sobre Rocket.Chat. Capa de datos vía GraphQL/Apollo con gestión de estado centralizada sobre una interfaz en Material UI.",
    },
    "caldex-landing": {
      title: "Caldex Solutions: Landing",
      client: "Caldex Solutions",
      description:
        "Landing corporativa con animaciones 3D (Spline + react-three-fiber) y scroll suave, optimizada para performance y SEO como puerta de entrada a los productos de Caldex Solutions.",
    },
    servimach: {
      title: "ServiMach",
      description:
        "Backend con flujo de registro reforzado por diseño para solicitar técnicos especializados: verificación en tres etapas (código por email, validación de identidad con comparación de imágenes y consulta de antecedentes) antes de habilitar una cuenta, reduciendo accesos no autorizados desde el primer punto de entrada.",
    },
    votaciones: {
      title: "Sistema de Votaciones",
      description:
        "Backend en tiempo real con WebSocket para votación y gestión de bandas: cada cambio de estado se valida en el servidor y se propaga a todos los clientes conectados sin necesidad de refrescar, con CRUD administrativo para operar el evento.",
    },
  },
  comunidad: {
    eyebrow: "06 / Contribución",
    heading: "Comunidad & charlas",
    bioPre: "Fundo y lidero",
    chapitecName: "CHAPITEC",
    bioPost:
      ", una comunidad universitaria de programación con eventos, talleres y hackathons. También participo como ponente en desarrollo moderno e IA aplicada.",
    bullets: ["500+ miembros activos", "15+ eventos técnicos", "Alianzas con empresas tech en Perú"],
    imageAlt: "Comunidad CHAPITEC",
  },
  mobile: {
    eyebrow: "07 / Mobile",
    heading: "También en móvil",
    appName: "AlpaChange",
    bio1Pre: "",
    bio1Post:
      ", app nativa en Kotlin para reportar y gestionar incidencias de infraestructura académica en tiempo real, desarrollada para la UNTELS.",
    bio2: "Login institucional, reportes con foto y ubicación en mapa, notificaciones, roles (estudiante/docente/administrador) y sincronización en segundo plano.",
    bullets: [
      "Firebase Auth, Realtime Database y Cloud Messaging",
      "Reportes con foto (Cloudinary) y mapa (OpenStreetMap)",
      "Servicio en segundo plano con sincronización en tiempo real",
    ],
    comingSoon: "Capturas próximamente",
  },
  contacto: {
    eyebrow: "09 / Contacto",
    heading: "Hablemos de tu proyecto",
    description:
      "¿Listo para lanzar o escalar tu producto? Estoy disponible en remoto o híbrido desde Lima, Perú. Escribime por el formulario o directo por acá.",
    availability: "Disponible para nuevos proyectos",
    location: "Lima, Perú (remoto / híbrido)",
    formTitle: "Envíame un mensaje",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Correo electrónico",
    messagePlaceholder: "Tu mensaje",
    send: "Enviar",
  },
  lightbox: { captureLabel: "captura", close: "Cerrar" },
  menu: { openLabel: "Abrir menú", closeLabel: "Cerrar menú", menuWord: "Menú", closeWord: "Cerrar" },
  langToggle: { label: "Idioma" },
};

const en: Dictionary = {
  nav: {
    inicio: "Home",
    sobreMi: "About",
    proyectos: "Projects",
    contacto: "Contact",
  },
  hero: {
    badge: "Available for new projects in Lima, Peru",
    titleLine1: "Carlos Calderón,",
    titleHighlight: "software engineer",
    titleLine2: "full-stack.",
    description:
      "I design software architecture and build scalable SaaS systems end to end: domain modeling, multitenancy, authentication and access control, AI integrations. Next.js, TypeScript and Supabase as the base, remote or hybrid from Lima.",
    tags: ["Next.js", "TypeScript", "Supabase", "Node.js", "Docker / AWS"],
    ctaPrimary: "Let's talk",
    ctaSecondary: "View projects",
    ctaCv: "Download CV",
  },
  sobreMi: {
    eyebrow: "01 / About me",
    heading1: "Product engineering,",
    heading2: "not just code.",
    bio: "I'm Carlos Sebastián Calderón Vega, a full-stack developer based in Lima, Peru. I design and build complete systems end to end (domain modeling, multitenant architecture, authentication and access control, AI integrations) for real businesses: distributors, architecture firms, freelancers and my own SaaS products. I prioritize architecture decisions that support business growth: data isolation by design, clear service layers, and systems that can be extended without being rewritten. Outside of code, I founded and lead",
    chapitecName: "CHAPITEC",
    communitySuffix: ", a university programming community with 500+ members.",
    stacks: [
      { title: "Frontend", items: ["TypeScript, JavaScript ES6+", "React, Next.js (App Router)", "Tailwind CSS, Framer Motion"] },
      { title: "Backend & data", items: ["Node.js, Express, NestJS, Django", "PostgreSQL / Supabase, MySQL, SQL Server", "REST & GraphQL APIs, JWT auth, AES-256 encryption"] },
      { title: "Architecture & patterns", items: ["Multitenancy with database-level RLS", "Layered architecture: controller, service, repository", "Domain modeling and scalability-oriented design"] },
      { title: "Tools & DevOps", items: ["Git, GitHub Actions", "Docker, Docker Compose", "AWS (EC2, S3, RDS)"] },
    ],
  },
  impacto: {
    eyebrow: "02 / Results",
    heading: "Measurable impact",
    metrics: [
      { value: "-40%", title: "Load time", desc: "Lazy loading and code splitting in React." },
      { value: "+60%", title: "Scalability", desc: "Migration from monolith to microservices." },
      { value: "15 min", title: "Deploys", desc: "CI/CD with Docker (before: 2 hours)." },
      { value: "99.9%", title: "Uptime", desc: "On AWS EC2 during the period." },
    ],
  },
  servicios: {
    eyebrow: "03 / What I do",
    heading: "Services",
    items: [
      "Full-stack web development focused on performance and conversion.",
      "Modern architecture and microservices migrations.",
      "CI/CD implementation and automated deployments.",
      "Real-time dashboards for operations and metrics.",
      "Secure integrations with APIs, AI and databases.",
      "Support for mobile products and cross-platform experiences.",
    ],
  },
  experiencia: {
    eyebrow: "04 / Experience",
    heading: "Experience",
    items: [
      {
        title: "CHAPITEC, Founder, Organizer & Technical Speaker",
        period: "Jan 2023 – Present",
        bullets: [
          "Community with 500+ members and 15+ technical events.",
          "200+ cumulative attendees across talks and workshops.",
          "Led 8 developers to design and deploy the official website.",
          "Talks on AI + SQL and modern development with Next.js, TypeScript and Docker.",
          "Partnerships with tech companies in Peru.",
        ],
      },
      {
        title: "Full Stack Developer (Internship), Expertis",
        period: "Mar 2025 – Dec 2025",
        bullets: [
          "-40% load time with lazy loading and code splitting in React.",
          "Monolith → microservices (+60% scalability).",
          "Responsive UI with React + Tailwind for 3 critical modules.",
          "CI/CD with Docker: 2h → 15min.",
          "AWS EC2 with 99.9% uptime during the period.",
        ],
      },
      {
        title: "Freelance, Client projects and own products",
        period: "2024 – Present",
        bullets: [
          "Multitenant inventory SaaS (Kardex360) with RLS and AI operations.",
          "POS and fuel logistics for Grupo Lopar, architected for multi-branch.",
          "Internal management system for an architecture firm (Arquitectos Salazar).",
          "Personal AI platform (Mentes Creadoras) and freelancer finance app (Caudal).",
        ],
      },
    ],
  },
  casosEstudio: {
    eyebrow: "05 / Real cases",
    heading: "Case studies",
    description: "Real projects focused on results, solid architecture and clear metrics.",
    labels: { problema: "Problem:", solucion: "Solution:", resultado: "Result:", stack: "Stack:", rol: "Role:" },
    ctaLive: "View live project",
    cases: [
      {
        title: "Kardex360 (Caldex Solutions)",
        problem: "Caldex needed its own SaaS base for inventory, sales and purchases, isolated per client.",
        solution: "Multitenant architecture with Row Level Security from the first migration and AI operations via a private backend.",
        result: "The base that runs Caldex's inventory, sales, purchases and reporting modules.",
        stack: "Next.js, TypeScript, Supabase, OpenAI API",
        role: "Full-stack",
        url: "https://kardex360.vercel.app/",
      },
      {
        title: "Grupo Lopar",
        problem: "The distributor needed to unify wine sales and fuel logistics in a single system.",
        solution: "POS with pricing tiers and session-based cash registers, plus a logistics module with real-time tanks, fleet and dispatch tracking.",
        result: "Sales operations and diesel logistics controlled from a single panel.",
        stack: "React, Vite, Supabase, Gemini API",
        role: "Full-stack",
        url: "https://www.grupolopar.com/",
      },
      {
        title: "Arquitectos Salazar",
        problem: "The architecture firm tracked projects, sites and finances in scattered spreadsheets, with no centralized control.",
        solution: "Internal system with custom role-based auth, site and order tracking, and finances with automatic distribution by area.",
        result: "Unified management of projects, expenses and profits for the firm.",
        stack: "Next.js 16, Supabase, Tailwind v4",
        role: "Full-stack",
        url: "https://arquitectos-salazar.vercel.app/",
      },
    ],
  },
  portfolio: {
    eyebrow: "08 / Selection",
    heading: "My Projects",
    description:
      "Systems designed to scale: multitenant SaaS, point-of-sale and logistics platforms, mobile apps and AI integrations built with solid architecture from the first commit.",
    filters: { all: "All", frontend: "Frontend", backend: "Backend", fullstack: "Fullstack" },
    client: "Client:",
    ctaLive: "View live project",
    ctaCode: "View code on GitHub",
    privateCode: "Private code",
    privateCodeClient: "Private code (client project)",
    zoomHint: "View larger image",
  },
  projects: {
    kardex360: {
      title: "Kardex360",
      client: "Caldex Solutions",
      description:
        "Multitenant SaaS architecture designed from scratch, with a clear split between domain, service layer and data access for inventory, sales, purchases and reporting. Tenant isolation enforced at the database level via Row Level Security as a real security boundary, not just application logic. AI operations layer orchestrated by a private backend that validates and executes domain actions, without exposing free-form SQL to the model, plus barcode scanning. Designed to scale to new tenants without schema migrations.",
    },
    "grupo-lopar": {
      title: "Grupo Lopar",
      client: "Grupo Lopar",
      description:
        "Backend modeling two distinct business operations, sales and fuel logistics, under one domain: pricing tiers, split payments and cash-register closing resolved as service-layer logic, not on the client. Logistics module with real-time tank, fleet, driver and dispatch control via subscriptions. Data model built to scale to more branches without duplicating business rules.",
    },
    "arquitectos-salazar": {
      title: "Arquitectos Salazar",
      client: "Arquitectos Salazar",
      description:
        "Internal system with custom-built authentication and role/permission-based access control, not a generic package. Automatic financial distribution engine that splits income and costs by project area (proposal, 3D modeling, blueprints, rendering) based on configurable business rules. Traceability of sites, orders and finances resolved with a single domain model, avoiding duplicated logic across modules.",
    },
    caudal: {
      title: "Caudal",
      description:
        "Personal finance backend with automatic transaction detection via the Gmail API under read-only OAuth, and a custom auth layer with bcrypt and JWT instead of relying on a third-party provider. Sensitive data and tokens encrypted at rest with AES-256-GCM. Income, expenses, budgets and savings goals on a data model designed to scale into multi-account support without rewriting the business layer.",
    },
    "mentes-creadoras": {
      title: "Mentes Creadoras",
      description:
        "Modular backend where each domain (tasks, workouts, AI-assisted nutrition) sits behind its own service layer over a shared database and auth, with an admin panel for user monitoring. Architected to add new modules without touching existing ones.",
    },
    "amatia-message-center": {
      title: "Amatia Message Center",
      client: "Amatia / CodeLatin",
      description:
        "Outlook-style messaging hub with a rich text editor (Lexical), calendar and drag-and-drop boards, integrated with real-time chat embedded via Rocket.Chat. GraphQL/Apollo data layer with centralized state management on a Material UI interface.",
    },
    "caldex-landing": {
      title: "Caldex Solutions: Landing",
      client: "Caldex Solutions",
      description:
        "Corporate landing page with 3D animations (Spline + react-three-fiber) and smooth scroll, optimized for performance and SEO as the entry point to Caldex Solutions' products.",
    },
    servimach: {
      title: "ServiMach",
      description:
        "Backend with a registration flow reinforced by design for requesting specialized technicians: three-stage verification (email code, identity validation via image comparison, and background checks) before enabling an account, cutting off unauthorized access at the first entry point.",
    },
    votaciones: {
      title: "Voting System",
      description:
        "Real-time backend with WebSocket for band voting and management: every state change is validated server-side and pushed to all connected clients with no refresh needed, plus an admin CRUD to run the event.",
    },
  },
  comunidad: {
    eyebrow: "06 / Community",
    heading: "Community & talks",
    bioPre: "I founded and lead",
    chapitecName: "CHAPITEC",
    bioPost:
      ", a university programming community with events, workshops and hackathons. I also speak on modern development and applied AI.",
    bullets: ["500+ active members", "15+ technical events", "Partnerships with tech companies in Peru"],
    imageAlt: "CHAPITEC community",
  },
  mobile: {
    eyebrow: "07 / Mobile",
    heading: "Also on mobile",
    appName: "AlpaChange",
    bio1Pre: "",
    bio1Post:
      ", native Kotlin app to report and manage academic infrastructure incidents in real time, built for UNTELS.",
    bio2: "Institutional login, reports with photo and map location, notifications, roles (student/faculty/admin) and background sync.",
    bullets: [
      "Firebase Auth, Realtime Database and Cloud Messaging",
      "Photo reports (Cloudinary) and map (OpenStreetMap)",
      "Background service with real-time sync",
    ],
    comingSoon: "Screenshots coming soon",
  },
  contacto: {
    eyebrow: "09 / Contact",
    heading: "Let's talk about your project",
    description:
      "Ready to launch or scale your product? I'm available remote or hybrid from Lima, Peru. Reach out through the form or directly below.",
    availability: "Available for new projects",
    location: "Lima, Peru (remote / hybrid)",
    formTitle: "Send me a message",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your message",
    send: "Send",
  },
  lightbox: { captureLabel: "screenshot", close: "Close" },
  menu: { openLabel: "Open menu", closeLabel: "Close menu", menuWord: "Menu", closeWord: "Close" },
  langToggle: { label: "Language" },
};

export const dictionaries: Record<Language, Dictionary> = { es, en };
