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
    "id": "1",
    "title": "Sistema para una Panadería",
    "description": "Este sistema web fue desarrollado para una panadería que enfrentaba problemas de tiempo y gestión de insumos. Nuestro objetivo fue optimizar sus procesos mediante una plataforma que automatiza y organiza sus operaciones. El sistema cuenta con un login que permite a los empleados registrarse y ser redirigidos a su módulo correspondiente. Para garantizar la seguridad, cada ruta está protegida con Middleware y los tokens JWT se almacenan en cookies. La funcionalidad del sistema se estructura de la siguiente manera: Un encargado de inventario gestiona los insumos. Cuando un mozo registra un pedido, este se refleja automáticamente en la pantalla del cocinero para su preparación. El pedido también se envía a caja para su facturación y pago. Una vez completado el pago, el inventario se actualiza automáticamente, asegurando un control preciso de los productos disponibles. Tanto el cocinero como el encargado de inventario pueden bloquear un plato o insumo cuando detectan escasez. El sistema fue desarrollado con Next.js (basado en React), estilizado con Tailwind CSS y utiliza SQL Server como base de datos local. Actualmente, se ejecuta en la computadora del restaurante sin depender de servicios en la nube, lo que reduce costos y facilita su implementación.",
    "image": "/GestionDeInventario.png",
    "languages": ["React", "Next", "SQLserver", "TypeScript", "Tailwind"],
    "url": "https://github.com/Carloscv200313/Gestion-BD",
    "category": "Fullstack"
  },
  {
    id: "2",
    title: "𝐖𝐀𝐑𝐑𝐈𝐎𝐑 𝐏𝐈𝐆",
    description: "🚀 Landing Page desarrollada para un negocio de distribución y venta de lechones 🐷. Su propósito principal es promocionar ofertas 🎉 y facilitar el contacto directo 📲 con el distribuidor. Se incorporó un botón 🔘 que redirige al WhatsApp de la empresa 💬, permitiendo a los clientes realizar sus compras de manera rápida y sencilla. 🛒✨",
    image: "/WarriorPig.png",
    languages: ["React.js", "TypeScript", "Tailwind"],
    url: "https://warrior-pig.vercel.app/",
    category: "Frontend",
  },
  
  {
    id: "3",
    title: "ServiMach",
    description: "Este proyecto fue desarrollado para un concurso universitario en el que participé con un grupo de amigos en el cual estuve a cargo del funcionamiento de la plataforma, con el objetivo de mejorar el sistema de registro y reforzar la seguridad de la plataforma, ya que permitía a los usuarios solicitar técnicos especializados. Para garantizar una autenticación rigurosa, implementamos un proceso de verificación en tres etapas: primero, se envía un código de verificación al correo electrónico registrado; luego, se solicita al usuario tomarse una foto en el momento del registro y subir una imagen de su DNI, comparándolas con AWS RekognitionClient para validar su identidad (si la similitud es menor al 98.5%, el registro se rechaza); finalmente, se consulta en la base de datos de RENIEC para verificar si el individuo tiene antecedentes penales graves, denegando el acceso en caso afirmativo. Este enfoque asegura un proceso de autenticación confiable, permitiendo que solo empleados legítimos accedan a la plataforma",
    image: "/ServiMach.png",
    languages: ["React.js", "TypeScript", "Tailwind","Next","AWS","Claudinary"],
    url: "https://servi-mach.vercel.app/inicio",
    category: "Backend",
  },
  {
    "id": "4",
    "title": "Proyecto Semana de Sistemas",
    "description": "Este proyecto se realizó durante la Semana de Sistemas en mi universidad, en colaboración con la comunidad de programadores CHAPITEC. Tuve la oportunidad de participar como ponente en las áreas de Backend y Frontend, donde expliqué la utilidad del framework Next.js y las ventajas que ofrece para desarrollar proyectos escalables y seguros.\n\nEl taller contó con la asistencia de más de 40 estudiantes de Ingeniería de Sistemas y carreras afines. Durante la sesión, trabajamos con tecnologías como React.js, Tailwind CSS, TypeScript y Prisma ORM, utilizando PostgreSQL como base de datos. Como parte del aprendizaje, desarrollamos un sistema CRUD para la gestión de cursos y alumnos, aplicando buenas prácticas de desarrollo.",
    "image": "/ponencia-04.png",
    "languages": ["React", "Next", "ORM", "Prisma", "SQL Postgres", "TypeScript", "Tailwind"],
    "url": "https://github.com/Carloscv200313/Proyecto-Chapitec",
    "category": "Fullstack"
  },
  {
    id: "5",
    title: "Nuestro Legado",
    description: "Página web desarrollada como parte de un proyecto universitario en el que fui líder y responsable. Su objetivo es reflejar el recorrido que mis compañeros y yo tuvimos a lo largo de nuestros años en la universidad, mostrando nuestros proyectos, avances y aprendizajes. Además, incluye recomendaciones para futuras generaciones interesadas en el mundo de la tecnología. Cada integrante comparte su experiencia en distintas áreas, como análisis de datos, ciberseguridad, desarrollo web y aplicaciones móviles, entre otras. Como reconocimiento a nuestro esfuerzo, la universidad tomó este proyecto como referencia y lo publicó en su página oficial como testimonio del crecimiento y logros de sus estudiantes.",
    image: "/NuestroLegado.png",
    languages: ["React.js", "TypeScript", "Tailwind"],
    url: "https://nuestro-legado.vercel.app/",
    category: "Frontend",
  },
  {
    id: "6",
    title: "Sistema de Votaciones",
    description: "Este sistema fue desarrollado durante mis prácticas con sistemas WebSocket, creando un modelo de CRUD en el que los usuarios pueden votar, eliminar o crear bandas en tiempo real. Cualquier persona que esté en la misma página puede ver los cambios reflejados de inmediato. El proyecto fue implementado con Node.js, Express y la librería Socket.io para garantizar una comunicación fluida y en tiempo real",
    image: "/Votaciones.png",
    languages: ["React.js", "Node.js", "Tailwind","Socket.io","Express"],
    url: "https://votacion-bandas.netlify.app/",
    category: "Backend",
  },
  {
    "id": "7",
    "title": "Plataforma de cursos",
    "description":
      "Este proyecto fue desarrollado para una empresa que requería capacitar a sus empleados a través de cursos específicos y evaluar sus conocimientos mediante exámenes de certificación. En esencia, es un sistema de formación para empleados que permite a los gerentes o encargados de los talleres monitorear el progreso de cada trabajador, verificar la realización de sus exámenes, administrar sus calificaciones y controlar la cantidad de intentos permitidos para presentar la prueba. Para la gestión de contenido multimedia, el sistema utiliza Cloudinary para el almacenamiento de videos, lo que permite ofrecer el servicio de forma gratuita sin generar costos adicionales para la empresa. El proyecto fue desarrollado con Next.js, tanto en el frontend como en el backend, y utiliza una base de datos relacional en SQL Server. Además, implementa medidas de seguridad como middleware y JWT para la autenticación, almacenando los tokens en cookies para garantizar una mayor protección de los datos.",
    "image": "/Videos.png",
    "languages": ["React", "Next", "SQLserver", "TypeScript", "Tailwind","Claudinary"],
    "url": "https://github.com/Carloscv200313/Videos-con-Certificacion",
    "category": "Fullstack"
  },

  {
    id: "8",
    title: "Catalogo Virtual",
    description: "Página desarrollada para explorar y comprender el funcionamiento de las pasarelas de pago. En este caso, utilicé la pasarela de PayPal mediante su propia librería, lo que permite realizar pagos directos al proveedor de manera sencilla. Este proyecto surgió como una idea para implementarlo en un futuro sistema de eCommerce. Actualmente, el sistema se encuentra en pausa para evitar que las transacciones procesadas se reflejen en mi cuenta. Sin embargo, con un pequeño ajuste en el código, puede activarse nuevamente y funcionar de manera operativa.",
    image: "/Catalogo.png",
    languages: ["React.js", "TypeScript", "Tailwind"],
    url: "https://tienda-virtual-zeta.vercel.app/",
    category: "Frontend",
  },

  {
    id: "9",
    title: "Sistema de Peliculas",
    description: "Este fue uno de mis primeros proyectos cuando estaba aprendiendo a usar Node.js y su conexión con bases de datos SQL. Desarrollé un CRUD de películas que permite crear, modificar, eliminar y visualizar películas, almacenando toda la información en una base de datos local. Aunque es un proyecto sencillo, aplica los principios básicos de la programación estructurada en Node.js y me permitió comprender mejor su funcionamiento.",
    image: "/Pelis.png",
    languages: ["React.js", "Node.js", "Tailwind","Express","SQL Server"],
    url: "/",
    category: "Backend",
  },
]