"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
//import { RoboAnimation } from "@/components/robo-animation"
import Cart from "./Cart"
export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative min-h-[calc(100vh-85px)] flex items-center">
      <div className="w-full flex md:flex-row-reverse  flex-col ">
        {/* Primera columna */}
        <div className="w-full md:w-2/3 lg:w-1/2 container flex items-center justify-center mx-auto px-4 relative z-10 rounded-3xl ">
          <div className="w-full text-start py-5 md:p-10 " >
            {/* Animación para "Hola, Soy Carlos" */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-2xl font-normal text-neutral-200 pb-2"
            >
              Hola, Soy Carlos Calderon
            </motion.h2>
            <div className="space-y-4 md:space-y-8 text-white pb-10">
              {/* Animación para "FullStack Developer" con retraso */}
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl md:text:6xl lg:text-7xl xl:text-8xl font-bold"
              >
                <span className="text-blue-500">Full</span>Stack
                <br />
                Developer
              </motion.h1>

              {/* Animación para la descripción con más retraso */}
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-gray-400 text-sm  lg:text-lg  md:max-w-7xl max-w-xl"
              >
                Actualmente recido en Perú, creo aplicaciones web completas, desde interfaces atractivas hasta sistemas eficientes en el backend, optimizando rendimiento y usabilidad
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-row items-center justify-start md:gap-4 gap-2 mb-6"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => window.open("https://drive.google.com/uc?export=download&id=1tdwwOQLrNiLEHtRthC-u_sd0tgC1dAeQ", "_blank")}
              >
                <FileText className="mr-2 h-5 w-5" />
                Descargar CV
              </Button>
              <Button onClick={() => scrollToSection("contacto")} size="lg" variant="outline" className="text-white border-blue-500 hover:bg-blue-500/20">
                <Sparkles className="mr-2 h-5 w-5" />
                Contactar
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Segunda columna */}
        <div className="w-full md:w-1/3 lg:w-1/2 flex items-center justify-center">
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

