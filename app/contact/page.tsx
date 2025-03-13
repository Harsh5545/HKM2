import type { Metadata } from "next"
import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import ContactMap from "@/components/contact/ContactMap"

export const metadata: Metadata = {
  title: "Contact Us | Harikrishna Multimedia Institute",
  description:
    "Get in touch with Harikrishna Multimedia Institute. Contact us for course inquiries, admissions, or to book a free demo class.",
  keywords: ["contact", "Harikrishna Multimedia Institute", "admission", "course inquiry", "demo class", "Surat"],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
    </div>
  )
}

