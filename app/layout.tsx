import type React from "react"
import type { Metadata } from "next"
import { Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics/Analytics"
import { SpeedInsights } from "@/components/analytics/SpeedInsights"
import { Providers } from "@/components/providers/Providers"
import Chatbot from "@/components/chatbot/Chatbot"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "Harikrishna Multimedia Institute | Surat's Premier Multimedia School",
    template: "HKM | %s",
  },
  description:
    "Welcome to Harikrishna Multimedia Institute, Surat's leading destination for creative education in 3D Architectural Design, Video Editing, Game Design, Animation, and Visual Effects.",
  keywords: [
    "3D Architectural Design",
    "Harikrishna Multimedia Institute",
    "Video Editing",
    "Game Design",
    "3D Animation",
    "Visual Effects",
    "2D Animation",
    "3D Jewellery Design",
    "Graphics Design",
    "Multimedia courses in Surat",
    "Animation training",
    "VFX courses",
    "Game development institute",
    "Creative design education",
  ],
  authors: [{ name: "Harikrishna Multimedia Institute" }],
  creator: "Alberow",
  publisher: "Harikrishna Multimedia Institute",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.harikrishnamultimedia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Harikrishna Multimedia Institute | Leading Creative Courses in Surat",
    description:
      "Discover the Harikrishna Multimedia Institute, where creativity meets technology. Located in Surat, Gujarat, we offer comprehensive courses in 3D design, animation, and multimedia. Explore our students' work and join us to unlock your creative potential.",
    url: "https://www.harikrishnamultimedia.com",
    siteName: "Harikrishna Multimedia Institute",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harikrishna Multimedia Institute",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harikrishna Multimedia Institute",
    description:
      "Learn animation techniques and principles in our interactive classes. Get hands-on experience and unleash your creativity!",
    images: ["/images/twitter-image.jpg"],
    creator: "@hkm_institute",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable} font-sans`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Chatbot />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'