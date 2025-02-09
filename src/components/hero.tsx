"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
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
    <div className="relative min-h-[calc(100vh-85px)] flex items-center ">
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={10} />
      </div>
      <div className="w-full flex md:flex-row flex-col ">
        {/* Primera columna */}
        <div className="w-full md:w-2/3 lg:w-1/2 container flex items-center justify-center mx-auto px-4 relative z-10  backdrop-blur-sm  rounded-3xl ">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-5xl md:text:6xl lg:text-7xl xl:text-7xl  font-bold text-white my-6 md:mx-10 mx-2">
              ¡Hola! Soy
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
                  {" "}
                  Carlos Calderón
                </span>
                <span>👨‍💻</span>
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="text-white text-start max-w-3xl mx-auto space-y-4  mb-6 text-sm  lg:text-lg px-4 lg:px-10 font-sans">
                  <p className="text-lg">
                    Soy estudiante de sexto ciclo de <strong>Ingeniería de Sistemas</strong> y un apasionado desarrollador
                    <span className="text-blue-400 font-semibold"> Full Stack</span> 💻. Me gusta crear experiencias digitales que no solo funcionen bien, 
                    sino que también sorprendan. Desarrollo sistemas eficientes que hagan la tecnología sea más accesible y sencilla de usar. Siempre busco innovar, 
                    encontrar soluciones diferentes y convertir ideas en productos reales que generen impacto. 🚀
                  </p>
                  <div className="grid grid-cols-2 text-left">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">🖥️ Frontend</h3>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>HTML, CSS, JavaScript, TypeScript</li>
                        <li>Tailwind, React, Vue, Next.js</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">⚙️ Backend & Bases de Datos</h3>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Node.js, Express</li>
                        <li>MongoDB, SQL Server</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">🛠️ Herramientas & Control de Versiones</h3>
                    <p className="text-gray-300">Git & GitHub</p>
                  </div>

                  <p className="text-lg font-semibold text-green-400">
                    📩 ¡Estoy listo para nuevos desafíos y oportunidades! 😊
                  </p>
                </div>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-row items-center justify-center gap-4 mb-6"
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

