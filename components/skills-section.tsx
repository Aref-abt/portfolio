"use client"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Vue.js", "React", "Angular", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind", "jQuery"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Scala", "PHP", "Java", "C++", "C#", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "pgAdmin"],
  },
  {
    title: "AI & ML",
    skills: ["TensorFlow", "TensorFlow.js", "Neural Networks", "GitHub Copilot", "ChatGPT Integration", "Claude", "LLM API Integration", "Cursor", "Windsurf"],
  },
  {
    title: "Mobile & IoT",
    skills: ["Flutter", "Dart", "Xcode", "Micro:bit", "IoT-Bit", "Arduino"],
  },
  {
    title: "Tools & Platforms",
    skills: ["AWS SageMaker", "Git", "Jira", "Heroku", "WordPress", "Agile/Scrum", "Railway", "Render", "Antigravity"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
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
              className={`glass-cyan glass-hover p-6 rounded-2xl ${
                index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl bg-cyan-500/15 text-cyan-100 border border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-500/25 transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-8 glass-cyan p-8 rounded-2xl">
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
            ].map((skill) => (
              <div
                key={skill}
                className="text-center p-4 rounded-xl bg-cyan-500/15 border border-cyan-400/30 hover:border-cyan-400/50 transition-colors duration-150"
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
