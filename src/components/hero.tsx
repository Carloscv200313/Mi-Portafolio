"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Download } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-full bg-transparent text-text-primary">
      <div className="w-full h-full container flex items-center justify-center mx-auto md:px-0 px-4 relative z-10 rounded-3xl">
        <div className="w-full h-full text-start py-5 md:p-4 flex flex-col justify-center">

          <motion.p
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="eyebrow pb-4 w-2/3 md:w-auto"
          >
            {t.hero.badge}
          </motion.p>

          <div className="space-y-4 md:space-y-8 pb-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
              className="font-display text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02]"
            >
              {t.hero.titleLine1}
              <br />
              <span className="text-accent-blue">{t.hero.titleHighlight}</span> {t.hero.titleLine2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-text-secondary text-sm md:text-lg md:max-w-2xl max-w-xl leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-wrap gap-2 font-mono text-[11px] md:text-xs uppercase tracking-wider text-text-secondary"
            >
              {t.hero.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-bg-light/60">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-row flex-wrap items-center justify-start gap-2.5 sm:gap-4"
          >
            <Button
              size="lg"
              className="bg-accent-blue text-bg-dark hover:bg-accent-blue/85 px-3.5 sm:px-8 text-sm sm:text-base rounded-full font-semibold whitespace-nowrap"
              onClick={() => scrollToSection("contacto")}
            >
              <Briefcase className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              {t.hero.ctaPrimary}
            </Button>

            <Button
              onClick={() => scrollToSection("proyectos")}
              size="lg"
              variant="outline"
              className="border border-white/15 bg-transparent text-text-primary hover:bg-white/5 hover:border-white/30 transition-all duration-300 rounded-full px-3.5 sm:px-8 text-sm sm:text-base whitespace-nowrap"
            >
              {t.hero.ctaSecondary}
              <ArrowUpRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-white/15 bg-transparent text-text-primary hover:bg-white/5 hover:border-white/30 transition-all duration-300 rounded-full px-3.5 sm:px-8 text-sm sm:text-base whitespace-nowrap"
            >
              <a href="/CV_Carlos_Calderon.pdf" download>
                {t.hero.ctaCv}
                <Download className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
