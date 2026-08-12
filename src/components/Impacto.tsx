"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { value: "-40%", title: "Tiempo de carga", desc: "Lazy loading y code splitting en React." },
  { value: "+60%", title: "Escalabilidad", desc: "Migración de monolito a microservicios." },
  { value: "15 min", title: "Deploys", desc: "CI/CD con Docker (antes: 2 horas)." },
  { value: "99.9%", title: "Uptime", desc: "En AWS EC2 durante el periodo." },
];

export default function Impacto() {
  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute -top-16 right-10 h-56 w-56 rounded-full bg-accent-green/5 blur-3xl" />
      <div className="mb-10">
        <p className="eyebrow mb-3">02 / Resultados</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">Impacto medible</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        {metrics.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="bg-bg-dark rounded-none border-0 h-full">
              <CardContent className="p-6">
                <p className="font-display text-4xl font-bold text-accent-blue mb-3">{m.value}</p>
                <h3 className="text-sm font-semibold text-text-primary mb-1">{m.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{m.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
