"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"

const categories = [
  { id: "all", name: "All Projects" },
  { id: "3d-animation", name: "3D Animation" },
  { id: "game-design", name: "Game Design" },
  { id: "vfx", name: "Visual Effects" },
  { id: "graphics-design", name: "Graphics Design" },
  { id: "3d-architectural", name: "3D Architectural" },
]

const projects = [
  {
    id: 1,
    title: "Character Animation Showreel",
    category: "3d-animation",
    image: "/images/student-work/animation-1.jpg",
    student: "Rahul Patel",
    description:
      "A character animation showreel featuring various emotions and movements created using Maya and Blender.",
  },
  {
    id: 2,
    title: "Fantasy Game Environment",
    category: "game-design",
    image: "/images/student-work/game-1.jpg",
    student: "Priya Sharma",
    description: "A fantasy game environment designed and developed in Unreal Engine with custom assets and lighting.",
  },
  {
    id: 3,
    title: "VFX Compositing Demo",
    category: "vfx",
    image: "/images/student-work/vfx-1.jpg",
    student: "Amit Desai",
    description: "A visual effects compositing demo showcasing integration of 3D elements with live-action footage.",
  },
  {
    id: 4,
    title: "Brand Identity Design",
    category: "graphics-design",
    image: "/images/student-work/graphics-1.jpg",
    student: "Neha Patel",
    description: "A comprehensive brand identity design including logo, color palette, typography, and applications.",
  },
  {
    id: 5,
    title: "Modern Villa Visualization",
    category: "3d-architectural",
    image: "/images/student-work/architectural-1.jpg",
    student: "Vikram Singh",
    description: "A photorealistic 3D visualization of a modern villa with detailed interiors and exteriors.",
  },
  {
    id: 6,
    title: "Animated Short Film",
    category: "3d-animation",
    image: "/images/student-work/animation-2.jpg",
    student: "Sanjay Kumar",
    description: "A 2-minute animated short film telling the story of a robot discovering emotions.",
  },
  {
    id: 7,
    title: "Mobile Game UI/UX",
    category: "game-design",
    image: "/images/student-work/game-2.jpg",
    student: "Meera Joshi",
    description: "User interface and experience design for a mobile puzzle game with custom icons and animations.",
  },
  {
    id: 8,
    title: "Explosion VFX Sequence",
    category: "vfx",
    image: "/images/student-work/vfx-2.jpg",
    student: "Raj Malhotra",
    description: "A realistic explosion visual effects sequence created using particle systems and fluid simulations.",
  },
  {
    id: 9,
    title: "Magazine Layout Design",
    category: "graphics-design",
    image: "/images/student-work/graphics-2.jpg",
    student: "Ananya Shah",
    description: "A creative magazine layout design with custom typography and image treatments.",
  },
  {
    id: 10,
    title: "Commercial Building Rendering",
    category: "3d-architectural",
    image: "/images/student-work/architectural-2.jpg",
    student: "Karan Mehta",
    description: "A detailed 3D rendering of a commercial building with emphasis on lighting and materials.",
  },
  {
    id: 11,
    title: "Character Rigging Demo",
    category: "3d-animation",
    image: "/images/student-work/animation-3.jpg",
    student: "Divya Patel",
    description: "A technical demonstration of advanced character rigging techniques for animation.",
  },
  {
    id: 12,
    title: "Game Asset Collection",
    category: "game-design",
    image: "/images/student-work/game-3.jpg",
    student: "Arjun Nair",
    description: "A collection of low-poly game assets optimized for mobile and web-based games.",
  },
]

export default function StudentWorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const openProject = (id: number) => {
    setSelectedProject(id)
    document.body.style.overflow = "hidden"
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const currentProject = projects.find((project) => project.id === selectedProject)

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Student <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Browse through our collection of student projects showcasing their creativity, technical skills, and
            artistic vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="flex flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer group"
              onClick={() => openProject(project.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white text-sm">{project.student}</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-primary">{categories.find((c) => c.id === project.category)?.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && currentProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={closeProject}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="relative h-72 sm:h-96">
                    <Image
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={closeProject}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                  <p className="text-primary mb-4">{categories.find((c) => c.id === currentProject.category)?.name}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Student</h4>
                    <p className="font-medium">{currentProject.student}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Description</h4>
                    <p className="text-gray-600 dark:text-gray-300">{currentProject.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

