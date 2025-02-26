"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-full bg-transparent text-white">
      {/* Primera columna */}
      <div className="w-full h-full container flex items-center justify-center mx-auto md:px-0 px-4 relative z-10 rounded-3xl">
        <div className="w-full h-full text-start py-5 md:p-4 flex flex-col justify-center">
          
          {/* Animación para "Hola, Soy Carlos" */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-lg md:text-2xl font-normal text-gray-300 pb-2"
          >
            Hola, Soy <span className="text-blue-400">Carlos Calderon</span>
          </motion.h2>

          <div className="space-y-4 md:space-y-8 text-white pb-10">
            
            {/* Animación para "FullStack Developer" con degradado vibrante */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-5xl md:text-7xl xl:text-8xl font-bold"
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Full
              </span>Stack
              <br />
              Developer
            </motion.h1>

            {/* Animación para la descripción con tonos más cálidos */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-gray-400 text-sm md:text-lg md:max-w-7xl max-w-xl"
            >
              Actualmente resido en <span className="text-yellow-400">Perú</span>, creo aplicaciones web completas, 
              desde interfaces atractivas hasta sistemas eficientes en el backend, optimizando rendimiento y usabilidad.
            </motion.p>
          </div>

          {/* Botones con colorimetría optimizada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-row items-center justify-start md:gap-10 gap-2"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 shadow-lg shadow-blue-500/50"
              onClick={() =>
                window.open(
                  "https://drive.google.com/uc?export=download&id=1tdwwOQLrNiLEHtRthC-u_sd0tgC1dAeQ",
                  "_blank"
                )
              }
            >
              <FileText className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>

            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              variant="outline"
              className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Contactar
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
