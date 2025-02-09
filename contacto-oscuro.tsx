"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactoOscuro() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", { nombre, email, mensaje })
    // Reiniciar los campos después del envío
    setNombre("")
    setEmail("")
    setMensaje("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md bg-gray-800 text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-400">Contáctame</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-purple-400"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-purple-400"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tu mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-purple-400"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Enviar <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

