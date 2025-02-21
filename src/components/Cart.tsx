import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Globe } from "lucide-react"
import type React from "react" // Added import for React
import { motion } from "framer-motion"
export default function Cart() {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="rounded-xl p-6 flex flex-col items-center space-y-4">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-14">
                    {/* Imagen de perfil */}
                    <Image
                        src="/robot.gif"
                        //src="/robotcito.gif" 
                        alt="Profile photo"
                        unoptimized
                        fill
                        className="object-cover scale-125 rounded-b-full"
                    />
                </div>
                {/* Social Links */}
                <div className="relative flex space-x-4">
                    <SocialLink href="https://github.com/Carloscv200313" icon={<Github className="h-8 w-8" />} />
                    <SocialLink href="https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/" icon={<Linkedin className="h-8 w-8" />} />
                    <SocialLink href="https://carlos-calderon.vercel.app/" icon={<Globe  className="h-8 w-8"/>} />
                </div>
            </div>
        </motion.div>
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
            className="p-2  hover:text-blue-600 transition-colors text-white "
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </Link>
    )
}

