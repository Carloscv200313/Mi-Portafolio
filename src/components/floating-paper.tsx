"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Database, Server, Laptop, Code, Globe, Cloud } from "lucide-react"
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiDocker } from "react-icons/si"

const icons = [Database, Server, Laptop, Code, Globe, Cloud, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiDocker]

export function FloatingPaper ({ count = 10 }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-full">
      {Array.from({ length: count }).map((_, i) => {
        const Icon = icons[i % icons.length]
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
              y: [
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
              ],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="relative w-16 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center transform hover:scale-110 transition-transform">
              <Icon className="w-8 h-8 text-blue-400/50" />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

