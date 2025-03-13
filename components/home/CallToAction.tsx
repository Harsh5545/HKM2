"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Creative Journey?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Join Harikrishna Multimedia Institute today and take the first step towards a successful career in the
            creative industry. Book a free counseling session or visit our campus to learn more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-white">
              <Link href="/contact">Book a Free Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black dark:text-white hover:bg-white/10">
              <a href="tel:+919664833542">  
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

