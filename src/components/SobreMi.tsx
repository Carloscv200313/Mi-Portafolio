"use client";
import { motion } from "framer-motion";
import { Code2, Database, Blocks, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stacks = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["TypeScript, JavaScript ES6+", "React, Next.js (App Router)", "Tailwind CSS, Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend & datos",
    items: ["Node.js, Express, Python", "Supabase / PostgreSQL, MySQL, SQL Server", "APIs REST, GraphQL, RLS"],
  },
  {
    icon: Blocks,
    title: "Arquitectura & patrones",
    items: ["Multitenancy, RLS por diseño", "Auth propia, control de acceso por roles", "Modelado de dominio, capas de servicio"],
  },
  {
    icon: Wrench,
    title: "Herramientas & DevOps",
    items: ["Git, GitHub Actions", "Docker, Docker Compose", "AWS (EC2, S3, RDS)"],
  },
];

export default function SobreMi() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute -top-10 left-1/3 h-56 w-56 rounded-full bg-accent-blue/5 blur-3xl" />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div {...fadeIn} className="space-y-5">
          <p className="eyebrow">01 / Sobre mí</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Ingeniería de producto,
            <br />
            no solo código.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-text-secondary max-w-xl">
            Soy Carlos Sebastián Calderón Vega, desarrollador full-stack en Lima, Perú. Diseño e
            implemento sistemas completos de punta a punta —modelado de dominio, arquitectura
            multitenant, autenticación y control de acceso, integraciones con IA— para negocios reales:
            distribuidoras, estudios de arquitectura, freelancers y SaaS propios. Priorizo decisiones de
            arquitectura que sostengan el crecimiento del negocio: aislamiento de datos por diseño,
            capas de servicio claras y sistemas que se puedan extender sin reescribirse. Fuera del
            código, fundé y lidero <span className="text-text-primary">CHAPITEC</span>, una comunidad
            universitaria de programación con más de 500 miembros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stacks.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <Card className="bg-bg-light/70 backdrop-blur border border-white/10 text-text-primary transition-all hover:border-accent-blue/40 hover:-translate-y-1 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-accent-blue" />
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  </div>
                  <ul className="space-y-1.5 text-sm text-text-secondary">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
