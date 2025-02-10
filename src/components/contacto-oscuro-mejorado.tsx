"use client";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import Image from 'next/image';

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
    <div className="min-h-[90vh] flex items-center justify-center p-4 bg-fixed bg-no-repeat bg-center">
  <div className="relative z-10 w-full px-10 grid md:grid-cols-2 gap-10 h-full items-center justify-center text-white">
    
    {/* Imagen GIF */}
    <div className="flex justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <Image
          fill
          unoptimized
          src="/celular.gif"
          alt="Contacto"
          className="object-cover scale-150 rounded-b-full"
        />
      </div>
    </div>
    {/* Formulario */}
    <Card className="bg-transparent backdrop-blur-sm max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl lg:text-5xl font-bold text-center">
          Contáctame
        </CardTitle>
      </CardHeader>
      <p className="text-center text-base text-gray-300 px-4 mb-6">
        🚀 <strong>¿Buscas a alguien comprometido, apasionado y listo para nuevos desafíos? </strong>
        Estoy disponible para trabajar en proyectos emocionantes.
        <br /> <strong>¡Hablemos y hagamos que las cosas sucedan!</strong>
      </p>
      <CardContent>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="pl-10 bg-gray-800 border-gray-700 placeholder-white/50 text-white"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
            <Input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              className="pl-10 bg-gray-800 border-gray-700 placeholder-white/50 text-white"
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-white/50" size={18} />
            <Textarea
              placeholder="Tu mensaje"
              name="mensaje"
              required
              className="pl-10 bg-gray-800 border-gray-700 placeholder-white/50 text-white"
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#2570eb] hover:bg-accent-green/80 text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Enviar
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</div>

  );
}
