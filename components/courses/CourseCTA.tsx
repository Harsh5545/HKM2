"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-6">
            Ready to Start Your Creative Journey?
          </h2>
          <p className="text-xl text-primary-foreground mb-10">
            Join Harikrushna Multimedia Institute today and take the first step towards a successful career in the
            creative industry. Book a free counseling session or visit our campus to learn more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground" asChild>
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="tel:+919664833542">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

