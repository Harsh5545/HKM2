"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const projects = [
  {
    title: "2D Platformer Game",
    description: "Design and develop a complete 2D platformer game with custom characters and levels",
    image: "/placeholder.svg?height=400&width=600",
    skills: ["Game Mechanics", "Level Design", "Character Animation"],
  },
  {
    title: "3D Adventure Game Environment",
    description: "Create an immersive 3D environment with interactive elements and atmospheric effects",
    image: "/placeholder.svg?height=400&width=600",
    skills: ["3D Modeling", "Lighting", "Environmental Design"],
  },
  {
    title: "Mobile Puzzle Game",
    description: "Design a challenging puzzle game optimized for mobile devices with progressive difficulty",
    image: "/placeholder.svg?height=400&width=600",
    skills: ["UI/UX Design", "Game Balance", "Mobile Optimization"],
  },
  {
    title: "Multiplayer Game Prototype",
    description: "Develop a prototype for a multiplayer game with networking and player interaction",
    image: "/placeholder.svg?height=400&width=600",
    skills: ["Networking", "Player Systems", "Game Testing"],
  },
]

export function GameDesignProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="py-20 bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hands-On{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Build an impressive portfolio with these real-world game design projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-900/30"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-900/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

