"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Servicios() {
  const { t } = useLanguage();
  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-accent-blue/5 blur-3xl" />
      <div className="mb-10">
        <p className="eyebrow mb-3">{t.servicios.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">{t.servicios.heading}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden max-w-5xl mx-auto">
        {t.servicios.items.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-bg-dark p-6 flex gap-4 text-text-secondary text-sm md:text-base"
          >
            <span className="font-mono text-accent-blue shrink-0">{String(i + 1).padStart(2, "0")}</span>
            <span>{s}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
