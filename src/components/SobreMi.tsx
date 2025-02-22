"use client"
import { motion } from "framer-motion"
import { Code, Database, Github } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { Card, CardContent } from "@/components/ui/card"
import { SparklesCore } from "./sparkles"

export default function SobreMi() {


    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    }

    return (
        <div className="relative min-h-[50vh] flex flex-wrap items-center justify-center md:px-6 ">
            {/* Floating icons background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingPaper count={10} />
            </div>
            <div className="absolute inset-0 z-0">
                <SparklesCore
                    id="tsparticlesfullpage "
                    background="transparent"
                    minSize={0.5}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className="relative w-full flex flex-col lg:flex-row justify-center lg:gap-10 z-10 text-center">
                {/* Primera columna */}
                <div className="w-full  xl:w-1/2 flex items-center justify-center md:px-4 lg:px-0">
                    <div className="text-white py-16 px-4 sm:px-6 ">
                        <motion.div
                            className="max-w-4xl mx-auto space-y-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Header Section */}
                            <motion.div className="space-y-4" {...fadeIn}>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                    Sobre Mí
                                </h1>
                                <p className="md:text-base lg:text-lg text-sm text-gray-300 leading-relaxed">
                                    Soy estudiante de sexto ciclo de{" "}
                                    <span className="font-semibold text-blue-400">Ingeniería de Sistemas</span>, con un fuerte compromiso con la excelencia académica, formando parte del{" "}
                                    <span className="font-semibold text-blue-400">tercio superior</span>. He representado a mi universidad en{" "}
                                    <span className="font-semibold text-blue-400">congresos nacionales</span>, como <span className="font-semibold text-blue-400">CONEIMERA</span>, e{" "}
                                    <span className="font-semibold text-blue-400">internacionales</span>, como <span className="font-semibold text-blue-400">CIMPS</span>, donde he tenido la oportunidad de compartir conocimientos y aprender de expertos en tecnología.
                                    He trabajado en diversos proyectos como{" "}
                                    <span className="font-semibold text-blue-400">freelancer</span>, enfrentando desafíos reales y desarrollando soluciones innovadoras. Mi pasión por la programación me ha llevado a destacar en{" "}
                                    <span className="font-semibold text-blue-400">concursos de programación competitiva</span>, donde he puesto a prueba mis habilidades en resolución de problemas y optimización de código.
                                    Además, he sido{" "}
                                    <span className="font-semibold text-blue-400">ponente en el área de desarrollo web</span>, participando activamente en una{" "}
                                    <span className="font-semibold text-blue-400">organización de desarrolladores</span> dedicada a compartir conocimientos y fomentar el aprendizaje en la comunidad tecnológica.
                                    Mi objetivo es seguir creciendo, innovando y generando impacto a través de la tecnología. 🚀
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Segunda columna */}
                <div className="w-full   xl:w-1/2 flex items-center justify-center px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
                        {/* Frontend Card */}
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-colors">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-3 text-blue-400">
                                        <Code className="h-6 w-6" />
                                        <h2 className="text-xl font-semibold">Frontend</h2>
                                    </div>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>HTML, CSS, JavaScript, TypeScript</li>
                                        <li>Tailwind, React, Vue, Next.js</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Backend Card */}
                        <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
                            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-colors">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-3 text-blue-400">
                                        <Database className="h-6 w-6" />
                                        <h2 className="text-xl font-semibold">Backend & Bases de Datos</h2>
                                    </div>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>Node.js, Express</li>
                                        <li>MongoDB, SQL Server</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Tools Card */}
                        <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
                            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-colors">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-3 text-blue-400">
                                        <Github className="h-6 w-6" />
                                        <h2 className="text-xl font-semibold">Herramientas & Control de Versiones</h2>
                                    </div>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>Git & GitHub</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
