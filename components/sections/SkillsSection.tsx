"use client"

interface SkillsSectionProps {
  setIsTechStackModalOpen: (isOpen: boolean) => void
}

export default function SkillsSection({ setIsTechStackModalOpen }: SkillsSectionProps) {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Golang", icon: "🐹" },
    { name: "Next.js", icon: "⚛️" },
    { name: "AWS", icon: "☁️" },
    { name: "OOPs", icon: "🔄" },
    { name: "CI/CD", icon: "⚙️" },
    { name: "Databases", icon: "🗄️" },
    { name: "RAG", icon: "🤖" },
    { name: "ML Tools", icon: "🔧" },
    { name: "Figma", icon: "🎨" },
  ]

  return (
    <section id="skills" className="py-20 px-8 relative">
      <div className="dots-pattern"></div>
      <div className="w-full px-80">
        {/* Skills Header */}
        <div className="mb-12">
          <h1 className="font-mono text-4xl font-normal mb-4">
            <span className="text-pink-400">#</span>
            <span className="text-white">skills</span>
          </h1>
          <div className="w-64 h-px bg-pink-400"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-4 flex flex-col items-center justify-center h-24 hover:border-pink-400 transition-colors duration-300 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div className="font-mono text-white text-xs">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Explore Tech Stack Button */}
        <div className="text-right relative z-10">
          <button
            onClick={() => {
              setIsTechStackModalOpen(true)
            }}
            className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 px-8 py-3 bg-transparent cursor-pointer rounded relative z-20"
            style={{ pointerEvents: 'auto' }}
          >
            Explore my tech stack
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  )
} 