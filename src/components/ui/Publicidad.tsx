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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-in fade-in duration-300">
            <Card className="w-[90%] max-w-[600px] relative animate-in zoom-in-50 duration-300">
                <CardContent className="p-0">
                    <div className="relative">
                        {/* Placeholder image for the advertisement */}
                        <Image
                            src="/publicidad.gif"
                            alt="Advertisement"
                            className="w-full object-cover rounded-t-xl"
                            height={673}
                            width={952}
                        />
                        <Button
                            variant="secondary"
                            size="icon"
                            className="absolute top-4 right-4 rounded-full hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => setIsVisible(false)}
                        >
                            <X className="h-5 w-5" />
                            <span className="sr-only">Cerrar anuncio</span>
                        </Button>
                    </div>
                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-4 text-center">¡Nuevo Proyecto!</h3>
                        <p className="text-lg text-center text-muted-foreground mb-4">
                            Tic Tac Toe Online
                        </p>
                        <div className="flex justify-center ">
                            <Button size="lg" className="min-w-[200px] rounded-xl" onClick={() => setIsVisible(false)}>
                                Cerrar
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

