"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CasosEstudio() {
  const { t } = useLanguage();
  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28 text-text-primary">
      <div className="pointer-events-none absolute -top-10 left-10 h-48 w-48 rounded-full bg-accent-blue/5 blur-3xl" />
      <div className="mb-10">
        <p className="eyebrow mb-3">{t.casosEstudio.eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
          {t.casosEstudio.heading}
        </h2>
        <p className="text-text-secondary max-w-3xl mt-4">
          {t.casosEstudio.description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {t.casosEstudio.cases.map((c) => (
          <Card
            key={c.title}
            className="bg-bg-light/70 border border-white/10 backdrop-blur h-full transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <CardContent className="p-6 space-y-3">
              <h3 className="font-display text-xl font-semibold text-text-primary">{c.title}</h3>
              <p className="text-text-secondary text-sm">
                <span className="text-white">{t.casosEstudio.labels.problema}</span> {c.problem}
              </p>
              <p className="text-text-secondary text-sm">
                <span className="text-white">{t.casosEstudio.labels.solucion}</span> {c.solution}
              </p>
              <p className="text-text-secondary text-sm">
                <span className="text-white">{t.casosEstudio.labels.resultado}</span> {c.result}
              </p>
              <p className="text-text-secondary text-sm">
                <span className="text-white">{t.casosEstudio.labels.stack}</span> {c.stack}
              </p>
              <p className="text-text-secondary text-sm">
                <span className="text-white">{t.casosEstudio.labels.rol}</span> {c.role}
              </p>
              <Button
                asChild
                className="w-full bg-accent-blue text-bg-dark hover:bg-accent-green transition-colors duration-300"
              >
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {t.casosEstudio.ctaLive} <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
