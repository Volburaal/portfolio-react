"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Work Experience", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Achievements", href: "#achievements" },
  { label: "Hobbies", href: "#hobbies" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const isMobile = useMobile()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "hover:text-primary transition-colors",
                    activeSection === item.href.substring(1) && "text-primary font-medium",
                  )}
                  onClick={() => scrollToSection(item.href.substring(1))}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Navigation Toggle */}
        {isMobile && (
          <Button
            id="menu-button"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          id="mobile-menu"
          className={cn(
            "absolute top-full left-0 right-0 bg-background border-b transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="py-2 px-4">
            {navItems.map((item) => (
              <li key={item.href} className="py-2">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start hover:text-primary transition-colors",
                    activeSection === item.href.substring(1) && "text-primary font-medium",
                  )}
                  onClick={() => scrollToSection(item.href.substring(1))}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
