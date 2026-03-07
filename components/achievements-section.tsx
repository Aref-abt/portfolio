"use client"

import { Award, Trophy, Flag, Heart } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Best Senior Project Award",
    organization: "Lebanese International University",
    year: "2024",
    description: "Won 1st place for outstanding senior project in software development",
    featured: true,
  },
  {
    icon: Award,
    title: "1st Place Recognition",
    organization: "American University of Beirut",
    year: "2019",
    description: "Awarded for the most impactful website project during a training hosted by PCC and the Millennium Fellowship",
    featured: true,
  },
  {
    icon: Flag,
    title: "US Embassy Recognition",
    organization: "US Embassy Lebanon",
    year: "2023 & 2025",
    description: "Invited for recognition and networking after mentoring new Access Program students in CS/AI and winning two mini-grants",
    featured: true,
  },
  {
    icon: Heart,
    title: "Mini-Grant Winner",
    organization: "Access Program",
    year: "2023",
    description: "Led two funded initiatives: training Access alumni to become trainers, and supporting ex-female prisoners with emotional support and handcraft training",
    featured: false,
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-amber-400 text-sm font-medium uppercase tracking-widest">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Recognition & Awards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`relative glass-amber glass-hover p-7 rounded-2xl overflow-hidden ${
                achievement.featured && index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {achievement.featured && (
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl" />
              )}

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/25 flex items-center justify-center border border-amber-400/40">
                    <achievement.icon className="w-6 h-6 text-amber-300" />
                  </div>
                  <span className="text-sm text-amber-300/70 font-mono">{achievement.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-amber-400 mb-3">{achievement.organization}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
