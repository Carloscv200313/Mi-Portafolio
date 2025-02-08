export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  icon: string // Nombre del icono de Lucide
  link?: string // Enlace opcional al certificado o artículo
}

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Primer Puesto en Concurso de Programación",
    description: "Ganador del primer lugar en el Hackathon Nacional de Innovación Tecnológica",
    date: "Junio 2023",
    icon: "Trophy",
    link: "https://ejemplo.com/certificado-hackathon",
  },
  {
    id: "2",
    title: "Certificado de Participación",
    description: "Participación destacada en el Simposio Internacional de Desarrollo Web",
    date: "Marzo 2023",
    icon: "Award",
    link: "https://ejemplo.com/certificado-simposio",
  },
  {
    id: "3",
    title: "Artículo Publicado",
    description: '"Innovaciones en React: Un vistazo al futuro del desarrollo frontend" publicado en TechCrunch',
    date: "Septiembre 2023",
    icon: "FileText",
    link: "https://techcrunch.com/mi-articulo",
  },
  {
    id: "4",
    title: "Reconocimiento por Contribución Open Source",
    description: "Contribución significativa al proyecto de código abierto Next.js",
    date: "Diciembre 2023",
    icon: "Github",
    link: "https://github.com/vercel/next.js/pulls?q=is%3Apr+author%3Atuusuario",
  },
]

