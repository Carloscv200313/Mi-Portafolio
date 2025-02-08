"use client"
import { Button } from "@/components/ui/button"
import { Laptop, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-6 backdrop-blur-sm border-b border-white/10"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Laptop className="w-8 h-8 text-blue-500" />
        <span className="text-white font-medium text-xl">Carlos Calderon</span>
      </Link>

      <div className="hidden md:flex items-center space-x-10 text-xl">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Proyectos</NavLink>
        <NavLink href="/contact">Contacto</NavLink>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
    </Link>
  )
}

