"use client"

import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion"
import { achievements } from "@/../types/achievement"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, FileText, Github, ExternalLink } from "lucide-react"
import React from "react"

const iconMap = {
  Trophy,
  Award,
  FileText,
  Github,
}

export default function Achievements() {
  return (
<div className="container mx-auto px-4 py-8 bg-transparent text-text-primary">
          <TextAnimate animation="slideLeft" by="character" 
                className="text-4xl lg:text-7xl font-bold mb-10 text-center text-accent-blue">
          Logros y Participaciones
          </TextAnimate>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-bg-light border-text-secondary hover:border-accent-blue transition-colors duration-300">
              <CardContent className="p-4 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {React.createElement(iconMap[achievement.icon as keyof typeof iconMap], {
                    className: "w-8 h-8 text-accent-green",
                  })}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-accent-blue mb-1">{achievement.title}</h3>
                  <p className="text-sm text-text-secondary mb-2">{achievement.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-accent-green text-bg-dark">
                      {achievement.date}
                    </Badge>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-blue hover:text-accent-green transition-colors duration-300 flex items-center"
                      >
                        Ver <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

