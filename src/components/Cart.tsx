import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react"
import type React from "react" // Added import for React

export default function Cart() {
    return (
        <div className="max-w-sm mx-auto p-2">
            <div className="rounded-xl p-6 flex flex-col items-center space-y-4">
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 rounded-full ring-4 ring-teal-400/20 overflow-hidden">
                    <Image
                        src="/fondo.jpg"
                        alt="Profile picture"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Name and Title */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-white">Carlos Calderon Vega</h2>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                    <SocialLink href="https://github.com" icon={<Github />} />
                    <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
                    <SocialLink href="https://twitter.com" icon={<Twitter />} />
                    <SocialLink href="mailto:email@example.com" icon={<Mail />} />
                    <SocialLink href="https://yourwebsite.com" icon={<Globe />} />
                </div>
            </div>
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

