"use client"
import { Laptop } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

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
      className=" flex items-center justify-between px-6 py-6 backdrop-blur-sm border-b border-white/20"
    >
      <Link href="/" className="flex items-center space-x-2" >
        <Laptop className="w-8 h-8 text-blue-500" />
        <span className="text-white font-medium text-xl">DevOps</span>
      </Link>

      <div className="hidden md:flex items-center space-x-10 text-xl text-gray-300 transition-colors">
        <div className="relative group">
          <button onClick={() => scrollToSection("hero")} className="hover:text-white">Home</button>
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