"use client"

import { Building2, Calendar, Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Lead Full Stack Engineering Trainer",
    company: "United Nations",
    location: "Digital Hub",
    period: "Oct 2025 - Feb 2026",
    description:
      "Mentored aspiring software engineers through project-based learning, building full-stack apps using MERN (MongoDB, Express, React, Node.js) and Next.js. Designed and delivered training on design patterns, SOLID principles, UI/UX, and Agile methodologies. Led all Scrum ceremonies to promote collaboration and iterative delivery. Created and maintained course curricula combining theory with real-world projects. Conducted live coding sessions, demos, and code reviews emphasizing clean, scalable architecture. Integrated AI tools (GitHub Copilot, ChatGPT) to demonstrate AI-driven software design, debugging, and documentation.",
    tags: ["MERN", "Next.js", "Agile", "AI", "SOLID"],
    current: false,
  },
  {
    title: "Senior Software Engineer",
    company: "Valsoft/Aspire Software",
    location: "AllTrust Networks",
    period: "Jul 2024 - Present",
    description:
      "Build and maintain front-end applications using Vue.js and back-end using Scala, managing code with Git in an Agile team environment. Handle, test, and ensure security of sensitive financial data using PostgreSQL, working within compliance standards. Train ML models on AWS SageMaker using Python and TensorFlow, rigorously testing and tuning them to achieve near-perfect accuracy. Use Jira for project management and Heroku for deployment, coordinating with cross-functional teams to deliver fintech solutions.",
    tags: ["Vue.js", "Scala", "Python", "AWS SageMaker", "TensorFlow", "PostgreSQL", "Fintech", "Heroku"],
    link: "https://alltrust.com",
    current: true,
  },
  {
    title: "Robotics & ML Trainer",
    company: "UNICEF",
    location: "Executed by CodeBrave",
    period: "Feb 2025 - Jun 2025",
    description:
      "Delivered training on robotics, agri-tech, AI/ML, Micro:bit, and IoT-Bit to grade 7-9 students and public school teachers. Taught programming principles and hands-on skills to support STEM education in public schools. Helped students and teachers develop practical knowledge in emerging technologies through interactive workshops.",
    tags: ["Robotics", "AI/ML", "IoT", "Micro:bit", "Education"],
    current: false,
  },
  {
    title: "Software Engineer & Founder",
    company: "Devitty",
    location: "Lebanon",
    period: "Apr 2023 - Present",
    description:
      "Lead a team of 4 developers, managing project development and collaboration. Build custom software solutions for businesses using Node.js, Express, React, Angular, Tailwind, and Vuetify based on project needs. Host events to help others improve their programming skills and career path in the industry. Ensure delivery of high-quality, real-world projects through effective team coordination. Projects include Car Rental (France), Inventory Management (Brazil), and NGO/Startup Consultancy (Lebanon).",
    tags: ["Node.js", "React", "Angular", "Team Lead"],
    link: "https://devitty.com",
    current: true,
  },
  {
    title: "Communication Consultant",
    company: "Swiss Embassy - BWE",
    location: "Bekaa Water Est.",
    period: "Nov 2024 - May 2025",
    description:
      "Designed newsletter templates, factsheets, and provided website UI recommendations. Developed and executed a strategic marketing plan to boost subscriber engagement. Led staff workshops and meetings, improving overall engagement by 467%.",
    tags: ["UI/UX", "Marketing", "Strategy"],
    current: false,
  },
  {
    title: "Senior Software Developer",
    company: "The Guardianchief",
    location: "Lebanon",
    period: "Nov 2021 - May 2023",
    description:
      "Built websites across industries such as construction, education, hospitality, and cleaning services using PHP, React, WordPress, and PostgreSQL. Managed end-to-end development for client projects, delivered through The GuardianChief.",
    tags: ["PHP", "React", "WordPress", "PostgreSQL"],
    current: false,
  },
  {
    title: "Software Developer",
    company: "I-MAD Technology",
    location: "Lebanon",
    period: "Nov 2020 - May 2022",
    description:
      "Built websites for E-commerce businesses using PHP, React, and Node.js. Developed full-stack solutions tailored to client needs.",
    tags: ["PHP", "React", "Node.js", "E-commerce"],
    current: false,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            My professional journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500/60 to-emerald-600/20 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={`${exp.company}-${exp.title}`} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                    <div className={`w-full h-full rounded-full ${exp.current ? 'bg-emerald-400' : 'bg-emerald-600'} border-4 border-background shadow-lg shadow-emerald-500/30`} />
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40" />
                    )}
                  </div>

                  <div className={`pl-14 md:pl-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}>
                    <div className="glass-emerald glass-hover rounded-2xl p-6 relative group">
                      <div
                        className={`hidden md:block absolute top-7 w-3 h-3 rotate-45 ${
                          isLeft
                            ? 'right-0 translate-x-1/2 bg-emerald-500/30 border-t border-r border-emerald-500/40'
                            : 'left-0 -translate-x-1/2 bg-emerald-500/30 border-b border-l border-emerald-500/40'
                        }`}
                      />

                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center shrink-0">
                            <Building2 className="w-5 h-5 text-emerald-300" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground group-hover:text-emerald-300 transition-colors">
                                {exp.title}
                              </h3>
                              {exp.link && (
                                <a
                                  href={exp.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                  aria-label={`Visit ${exp.company}`}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <p className="text-sm text-emerald-400">{exp.company}</p>
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/25 text-emerald-300 text-xs font-medium border border-emerald-400/40">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-emerald-500/70" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4 text-emerald-500/70" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="absolute left-6 md:left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 rounded-full bg-emerald-700/60 border-2 border-background" />
        </div>
      </div>
    </section>
  )
}
