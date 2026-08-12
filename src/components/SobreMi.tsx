"use client";
import { motion } from "framer-motion";
import { Code2, Database, Blocks, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const icons = [Code2, Database, Blocks, Wrench];

export default function SobreMi() {
  const { t } = useLanguage();
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
          <p className="eyebrow">{t.sobreMi.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            {t.sobreMi.heading1}
            <br />
            {t.sobreMi.heading2}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-text-secondary max-w-xl">
            {t.sobreMi.bio} <span className="text-text-primary">{t.sobreMi.chapitecName}</span>
            {t.sobreMi.communitySuffix}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.sobreMi.stacks.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.title}
                {...fadeIn}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <Card className="bg-bg-light/70 backdrop-blur border border-white/10 text-text-primary transition-all hover:border-accent-blue/40 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-accent-blue" />
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
