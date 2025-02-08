"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { type Project, projects, type ProjectCategory } from "@/../types/project"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image"

const categories: ProjectCategory[] = ["Frontend", "Backend", "Fullstack"]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectCategory | "all">("all")

  const filteredProjects = projects.filter((project) => filter === "all" || project.category === filter)

  return (
    <div className="container mx-auto px-4 py-8 bg-transparent text-text-primary">
    <TextAnimate animation="slideLeft" by="character" 
          className="text-4xl lg:text-7xl font-bold mb-10 text-center text-accent-blue">
      Mis Proyectos
    </TextAnimate>
    <div className="flex justify-center space-x-4 mb-8">
      <Button
        variant={filter === "all" ? "default" : "outline"}
        onClick={() => setFilter("all")}
        className={`${
          filter === "all" ? "bg-accent-blue text-bg-dark" : "text-text-secondary border-text-secondary"
        } hover:bg-accent-blue hover:text-bg-dark transition-colors duration-300`}
      >
        Todos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={filter === category ? "default" : "outline"}
          onClick={() => setFilter(category)}
          className={`${
            filter === category ? "bg-accent-blue text-bg-dark" : "text-text-secondary border-text-secondary"
          } hover:bg-accent-blue hover:text-bg-dark transition-colors duration-300`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
    </div>

    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
      <AnimatePresence>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className="cursor-pointer h-full overflow-hidden bg-bg-light border-text-secondary hover:border-accent-blue transition-colors duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  height={300}
                  width={600}
                  className="w-full h-64 object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2 text-accent-blue">{project.title}</h3>
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
        <DialogContent className="max-w-[340px] md:max-w-[500px] max-h-[calc(100vh-30px)] overflow-y-auto bg-bg-light text-text-primary border-text-secondary">
          <DialogHeader>
            <DialogTitle className="text-accent-blue">{selectedProject.title}</DialogTitle>
          </DialogHeader>
          <Image
            src={selectedProject.image || "/placeholder.svg"}
            alt={selectedProject.title}
            height={300}
            width={500}
            className="w-full h-56 object-cover rounded-md mb-4"
          />
          <DialogDescription className="text-text-secondary">{selectedProject.description}</DialogDescription>
          <div className="flex flex-wrap gap-2 my-4">
            {selectedProject.languages.map((lang) => (
              <Badge
                key={lang}
                variant="secondary"
                className="bg-gradient-to-r from-blue-400 to-green-600 text-bg-dark"
              >
                {lang}
              </Badge>
            ))}
          </div>
          <Button
            asChild
            className="w-full bg-accent-blue text-bg-dark hover:bg-accent-green transition-colors duration-300"
          >
            <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
              Ver Proyecto <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </DialogContent>
      )}
    </Dialog>
  </div>
  )
}

