import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4 ">
            <Link href="/" className="flex items-center justify-center ">
              <Image
                src="/assets/logo.png"
                alt="Harikrishna Multimedia Institute"
                width={180}
                height={100}
                className="h-16 text-center w-auto"
              />
            </Link>
            <p className="text-gray-300 mt-4">
              Harikrishna Multimedia Institute is Surat's premier destination for creative education in Animation, Game
              Design, VFX, and more.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/student-work" className="text-gray-300 hover:text-white transition-colors">
                  Student Work
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/3d-animation" className="text-gray-300 hover:text-white transition-colors">
                  3D Animation
                </Link>
              </li>
              <li>
                <Link href="/courses/game-design" className="text-gray-300 hover:text-white transition-colors">
                  Game Design
                </Link>
              </li>
              <li>
                <Link href="/courses/vfx" className="text-gray-300 hover:text-white transition-colors">
                  Visual Effects (VFX)
                </Link>
              </li>
              <li>
                <Link href="/courses/graphics-design" className="text-gray-300 hover:text-white transition-colors">
                  Graphics Design
                </Link>
              </li>
              <li>
                <Link href="/courses/3d-architecture" className="text-gray-300 hover:text-white transition-colors">
                  3D Architecture
                </Link>
              </li>
              <li>
                <Link href="/courses/video-editing" className="text-gray-300 hover:text-white transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link href="/courses/3d-jewellery" className="text-gray-300 hover:text-white transition-colors">
                  3D Jewellery Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Adajan, Surat, Gujarat 395009, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-accent" />
                <a href="tel:+919664833542" className="text-gray-300 hover:text-white transition-colors">
                  +91 96648 33542
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-accent" />
                <a
                  href="mailto:info@harikrishnamultimedia.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@harikrishnamultimedia.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-l-md rounded-r-none focus:ring-accent focus:border-accent"
                />
                <Button className="bg-accent hover:bg-accent-600 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Harikrishna Multimedia Institute. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-300">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <p>
              Designed by{" "}
              <a
                href="https://alberow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Alberow
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

