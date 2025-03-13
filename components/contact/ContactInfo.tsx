"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Our Location</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Shop No-7, Millenium Arcade, Hazira Rd, below You Broadband, opposite Royal Enfield Showroom, Aahura Nagar
              Society, Adajan Gam, Adajan, Surat, Gujarat 395009
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Phone Number</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href="tel:+919664833542" className="hover:text-primary transition-colors">
                +91 96648 33542
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Email Address</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href="mailto:info@harikrishnamultimedia.com" className="hover:text-primary transition-colors">
                info@harikrishnamultimedia.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Working Hours</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Monday - Saturday: 9:00 AM - 7:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-medium text-lg mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

