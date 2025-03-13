"use client"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

function BlogHero() {
  return (
    <div className="w-full bg-cover">
      <div
        className="bg-[url('/assets/Website-Background.jpg')] bg-no-repeat bg-center bg-cover relative"
        style={{ minHeight: "clamp(180px, 25vh, 300px)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-gray-900/70 dark:from-primary/20 dark:to-gray-900/80"></div>

        {/* Content */}
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-8 relative z-10 pt-24">
          {" "}
          {/* Increased pt-24 for better navbar spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Breadcrumb */}
            <Breadcrumb className="text-white/80">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-white">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blogs" className="font-medium text-white">
                    Etiquette Journal
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">Etiquette Journal</h1>
            </div>

            {/* Description */}
            <p className="text-white/90 max-w-2xl text-lg">
              Discover insights on modern etiquette, personal development, and professional presence to navigate social
              and business situations with confidence and grace.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BlogHero

