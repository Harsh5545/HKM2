"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ContactMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  return (
    <section ref={ref} className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold">Find Us on Map</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2885672284443!2d72.7899!3d21.1969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sHarikrishna%20Multimedia%20Institute!5e0!3m2!1sen!2sin!4v1656789012345!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Harikrishna Multimedia Institute Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

