"use client"
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import { Send, User, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
export default function ContactoOscuroMejorado() {
  const form = useRef<HTMLFormElement | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.current) {
      emailjs
        .sendForm('service_aeyw9ha', 'template_4v7rme2', form.current, 'sXPhw8Cvp4MSi3Kls')
        .then(
          () => {
            console.log('SUCCESS!');
            form.current?.reset();
          },
          (error: { text: unknown; }) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center  p-4">
      <Card className="w-full max-w-5xl bg-white/ backdrop-blur-sm text-accent-blue shadow-lg shadow-accent-blue/20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full ring-4 ring-emerald-600  overflow-hidden">
              <Image
                src="/fotoPrincipal.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <CardHeader>
              <CardTitle className="text-4xl lg:text-7xl font-bold text-center text-accent-blue">Contáctame</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-blue/50" size={18} />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                    className="pl-10 bg-gray-800 border-gray-700 placeholder-accent-blue/50 text-accent-blue focus:border-accent-green"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-blue/50" size={18} />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    className="pl-10 bg-gray-800 border-gray-700 placeholder-accent-blue/50 text-accent-blue focus:border-accent-green"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-accent-blue/50" size={18} />
                  <Textarea
                    placeholder="Tu mensaje"
                    name="mensaje"
                    required
                    className="pl-10 bg-gray-800 border-gray-700 placeholder-accent-blue/50 text-accent-blue focus:border-accent-green"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className={`w-full bg-accent-green hover:bg-accent-green/80 text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-105`}

                >
                  Enviar
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  )
}

