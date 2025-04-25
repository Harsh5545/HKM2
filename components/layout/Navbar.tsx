"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, MoonIcon, SunIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Courses",
    href: "/courses",
    submenu: [
      { name: "3D Animation", href: "/courses/3d-animation" },
      { name: "Game Design", href: "/courses/game-design" },
      { name: "VFX", href: "/courses/vfx" },
      { name: "Graphics Design", href: "/courses/graphics-design" },
      { name: "3D Architecture", href: "/courses/3d-architecture" },
      { name: "Video Editing", href: "/courses/video-editing" },
      { name: "3D Jewellery", href: "/courses/3d-jewellery" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Student Work", href: "/student-work" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
    setActiveSubmenu(null)
  }, [pathname])

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image
                src="/assets/logo.png"
                alt="Harikrishna Multimedia Institute"
                width={150}
                height={50}
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                      pathname.startsWith(link.href)
                        ? "text-accent"
                        : scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
                    }`}
                    onClick={() => toggleSubmenu(link.name)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-accent"
                        : scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown for desktop */}
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                    <div className="py-1 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm ${
                            pathname === subItem.href
                              ? "text-accent bg-gray-100 dark:bg-gray-700"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2">
          <Button onClick={toggleTheme} className="ml-auto bg-transparent">
              {theme === 'light' ? (
                <motion.div initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.5 }}>
                  <MoonIcon className={scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"} />
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.5 }}>
                  <SunIcon className={scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"} />
                </motion.div>
              )}
            </Button>
           
            <Button asChild className="btn-primary">
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
              } hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                          pathname.startsWith(link.href) ? "text-accent" : scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === link.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4"
                          >
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                                  pathname === subItem.href
                                    ? "text-accent"
                                    : scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === link.href
                          ? "text-accent"
                          : scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 flex">
                <Button onClick={toggleTheme} className="bg-transparent w-full">
                  {theme === 'light' ? (
                    <motion.div initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.5 }}>
                      <MoonIcon className={scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"} />
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 0.5 }}>
                      <SunIcon className={scrolled ? "text-gray-700 dark:text-gray-200" : "text-white"} />
                    </motion.div>
                  )}
                </Button>
                <Button asChild className="w-full btn-primary">
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}