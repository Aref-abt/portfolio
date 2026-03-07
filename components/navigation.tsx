"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
          isScrolled
            ? "glass py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl font-semibold tracking-tight text-foreground transition-all duration-150 hover:text-primary"
          >
            <span className="text-gradient">A</span>ref
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-all duration-150 hover:text-foreground relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-150 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Aref-abt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-150 hover:text-foreground hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/aref-abou-trabi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all duration-150 hover:text-foreground hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:aref.aboutrabi7@gmail.com"
              className="text-muted-foreground transition-all duration-150 hover:text-foreground hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2 transition-all duration-150 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-150 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-6 right-6 glass rounded-2xl p-6 transition-all duration-150 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground transition-all duration-150 hover:text-foreground hover:pl-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href="https://github.com/Aref-abt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-150 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/aref-abou-trabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-all duration-150 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:aref.aboutrabi7@gmail.com"
                className="text-muted-foreground transition-all duration-150 hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
