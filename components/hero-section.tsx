"use client"

import { useEffect, useState } from "react"
import { ArrowDown, MapPin, Github, Linkedin, Mail, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 transition-all duration-150 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 transition-all duration-150 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-foreground">Aref </span>
              <span className="text-gradient">Abou Trabi</span>
            </h1>

            {/* Role Tags */}
            <div
              className={`flex flex-wrap gap-3 mb-6 transition-all duration-150 delay-150 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="glass-cyan px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-cyan-200 border border-cyan-400/50">
                Senior AI Software Engineer
              </span>
              <span className="glass-purple px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-purple-200">
                Founder at Devitty
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-6 transition-all duration-150 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Senior AI & Full Stack Engineer with{" "}
              <span className="text-foreground font-medium">5+ years</span> of experience building
              scalable, production-ready systems. Passionate about{" "}
              <span className="text-foreground font-medium">AI-driven products</span>, clean
              architecture, and empowering the next generation of developers.
            </p>

            {/* Location */}
            <div
              className={`flex items-center gap-2 text-muted-foreground mb-8 transition-all duration-150 delay-250 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Beirut, Lebanon</span>
            </div>

            {/* CTA Buttons & Social */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-150 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#contact"
                className="glass glass-hover px-6 py-3 rounded-xl text-foreground font-medium flex items-center gap-2 group"
              >
                Get in touch
                <span className="transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="/Aref-Abou-Trabi-CV.pdf"
                download="Aref-Abou-Trabi-CV.pdf"
                className="glass-emerald glass-hover px-6 py-3 rounded-xl text-emerald-100 font-medium flex items-center gap-2 border border-emerald-400/50"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 sm:ml-4 sm:pl-4 sm:border-l border-border">
                <a
                  href="https://github.com/arefaboutrabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground transition-all duration-150 hover:text-foreground hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/aref-abou-trabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground transition-all duration-150 hover:text-foreground hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:aref.abou.trabi@gmail.com"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground transition-all duration-150 hover:text-foreground hover:scale-105"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Photo Area - 2 columns */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-150 delay-100 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Glow Effect Behind Photo */}
              <div className="absolute inset-0 rounded-3xl bg-cyan-500/30 blur-3xl animate-pulse-glow" />
              
              {/* Photo Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl glass-cyan overflow-hidden group">
                <Image
                  src="/profile.jpg"
                  alt="Aref Abou Trabi"
                  fill
                  className="object-cover object-top transition-transform duration-150 group-hover:scale-105"
                  priority
                />
                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-3xl border border-primary/20 pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 glass-cyan rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 animate-float border border-cyan-400/50">
                <span className="text-xs sm:text-sm font-medium text-cyan-100">5+ Years Experience</span>
              </div>

              {/* Another Floating Element */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 glass-purple rounded-lg sm:rounded-xl px-2 sm:px-3 py-1 sm:py-2 animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-[10px] sm:text-xs font-medium text-purple-200">AI / Full Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-150 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-all duration-150 hover:text-foreground group"
            aria-label="Scroll down"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
