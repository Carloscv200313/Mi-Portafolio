export type ProjectCategory = "frontend" | "backend" | "fullstack"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  languages: string[]
  url: string
  category: ProjectCategory
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Mi Awesome App",
    description: "Una aplicación web increíble construida con React y Node.js",
    image: "/fotoPrincipal.jpg",
    languages: ["React", "Node.js", "MongoDB"],
    url: "https://miawesomeapp.com",
    category: "fullstack",
  },
  {
    id: "2",
    title: "Cool Frontend Project",
    description: "Un proyecto frontend genial que utiliza Vue.js",
    image: "/fotoPrincipal.jpg",
    languages: ["Vue.js", "CSS", "HTML"],
    url: "https://coolfrontend.com",
    category: "frontend",
  },
  {
    id: "3",
    title: "Backend API",
    description: "Una API robusta construida con Express y PostgreSQL",
    image: "/fotoPrincipal.jpg",
    languages: ["Node.js", "Express", "PostgreSQL"],
    url: "https://mybackendapi.com",
    category: "backend",
  },
  // Agrega más proyectos aquí
]

