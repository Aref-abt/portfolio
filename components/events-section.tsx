"use client"

import Image from "next/image"
import { Mic, Users, Calendar, Image as ImageIcon } from "lucide-react"

const events = [
  {
    title: "Tech Talks & Workshops",
    type: "Speaker",
    description:
      "Hosted practical tech events through Devitty, helping developers improve their programming skills and navigate their career paths in the industry.",
    image: "/events/digital-pathways-lau.jpg",
    upcoming: false,
  },
  {
    title: "Hello, Career World!",
    type: "Speaker",
    description:
      "Hosted a workshop at Lebanese University Hadath covering the full software development lifecycle (SDLC), how to land your first job in tech, and essential soft skills every software engineer needs to thrive in the industry.",
    image: "/events/hello-career-day.jpg",
    upcoming: false,
  },
  {
    title: "UN Digital Hub Sessions",
    type: "Lead Trainer",
    description:
      "Conducting live coding sessions, demos, and code reviews emphasizing clean, scalable architecture. Mentoring through project-based learning.",
    image: "/events/digital-hub.jpg",
    upcoming: true,
  },
  {
    title: "Access Program Mentorship",
    type: "Mentor",
    description:
      "Mentoring new Access Program students in CS/AI, recognized by the US Embassy for outstanding contribution to the program.",
    image: "/events/access-program.jpg",
    upcoming: false,
  },
]

export function EventsSection() {
  return (
    <section id="events" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">
            Events & Talks
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Sharing knowledge, building community
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            I regularly participate in events and host talks to help others grow in tech.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group relative glass-purple glass-hover rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72 bg-purple-500/10 overflow-hidden">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-2" />
                      <span className="text-xs text-muted-foreground/50">Photo coming soon</span>
                    </div>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-purple-500/25 text-purple-300 border border-purple-400/40 backdrop-blur-sm">
                    {event.type === "Speaker" && <Mic className="w-3 h-3" />}
                    {(event.type === "Lead Trainer" || event.type === "Mentor") && <Users className="w-3 h-3" />}
                    {event.type}
                  </span>
                </div>

                {/* Ongoing Badge */}
                {event.upcoming && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                      <Calendar className="w-3 h-3" />
                      Ongoing
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-purple-300 transition-colors duration-150">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in having me speak at your event?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 glass-purple glass-hover px-6 py-3 rounded-xl text-foreground font-medium transition-colors duration-150 hover:text-purple-300 w-full sm:w-auto"
          >
            <Mic className="w-4 h-4 shrink-0" />
            <span>Get in touch</span>
          </a>
        </div>
      </div>
    </section>
  )
}
