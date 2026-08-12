"use client";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, User, Mail, MessageSquare, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/Carloscv200313", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carlos-sebastian-calderon-vega-0a2586285/",
    icon: Linkedin,
  },
];

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
    <div className="relative container mx-auto px-4 py-20 md:py-28">
      <div className="pointer-events-none absolute -top-10 right-10 h-56 w-56 rounded-full bg-accent-blue/5 blur-3xl" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Info de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-3">09 / Contacto</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Hablemos de tu proyecto
          </h2>
          <p className="text-text-secondary mb-8 leading-relaxed max-w-md">
            ¿Listo para lanzar o escalar tu producto? Estoy disponible en remoto o híbrido desde
            Lima, Perú. Escribime por el formulario o directo por acá.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 text-sm font-mono text-accent-blue">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
              </span>
              Disponible para nuevos proyectos
            </div>
            <a
              href="mailto:carlosscv200313@gmail.com"
              className="flex items-center gap-3 text-text-primary hover:text-accent-blue transition-colors w-fit"
            >
              <Mail className="h-4 w-4 text-accent-blue" />
              carlosscv200313@gmail.com
            </a>
            <div className="flex items-center gap-3 text-text-secondary">
              <MapPin className="h-4 w-4 text-accent-blue" />
              Lima, Perú — remoto / híbrido
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-bg-light/60 text-sm text-text-secondary hover:border-accent-blue/40 hover:text-text-primary transition-colors"
              >
                <s.icon className="h-4 w-4" />
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-bg-light/60 border border-white/10 backdrop-blur-md w-full max-w-lg mx-auto shadow-lg shadow-black/30">
            <CardHeader>
              <CardTitle className="font-display text-2xl font-bold text-text-primary">
                Envíame un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                    className="pl-10 bg-gray-900/60 border-white/10 placeholder-white/50 text-white focus-visible:ring-2 focus-visible:ring-accent-blue"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    className="pl-10 bg-gray-900/60 border-white/10 placeholder-white/50 text-white focus-visible:ring-2 focus-visible:ring-accent-blue"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-white/50" size={18} />
                  <Textarea
                    placeholder="Tu mensaje"
                    name="mensaje"
                    required
                    className="pl-10 bg-gray-900/60 border-white/10 placeholder-white/50 text-white focus-visible:ring-2 focus-visible:ring-accent-blue"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent-blue hover:bg-accent-blue/85 text-bg-dark font-semibold transition-all duration-300 ease-in-out transform hover:scale-[1.02] rounded-full"
                >
                  Enviar
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
