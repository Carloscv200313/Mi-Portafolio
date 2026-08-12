"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Experiencia() {
  const { t } = useLanguage();
  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28 text-text-primary">
      <div className="pointer-events-none absolute -bottom-10 left-10 h-56 w-56 rounded-full bg-accent-green/5 blur-3xl" />
      <div className="mb-10">
        <p className="eyebrow mb-3">{t.experiencia.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
          {t.experiencia.heading}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {t.experiencia.items.map((item) => (
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
