import type { Metadata } from "next"
import Hero from "@/components/home/Hero"
import FeaturedCourses from "@/components/home/FeaturedCourses"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import CreativeOpportunities from "@/components/home/CreativeOpportunities"
import Testimonials from "@/components/home/Testimonials"
import CallToAction from "@/components/home/CallToAction"
import Partners from "@/components/home/Partners"
import Stats from "@/components/home/Stats"
import FAQ from "@/components/home/FAQ"

export const metadata: Metadata = {
  title: "Harikrishna Multimedia Institute | Surat's Premier Multimedia School",
  description:
    "Welcome to Harikrishna Multimedia Institute, Surat's leading destination for creative education in 3D Architectural Design, Video Editing, Game Design, Animation, and Visual Effects.",
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Stats />
      <CreativeOpportunities />
      <Testimonials />
      <Partners />
      <FAQ />
      <CallToAction />
    </>
  )
}

