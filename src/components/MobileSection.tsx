"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import { setOverlayOpen } from "@/lib/overlay-state";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const screenshots: string[] = [
  "/apachange-01.jpeg",
  "/apachange-02.jpeg",
  "/apachange-03.jpeg",
  "/apachange-04.jpeg",
];

export default function MobileSection() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (screenshots.length < 2 || lightboxOpen) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % screenshots.length), 3200);
    return () => clearInterval(id);
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    setOverlayOpen(true);
    return () => setOverlayOpen(false);
  }, [lightboxOpen]);

  return (
    <div className="relative container mx-auto px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute -bottom-10 right-10 h-52 w-52 rounded-full bg-accent-green/5 blur-3xl" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">{t.mobile.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            {t.mobile.heading}
          </h2>
          <p className="text-text-secondary mb-1 leading-relaxed">
            <span className="text-text-primary font-semibold">{t.mobile.appName}</span>
            {t.mobile.bio1Post}
          </p>
          <p className="text-text-secondary mb-6 leading-relaxed">
            {t.mobile.bio2}
          </p>
          <ul className="text-text-secondary space-y-2 text-sm md:text-base font-mono">
            {t.mobile.bullets.map((b) => (
              <li key={b}>&gt; {b}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          {/* Marco tipo celular: capturas verticales rotando, clickeable para verlas en grande */}
          <div className="relative w-full max-w-[240px] sm:max-w-[260px] aspect-[9/19] rounded-[2.25rem] border-[6px] border-white/10 bg-bg-light/70 overflow-hidden shadow-xl shadow-black/40">
            <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60" />

            {screenshots.length > 0 ? (
              <>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="group absolute inset-0 z-0"
                  aria-label={t.portfolio.zoomHint}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={screenshots[index]}
                        alt={`${t.mobile.appName}, ${t.lightbox.captureLabel} ${index + 1} / ${screenshots.length}`}
                        fill
                        className="object-cover"
                        sizes="260px"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </button>

                {screenshots.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                    {screenshots.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${i === index ? "w-4 bg-accent-blue" : "w-1.5 bg-white/50"
                          }`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-grid-white/[0.02] px-6 text-center">
                <span className="font-display text-lg font-bold text-text-primary/90">
                  {t.mobile.appName}
                </span>
                <span className="text-xs text-text-secondary">{t.mobile.comingSoon}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          title={t.mobile.appName}
          images={screenshots}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
