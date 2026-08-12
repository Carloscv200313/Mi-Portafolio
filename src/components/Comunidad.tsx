"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Comunidad() {
  const { t } = useLanguage();
  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute -top-10 right-10 h-52 w-52 rounded-full bg-accent-blue/5 blur-3xl" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">{t.comunidad.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            {t.comunidad.heading}
          </h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            {t.comunidad.bioPre} <span className="text-text-primary">{t.comunidad.chapitecName}</span>
            {t.comunidad.bioPost}
          </p>
          <ul className="text-text-secondary space-y-2 text-sm md:text-base font-mono">
            {t.comunidad.bullets.map((b) => (
              <li key={b}>&gt; {b}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-bg-light/70"
        >
          <Image
            src="/ponencia-04.png"
            alt={t.comunidad.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 520px, 100vw"
          />
        </motion.div>
      </div>
    </div>
  );
}
