"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const partners = [
  { id: 1, name: "Autodesk", logo: "/images/partners/autodesk.png" },
  { id: 2, name: "Adobe", logo: "/images/partners/adobe.png" },
  { id: 3, name: "Unity", logo: "/images/partners/unity.png" },
  { id: 4, name: "Unreal Engine", logo: "/images/partners/unreal.png" },
  { id: 5, name: "Maxon", logo: "/images/partners/maxon.png" },
  { id: 6, name: "SideFX", logo: "/images/partners/sidefx.png" },
]

export default function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Industry Partners</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We collaborate with leading companies in the creative industry to provide our students with the best tools
            and opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={item}
              className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

