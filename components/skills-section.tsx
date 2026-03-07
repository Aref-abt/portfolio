"use client"

import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Vue.js", "React", "Angular", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind", "jQuery"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Scala", "PHP", "Java", "C++", "C#", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "pgAdmin"],
  },
  {
    title: "AI & ML",
    skills: ["TensorFlow.js", "Neural Networks", "GitHub Copilot", "ChatGPT Integration", "Claude", "LLM API Integration", "Cursor", "Windsurf"],
  },
  {
    title: "Mobile & IoT",
    skills: ["Flutter", "Dart", "Xcode", "Micro:bit", "IoT-Bit", "Arduino"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Jira", "Heroku", "WordPress", "Agile/Scrum", "Railway", "Render", "Antigravity"],
  },
]

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6" ref={ref as React.MutableRefObject<HTMLElement | null>}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Technologies I work with
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-cyan glass-hover p-6 rounded-2xl transition-all duration-150 ${
                index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl bg-cyan-500/15 text-cyan-100 border border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-500/25 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div
          className={`mt-8 glass-cyan p-8 rounded-2xl transition-all duration-150 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {[
              "Team Leadership",
              "Technical Mentoring",
              "Project Planning",
              "Communication",
              "Problem Solving",
            ].map((skill, index) => (
              <div
                key={skill}
                className="text-center p-4 rounded-xl bg-cyan-500/15 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-150"
                style={{ transitionDelay: `${350 + index * 30}ms` }}
              >
                <span className="text-sm text-cyan-100">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
