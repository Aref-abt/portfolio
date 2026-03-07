"use client"

import { useInView } from "@/hooks/use-in-view"
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "aref.aboutrabi7@gmail.com",
    href: "mailto:aref.aboutrabi7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+961 79 313 671",
    href: "tel:+96179313671",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Beirut, Lebanon",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "Aref-abt",
    href: "https://github.com/Aref-abt",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aref Abou Trabi",
    href: "https://linkedin.com/in/aref-abou-trabi",
  },
  {
    icon: ExternalLink,
    label: "Devitty",
    value: "devitty.com",
    href: "https://devitty.com",
  },
]

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6" ref={ref as React.MutableRefObject<HTMLElement | null>}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-blue-400 text-sm font-medium uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Let&apos;s build something together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Whether you have a project in mind, want me to speak at your event, or just want to
            connect — I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div
            className={`space-y-6 transition-all duration-150 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <div
                  key={link.label}
                  className="glass-blue glass-hover p-5 rounded-xl transition-all duration-150"
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-500/25 flex items-center justify-center shrink-0 group-hover:bg-blue-500/35 border border-blue-400/40 transition-colors duration-150">
                        <link.icon className="w-5 h-5 text-blue-300" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {link.label}
                        </span>
                        <p className="text-foreground font-medium group-hover:text-blue-300 transition-colors duration-150">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/25 flex items-center justify-center shrink-0 border border-blue-400/40">
                        <link.icon className="w-5 h-5 text-blue-300" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {link.label}
                        </span>
                        <p className="text-foreground font-medium">{link.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-blue p-6 rounded-xl">
              <h3 className="text-sm font-medium text-blue-300/70 uppercase tracking-wider mb-4">
                Find me online
              </h3>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/15 text-blue-200 border border-blue-400/30 hover:text-blue-100 hover:bg-blue-500/25 transition-all duration-150"
                  >
                    <link.icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm truncate">{link.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div
            className={`transition-all duration-150 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="glass-blue p-8 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative text-center">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/25 flex items-center justify-center mx-auto mb-6 border border-blue-400/40">
                  <Send className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to start?</h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                  Drop me an email and I&apos;ll get back to you as soon as possible. Looking forward to
                  connecting!
                </p>
                <a
                  href="mailto:aref.aboutrabi7@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl bg-blue-500 text-white font-medium transition-all duration-150 hover:bg-blue-400 hover:scale-105 hover:shadow-[0_0_40px_oklch(0.6_0.15_230_/_0.5)] w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>Send me an email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-24 pt-8 border-t border-border text-center transition-all duration-150 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aref Abou Trabi. Built with passion and Next.js.
          </p>
        </div>
      </div>
    </section>
  )
}
