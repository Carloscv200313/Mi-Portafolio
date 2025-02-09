"use client"
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, User, Mail, MessageSquare, PhoneCall } from "lucide-react";
export default function ContactoOscuroMejorado() {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_aeyw9ha', 'template_4v7rme2', form.current, 'sXPhw8Cvp4MSi3Kls')
        .then(() => {
          console.log('SUCCESS!');
          form.current?.reset();
        })
        .catch((error) => console.log('FAILED...', error));
    }
  };

  return (
    <div 
      className="min-h-[80vh] flex items-center justify-center p-4 relative bg-fixed bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/fondo.jpg')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/85"></div>

      <Card className="w-full max-w-5xl bg-gray-900/80 backdrop-blur-md text-white shadow-lg relative z-10 p-0">
        <CardHeader>
          <CardTitle className="text-4xl lg:text-5xl font-bold text-center">
            Contáctame
          </CardTitle>
        </CardHeader>
        {/* Descripción Motivadora */}
        <p className="text-center text-base text-gray-300 px-4 mb-6">
          🚀 <strong>¿Buscas a alguien comprometido, apasionado y listo para nuevos desafíos?</strong>  
          Estoy disponible para trabajar en proyectos emocionantes y colaborar en soluciones innovadoras.  
          Ya sea que tengas una idea en mente, un reto que enfrentar o simplemente quieras conectar,  
          estaré encantado de escuchar y contribuir con mi experiencia.  
          <br /> <strong>¡Hablemos y hagamos que las cosas sucedan!</strong>  
        </p>

        <CardContent>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4 ">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
              <Input
                type="text"
                name="name"
                placeholder="Nombre"
                required
                className="pl-10 bg-gray-800 border-gray-700 placeholder-white/50 text-white focus:border-accent-green"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="pl-10 bg-gray-800 border-gray-700 placeholder-white/50 text-white focus:border-accent-green"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-white/50" size={18} />
              <Textarea
                placeholder="Tu mensaje"
                name="mensaje"
                required
                className="pl-10 bg-gray-800 border-gray-700 placeholder-white/50 text-white focus:border-accent-green"
                rows={4}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent-green hover:bg-accent-green/80 text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Enviar
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>

        {/* 📞 Iconos de Contacto */}
        <div className="my-6 text-center">
          <p className="text-lg font-semibold text-gray-300 mb-2">📲 También puedes contactarme aquí:</p>
          <div className="flex md:flex-row flex-col justify-center items-center  gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <PhoneCall size={20} className="text-accent-green" />
              <span className="text-lg">922 814 060</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={20} className="text-accent-green" />
              <span className="text-lg">carlosscv200313@gmail.com</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
