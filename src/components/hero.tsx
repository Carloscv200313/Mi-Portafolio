"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"
import Cart from "./Cart"
export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={25} />
      </div>
      <div className="w-full flex flex-row">
        {/* Primera columna */}
        <div className="w-1/2 container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
                Desarrollador
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
                  {" "}
                  Full Stack
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <FileText className="mr-2 h-5 w-5" />
                Ver Proyectos
              </Button>
              <Button size="lg" variant="outline" className="text-white border-blue-500 hover:bg-blue-500/20">
                <Sparkles className="mr-2 h-5 w-5" />
                Contactar
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Segunda columna */}
        <div className="w-1/2 flex items-center justify-center">
          <Cart />
        </div>
      </div>

      {/* Animated developer */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  )
}

