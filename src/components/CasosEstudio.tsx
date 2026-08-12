"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const cases = [
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
];

export default function CasosEstudio() {
  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28 text-text-primary">
      <div className="pointer-events-none absolute -top-10 left-10 h-48 w-48 rounded-full bg-accent-blue/5 blur-3xl" />
      <div className="mb-10">
        <p className="eyebrow mb-3">05 / Casos reales</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
          Casos de estudio
        </h2>
        <p className="text-text-secondary max-w-3xl mt-4">
          Proyectos reales con enfoque en resultados, arquitectura sólida y métricas claras.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <Card
            key={c.title}
            className="bg-bg-light/70 border border-white/10 backdrop-blur h-full transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <CardContent className="p-6 space-y-3">
              <h3 className="font-display text-xl font-semibold text-text-primary">{c.title}</h3>
              <p className="text-text-secondary text-sm">
                <span className="text-white">Problema:</span> {c.problem}
              </p>
              <p className="text-text-secondary text-sm">
                <span className="text-white">Solución:</span> {c.solution}
              </p>
              <p className="text-text-secondary text-sm">
                <span className="text-white">Resultado:</span> {c.result}
              </p>
              <p className="text-text-secondary text-sm">
                <span className="text-white">Stack:</span> {c.stack}
              </p>
              <p className="text-text-secondary text-sm">
                <span className="text-white">Rol:</span> {c.role}
              </p>
              <Button
                asChild
                className="w-full bg-accent-blue text-bg-dark hover:bg-accent-green transition-colors duration-300"
              >
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  Ver proyecto en vivo <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
