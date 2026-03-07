"use client"

import { Code2, GraduationCap, Heart, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Senior AI Engineer",
    description: "Building AI-powered solutions with modern full-stack technologies",
  },
  {
    icon: Users,
    title: "Founder at Devitty",
    description: "Custom software solutions and developer community events",
  },
  {
    icon: GraduationCap,
    title: "CS Graduate",
    description: "B.Sc. in Computer Science from LIU, Best Senior Project",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "US Embassy recognized for mentorship and social initiatives",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Crafting digital experiences with purpose
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a dedicated software engineer with a passion for building elegant solutions
              and empowering others through technology education. Currently working at{" "}
              <span className="text-foreground">Aspire Software / AllTrust Networks</span>, where I
              develop fintech solutions using microservices and monolithic architectures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I&apos;m deeply committed to tech education. As a{" "}
              <span className="text-foreground">Lead Full Stack Engineering Trainer</span> at the
              United Nations Digital Hub, I mentor aspiring engineers through project-based learning,
              covering everything from MERN stack to AI-assisted development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey has been shaped by meaningful collaborations — from training robotics and
              AI with UNICEF to founding{" "}
              <span className="text-foreground">Devitty</span>, where we build custom software
              solutions and host events to nurture the next generation of developers.
            </p>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-purple glass-hover p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/25 flex items-center justify-center mb-4 border border-purple-400/40">
                  <item.icon className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
