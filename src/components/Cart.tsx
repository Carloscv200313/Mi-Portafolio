import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Globe } from "lucide-react"
import type React from "react" // Added import for React
import { motion } from "framer-motion"
export default function Cart() {
    return (
        <div className="w-full p-2">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="rounded-xl p-6 flex flex-col items-center space-y-4">
                    {/* Profile Image Container */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-14">
                        {/* SVG de fondo (más grande y centrado) */}
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full scale-150 z-[-1]">
                            <path fill="#51a6d6" d="M52.1,-63.5C66.2,-50.1,75.6,-32.6,80.4,-13.1C85.1,6.4,85.2,27.9,76.2,44.3C67.1,60.8,48.8,72.3,29.5,77.9C10.3,83.5,-10,83.2,-26,75.6C-42,68,-53.8,52.9,-61.1,36.9C-68.3,20.9,-71,4,-68.6,-12.5C-66.2,-29,-58.7,-45,-46.4,-58.7C-34.1,-72.4,-17.1,-83.7,0.9,-84.8C18.9,-85.9,37.9,-76.8,52.1,-63.5Z" transform="translate(100 100)" />
                        </svg>

                        {/* Imagen de perfil */}
                        <Image
                            src="/foto4.png"
                            alt="Profile photo"
                            fill
                            className="object-cover scale-125"
                        />
                    </div>
                    {/* Social Links */}
                    <div className="relative flex space-x-4">
                        <SocialLink href="https://github.com/Carloscv200313" icon={<Github />} />
                        <SocialLink href="https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/" icon={<Linkedin />} />
                        <SocialLink href="https://carlos-calderon.vercel.app/" icon={<Globe />} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

interface SocialLinkProps {
    href: string
    icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
    return (
        <Link
            href={href}
            className="p-2 text-zinc-400 hover:text-teal-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </Link>
    )
}

