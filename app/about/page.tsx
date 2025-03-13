import type { Metadata } from "next"
import AboutHero from "@/components/about/AboutHero"
import AboutMission from "@/components/about/AboutMission"
import AboutTeam from "@/components/about/AboutTeam"
import AboutFacilities from "@/components/about/AboutFacilities"
import AboutTestimonials from "@/components/about/AboutTestimonials"
import AboutCTA from "@/components/about/AboutCTA"

export const metadata: Metadata = {
  title: "About Us | Harikrishna Multimedia Institute",
  description:
    "Learn about Harikrishna Multimedia Institute, our mission, values, and the team behind Surat's premier multimedia education center.",
  keywords: [
    "about us",
    "Harikrishna Multimedia Institute",
    "multimedia education",
    "Surat",
    "creative education",
    "animation institute",
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutFacilities />
      <AboutTestimonials />
      <AboutCTA />
    </div>
  )
}

