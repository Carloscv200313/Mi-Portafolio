export type ProjectCategory = "Frontend" | "Backend" | "Fullstack"

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
    category: "Fullstack",
  },
  {
    id: "2",
    title: "𝐖𝐀𝐑𝐑𝐈𝐎𝐑 𝐏𝐈𝐆",
    description: "🚀 Landing Page desarrollada para un negocio de distribución y venta de lechones 🐷. Su propósito principal es promocionar ofertas 🎉 y facilitar el contacto directo 📲 con el distribuidor. Se incorporó un botón 🔘 que redirige al WhatsApp de la empresa 💬, permitiendo a los clientes realizar sus compras de manera rápida y sencilla. 🛒✨",
    image: "/WarriorPig.png",
    languages: ["React.js","TypeScript", "Tailwind"],
    url: "https://warrior-pig.vercel.app/",
    category: "Frontend",
  },
  {
    id: "3",
    title: "Nuestro Legado",
    description: "Página web desarrollada como parte de un proyecto universitario en el que fui líder y responsable. Su objetivo es reflejar el recorrido que mis compañeros y yo tuvimos a lo largo de nuestros años en la universidad, mostrando nuestros proyectos, avances y aprendizajes. Además, incluye recomendaciones para futuras generaciones interesadas en el mundo de la tecnología. Cada integrante comparte su experiencia en distintas áreas, como análisis de datos, ciberseguridad, desarrollo web y aplicaciones móviles, entre otras. Como reconocimiento a nuestro esfuerzo, la universidad tomó este proyecto como referencia y lo publicó en su página oficial como testimonio del crecimiento y logros de sus estudiantes.",
    image: "/NuestroLegado.png",
    languages: ["React.js","TypeScript", "Tailwind"],
    url: "https://nuestro-legado.vercel.app/",
    category: "Frontend",
  },
  {
    id: "4",
    title: "Cataloogo Virtual",
    description: "Página desarrollada para explorar y comprender el funcionamiento de las pasarelas de pago. En este caso, utilicé la pasarela de PayPal mediante su propia librería, lo que permite realizar pagos directos al proveedor de manera sencilla. Este proyecto surgió como una idea para implementarlo en un futuro sistema de eCommerce. Actualmente, el sistema se encuentra en pausa para evitar que las transacciones procesadas se reflejen en mi cuenta. Sin embargo, con un pequeño ajuste en el código, puede activarse nuevamente y funcionar de manera operativa.",
    image: "/Catalogo.png",
    languages: ["React.js","TypeScript", "Tailwind"],
    url: "https://tienda-virtual-zeta.vercel.app/",
    category: "Frontend",
  },
]