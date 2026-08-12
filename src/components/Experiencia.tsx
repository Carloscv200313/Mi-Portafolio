"use client";
import { Card, CardContent } from "@/components/ui/card";

const experience = [
  {
    title: "CHAPITEC — Fundador, Organizador y Ponente Técnico",
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
    title: "Desarrollador Full Stack (Prácticas) — Expertis",
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
    title: "Freelance — Proyectos para clientes y productos propios",
    period: "2024 – Presente",
    bullets: [
      "SaaS multitenant de inventario (Kardex360) con RLS e IA operativa.",
      "POS y logística de combustible para Grupo Lopar, con arquitectura pensada para multi-sucursal.",
      "Sistema de gestión interna para un estudio de arquitectura (Arquitectos Salazar).",
      "Plataforma personal con IA (Mentes Creadoras) y finanzas para freelancers (Caudal).",
    ],
  },
];

export default function Experiencia() {
  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28 text-text-primary">
      <div className="pointer-events-none absolute -bottom-10 left-10 h-56 w-56 rounded-full bg-accent-green/5 blur-3xl" />
      <div className="mb-10">
        <p className="eyebrow mb-3">04 / Trayectoria</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
          Experiencia
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {experience.map((item) => (
          <Card
            key={item.title}
            className="bg-bg-light/70 border border-white/10 backdrop-blur h-full transition-transform duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-accent-blue" />
            <CardContent className="p-6">
              <h3 className="font-display text-xl font-semibold text-text-primary">{item.title}</h3>
              <p className="text-text-secondary text-sm mb-4">{item.period}</p>
              <ul className="space-y-2 text-text-secondary text-sm">
                {item.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
