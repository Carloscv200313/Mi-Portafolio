"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { type Project, projects, type ProjectCategory } from "@/../types/project"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lock, Github, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image"
import ImageLightbox from "@/components/ImageLightbox"
import { setOverlayOpen } from "@/lib/overlay-state"

const categories: ProjectCategory[] = ["Frontend", "Backend", "Fullstack"]

function ProjectThumb({ project, className }: { project: Project; className: string }) {
  const image = project.images?.[0]
  if (image) {
    return (
      <Image
        src={image}
        alt={project.title}
        height={460}
        width={900}
        className={className}
      />
    )
  }
  return (
    <div
      className={`${className} relative flex items-center justify-center overflow-hidden bg-bg-light border border-white/10`}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-accent-blue/10 blur-2xl" />
      <span className="relative font-display text-xl md:text-2xl font-bold text-center px-6 text-text-primary/90">
        {project.title}
      </span>
    </div>
  )
}

/** Carrusel controlado (imagen + índice viven en el padre) para poder abrir el lightbox en la misma foto. */
function ProjectGallery({
  project,
  className,
  index,
  onIndexChange,
  onOpenLightbox,
}: {
  project: Project
  className: string
  index: number
  onIndexChange: (i: number) => void
  onOpenLightbox: () => void
}) {
  const images = project.images ?? []

  if (images.length === 0) {
    return <ProjectThumb project={project} className={className} />
  }

  if (images.length === 1) {
    return (
      <button
        type="button"
        onClick={onOpenLightbox}
        className={`${className} group relative block overflow-hidden`}
        aria-label="Ver imagen en grande"
      >
        <Image src={images[0]} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
          <ZoomIn className="h-6 w-6 text-white" />
        </div>
      </button>
    )
  }

  const prev = () => onIndexChange((index - 1 + images.length) % images.length)
  const next = () => onIndexChange((index + 1) % images.length)

  return (
    <div className={`${className} relative overflow-hidden`}>
      <button
        type="button"
        onClick={onOpenLightbox}
        className="group absolute inset-0 z-0"
        aria-label="Ver imagen en grande"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`${project.title} — captura ${index + 1} de ${images.length}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
          <ZoomIn className="h-6 w-6 text-white" />
        </div>
      </button>

      <button
        type="button"
        aria-label="Anterior"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-bg-dark/70 text-text-primary hover:bg-bg-dark"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-bg-dark/70 text-text-primary hover:bg-bg-dark"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation()
              onIndexChange(i)
            }}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-4 bg-accent-blue" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectLink({ project }: { project: Project }) {
  if (project.demoUrl) {
    return (
      <Button
        asChild
        className="w-full bg-accent-blue text-bg-dark hover:bg-accent-green transition-colors duration-300"
      >
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          Ver proyecto en vivo <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </Button>
    )
  }
  if (project.repoUrl) {
    return (
      <Button
        asChild
        className="w-full bg-accent-blue text-bg-dark hover:bg-accent-green transition-colors duration-300"
      >
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          Ver código en GitHub <Github className="ml-2 h-4 w-4" />
        </a>
      </Button>
    )
  }
  return (
    <div className="flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-bg-light/50 py-2 text-sm text-text-secondary">
      <Lock className="h-4 w-4" />
      Código privado{project.client ? ` — proyecto de cliente (${project.client})` : ""}
    </div>
  )
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectCategory | "all">("all")
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  // Avisa al resto del sitio (botón flotante del menú mobile) que hay un overlay a
  // pantalla completa cubriendo la página.
  const overlayOpen = !!selectedProject || lightboxOpen
  useEffect(() => {
    if (!overlayOpen) return
    setOverlayOpen(true)
    return () => setOverlayOpen(false)
  }, [overlayOpen])

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setGalleryIndex(0)
  }

  return (
    <div className="relative container mx-auto px-4 py-16 bg-transparent text-text-primary z-10">
      <div className="pointer-events-none absolute -top-6 left-10 h-44 w-44 rounded-full bg-accent-blue/5 blur-3xl" />
      <div className="text-center mb-8">
        <p className="eyebrow">08 / Selección</p>
      </div>
      <TextAnimate animation="slideLeft" by="character"
        className="font-display text-4xl lg:text-7xl font-bold mb-10 text-center text-text-primary">
        Mis Proyectos
      </TextAnimate>
      <p className="text-center text-text-secondary max-w-3xl mx-auto mb-8">
        Sistemas diseñados para escalar: SaaS multitenant, plataformas de punto de venta y logística,
        apps móviles e integraciones con IA construidas con arquitectura sólida desde el primer commit.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"
      >
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className={`${filter === "all" ? "bg-accent-blue text-bg-dark" : "text-text-secondary border-text-secondary"
            } hover:bg-accent-blue hover:text-bg-dark transition-colors duration-300`}
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className={`${filter === category ? "bg-accent-blue text-bg-dark" : "text-text-secondary border-text-secondary"
              } hover:bg-accent-blue hover:text-bg-dark transition-colors duration-300`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </motion.div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4" layout>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className="cursor-pointer h-full overflow-hidden bg-bg-light/70 border border-white/10 backdrop-blur hover:border-accent-blue transition-colors duration-300 shadow-lg shadow-black/30"
                onClick={() => openProject(project)}
              >
                <CardContent className="p-4 ">
                  <ProjectThumb
                    project={project}
                    className="w-full h-36 lg:h-56 object-cover rounded-xl mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                  <h3 className="font-display text-xl font-semibold mb-2 text-text-primary">{project.title}</h3>
                  {project.client && (
                    <p className="text-xs text-text-secondary/70 mb-1">Cliente: {project.client}</p>
                  )}
                  <p className="text-sm text-text-secondary line-clamp-2">{project.description}</p>
                  <Badge className="mt-2 bg-accent-green text-bg-dark">{project.category}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent
            onInteractOutside={(e) => {
              // El lightbox vive en su propio portal fuera del modal: sin esto,
              // Radix interpreta el click ahí como "click afuera" y cierra el modal.
              if (lightboxOpen) e.preventDefault()
            }}
            className="w-[calc(100vw-2rem)] max-w-[420px] md:max-w-[520px] max-h-[90vh] overflow-y-auto bg-bg-light/90 text-text-primary border border-white/10 backdrop-blur"
          >
            <DialogHeader>
              <DialogTitle className="font-display text-text-primary">{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <ProjectGallery
              project={selectedProject}
              className="w-full h-36 lg:h-56 object-cover rounded-md mb-4"
              index={galleryIndex}
              onIndexChange={setGalleryIndex}
              onOpenLightbox={() => setLightboxOpen(true)}
            />
            {selectedProject.client && (
              <p className="text-xs text-text-secondary/70 -mt-2 mb-2">Cliente: {selectedProject.client}</p>
            )}
            <DialogDescription className="text-text-secondary">{selectedProject.description}</DialogDescription>
            <div className="flex flex-wrap gap-2 my-4">
              {selectedProject.languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="secondary"
                  className="bg-white/5 border border-white/10 text-text-secondary font-mono text-[11px]"
                >
                  {lang}
                </Badge>
              ))}
            </div>
            <ProjectLink project={selectedProject} />
          </DialogContent>
        )}
      </Dialog>

      {/* Sin AnimatePresence: combinado con createPortal, la animación de salida se queda
          pegada en opacity 0 sin desmontar. El fade de entrada (initial/animate) alcanza. */}
      {lightboxOpen && selectedProject && (
        <ImageLightbox
          title={selectedProject.title}
          images={selectedProject.images ?? []}
          index={galleryIndex}
          onIndexChange={setGalleryIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}
