"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, Gem, Sparkles, Compass, Layers } from "lucide-react"

const modules = [
  {
    title: "Introduction to Jewelry Design",
    icon: <Gem className="w-5 h-5 text-amber-500" />,
    topics: [
      "History of Jewelry Design",
      "Types of Jewelry and Styles",
      "Introduction to 3D Modeling for Jewelry",
      "Design Principles for Jewelry",
      "Industry Standards and Practices",
    ],
  },
  {
    title: "3D Modeling Techniques",
    icon: <Compass className="w-5 h-5 text-amber-500" />,
    topics: [
      "Basic Modeling Tools and Techniques",
      "Creating Rings and Bands",
      "Pendant and Necklace Design",
      "Earring and Bracelet Modeling",
      "Working with Precise Measurements",
    ],
  },
  {
    title: "Gemstone Creation",
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    topics: [
      "Gemstone Types and Characteristics",
      "Faceting Techniques",
      "Creating Diamond Cuts",
      "Colored Gemstone Modeling",
      "Setting Gemstones in Designs",
    ],
  },
  {
    title: "Rendering and Presentation",
    icon: <Layers className="w-5 h-5 text-amber-500" />,
    topics: [
      "Material Setup for Metals",
      "Gemstone Materials and Refraction",
      "Lighting for Jewelry Presentation",
      "Studio Setup for Rendering",
      "Creating Portfolio-Quality Images",
    ],
  },
]

export function JewelryDesignCurriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index)
  }

  return (
    <section id="curriculum" ref={ref} className="py-20 bg-black">
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
              Curriculum
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to take you from the fundamentals to advanced techniques in jewelry
            design
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {modules.map((module, index) => (
            <div
              key={index}
              className="mb-4 border border-amber-900/30 rounded-lg overflow-hidden bg-gray-900 shadow-lg shadow-amber-900/5"
            >
              <button
                onClick={() => toggleModule(index)}
                className="w-full flex items-center justify-between p-5 text-left font-medium focus:outline-none transition-colors duration-200 hover:bg-amber-900/10"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-2 bg-amber-900/20 rounded-lg mr-4">{module.icon}</div>
                  <span className="text-lg text-white">{module.title}</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-amber-400 transition-transform duration-200 ${
                    openModule === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openModule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-amber-900/30">
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topicIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                            className="flex items-start py-1"
                          >
                            <div className="flex items-center justify-center w-5 h-5 mt-0.5 mr-3 text-xs text-amber-400 bg-amber-900/20 rounded-full">
                              {topicIndex + 1}
                            </div>
                            <span className="text-gray-300">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

