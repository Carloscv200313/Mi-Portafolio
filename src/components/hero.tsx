"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
//import { RoboAnimation } from "@/components/robo-animation"
import Cart from "./Cart"
export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-85px)]  flex items-center ">
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={25} />
      </div>
      <div className="w-full flex flex-row">
        {/* Primera columna */}
        <div className="w-1/2 container flex items-center justify-center mx-auto px-4 relative z-10 bg-white/ backdrop-blur-sm  rounded-3xl">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 mx-10">
                Desarrollador
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
                  {" "}
                  Full Stack
                </span>
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-white mb-6 text-start lg:text-xl px-10 font-sans">
              Hola, mi nombre es Carlos Calderón y soy un estudiante de sexto ciclo de la carrera de Ingeniería de Sistemas
              y un apasionado programador de páginas web con un enfoque Full Stack. Tengo experiencia en el desarrollo
              frontend utilizando HTML, CSS, JavaScript, TypeScript, Tailwind, React, Vue y Next.js. En el backend, trabajo con
              Node.js y Express , y manejo bases de datos como MongoDB y SQLserver. Además, estoy familiarizado con herramientas
              de control de versiones como Git. Me motiva crear soluciones completas que mejoren la experiencia del usuario,
              busco constantemente aprender y aplicar nuevas tecnologías en mis proyectos. Estoy emocionado por las oportunidades
              que se presenten para seguir creciendo en esta area.
            </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-6"
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

      {/* Animated developer 
      <div className="absolute bottom-0 left-0 w-80 h-80">
              <RoboAnimation />
            </div>*/}
    </div>
  )
}

