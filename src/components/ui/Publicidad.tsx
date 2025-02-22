"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Publicidad() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isVisible])
    if (!isVisible) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 animate-in fade-in duration-300">
            <Card className="w-[90%] max-w-[600px] relative animate-in zoom-in-100 duration-300">
                <CardContent className="p-4">
                    <div className="relative">
                        {/* Placeholder image for the advertisement */}
                        <Image
                            src="/publicidad.gif"
                            alt="Advertisement"
                            className="w-full object-cover rounded-xl"
                            height={673}
                            width={952}
                        />
                    </div>
                </CardContent>
                <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full hover:bg-red-600 hover:text-destructive-foreground"
                    onClick={() => setIsVisible(false)}
                >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Cerrar anuncio</span>
                </Button>
            </Card>
        </div>
    )
}

