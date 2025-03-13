"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Gem, Sparkles, Compass, Layers } from "lucide-react"

export function JewelryDesignOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const features = [
    {
      icon: <Gem className="w-6 h-6 text-amber-500" />,
      title: "Jewelry Modeling",
      description: "Learn to create precise 3D models of rings, necklaces, earrings and other jewelry pieces",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "Gemstone Design",
      description: "Master the art of creating realistic gemstones with proper faceting and light refraction",
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-500" />,
      title: "Precision Techniques",
      description: "Develop the skills to create intricate details and precise measurements for manufacturing",
    },
    {
      icon: <Layers className="w-6 h-6 text-amber-500" />,
      title: "Rendering & Presentation",
      description: "Create photorealistic renders of your jewelry designs for client presentations",
    },
  ]

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
            Course{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              Overview
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive jewelry design course covers everything you need to know to create stunning digital
            jewelry models
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn</h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 p-2 bg-amber-900/30 rounded-lg mr-4">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-medium text-white">Key Skills You'll Develop:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "3D Modeling",
                  "Texturing and Materials",
                  "Lighting and Rendering",
                  "Gemstone Creation",
                  "Metal Texturing",
                  "Design for Manufacturing",
                  "Client Presentations",
                  "Portfolio Development",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Jewelry Design Overview"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
              <Gem className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

