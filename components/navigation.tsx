"use client"
interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-mono font-bold">
          <span className="text-white">@</span>
          <span className="text-white">AnanyaNagpal</span>
        </div>
        <div className="flex space-x-8 font-mono text-sm">
          <button 
            onClick={() => scrollToSection("home")} 
            className={`transition-colors ${activeSection === "home" ? "text-pink-400" : "text-gray-400 hover:text-white"}`}
          >
            #home
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className={`transition-colors ${activeSection === "about" ? "text-pink-400" : "text-gray-400 hover:text-white"}`}
          >
            #about-me
          </button>
          <button 
            onClick={() => scrollToSection("skills")} 
            className={`transition-colors ${activeSection === "skills" ? "text-pink-400" : "text-gray-400 hover:text-white"}`}
          >
            #skills
          </button>
          <button 
            onClick={() => scrollToSection("projects")} 
            className={`transition-colors ${activeSection === "projects" ? "text-pink-400" : "text-gray-400 hover:text-white"}`}
          >
            #projects
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className={`transition-colors ${activeSection === "contact" ? "text-pink-400" : "text-gray-400 hover:text-white"}`}
          >
            #contact-me
          </button>
        </div>
      </div>
    </nav>
  )
} 