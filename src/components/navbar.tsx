"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"
import Image from "next/image"

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="md:fixed top-0 left-0 w-full z-40 hidden md:flex items-center justify-between px-6 py-2 bg-black/85 backdrop-blur-sm border-b border-white/20"
    >
      <Link href="/" className="flex items-center space-x-2" >
        <Image 
          alt="iamge"
          src={"/icono.png"}
          height={80}
          width={360}
        />
      </Link>

      <div className="hidden md:flex items-center space-x-10 text-xl text-gray-300 transition-colors">
        <div className="relative group">
          <button onClick={() => scrollToSection("hero")} className="hover:text-white">Inicio</button>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
        </div>

        <div className="relative group">
          <button onClick={() => scrollToSection("about")} className="hover:text-white">Sobre Mi</button>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
        </div>

        <div className="relative group">
          <button onClick={() => scrollToSection("portfolio")} className="hover:text-white">Proyectos</button>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
        </div>

        <div className="relative group">
          <button onClick={() => scrollToSection("contacto")} className="hover:text-white">Contacto</button>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
        </div>
      </div>
    </motion.nav>
  )
}