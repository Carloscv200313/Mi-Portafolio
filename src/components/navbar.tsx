"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import StaggeredMenu from "@/components/StaggeredMenu"
import { useLanguage } from "@/lib/i18n/LanguageContext"

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()

  const links = [
    { id: "inicio", label: t.nav.inicio, href: "/" },
    { id: "sobre-mi", label: t.nav.sobreMi, href: "/#sobre-mi" },
    { id: "proyectos", label: t.nav.proyectos, href: "/#proyectos" },
    { id: "contacto", label: t.nav.contacto, href: "/#contacto" },
  ]

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Barra completa — solo desde md hacia arriba */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:flex fixed top-0 left-0 w-full z-40 items-center justify-between gap-4 px-6 py-3 bg-bg-dark/85 backdrop-blur-md border-b border-white/10"
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            alt="Carlos Calderón"
            src={"/icono.png"}
            height={80}
            width={360}
            className="object-cover w-auto h-12"
          />
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-x-10 font-mono text-xs uppercase tracking-[0.18em] text-text-secondary">
          {links.map((link, i) => (
            <div key={link.id} className="relative group">
              <Link
                href={link.href}
                className="hover:text-text-primary transition-colors duration-200 flex items-baseline gap-1.5"
                onClick={link.id !== "inicio" ? () => scrollToSection(link.id) : undefined}
              >
                <span className="text-accent-blue/70">{String(i).padStart(2, "0")}</span>
                {link.label}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-blue transition-all duration-300 group-hover:w-full" />
            </div>
          ))}

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.langToggle.label}
            className="flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-text-secondary hover:border-accent-blue/40 hover:text-text-primary transition-colors"
          >
            <span className={language === "es" ? "text-accent-blue" : ""}>ES</span>
            <span className="opacity-40">/</span>
            <span className={language === "en" ? "text-accent-blue" : ""}>EN</span>
          </button>
        </div>
      </motion.nav>

      {/* Menú escalonado — solo debajo de md */}
      <div className="md:hidden">
        <StaggeredMenu
          items={links.map((l) => ({ label: l.label, link: l.href, ariaLabel: `${l.label}` }))}
        />
      </div>
    </>
  )
}
