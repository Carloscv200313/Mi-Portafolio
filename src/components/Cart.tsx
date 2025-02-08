import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Globe } from "lucide-react"
import type React from "react" // Added import for React
import { motion } from "framer-motion"
export default function Cart() {
    return (
        <div className="max-w-sm mx-auto p-2">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="rounded-xl p-6 flex flex-col items-center space-y-4">
                {/* Profile Image Container */}
                <div className="relative w-96 h-96 rounded-full ring-4 ring-bg-gradient-to-r from-blue-400 to-green-600  overflow-hidden">
                    <Image
                        src="/ponencia-02.jpg"
                        alt="Profile picture"
                        fill
                        className="object-cover"
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

