"use client"

import { useEffect, useState } from "react"
import TechStackModal from "@/components/tech-stack-modal"
import AboutModal from "@/components/AboutModal"
import Navigation from "@/components/navigation"
import SocialSidebar from "@/components/social-sidebar"
import HomeSection from "@/components/sections/HomeSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export default function Page() {
  const [activeSection, setActiveSection] = useState("home")
  const [isTechStackModalOpen, setIsTechStackModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black text-white">
      {/* Fixed Navigation */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Left Social Sidebar */}
      <SocialSidebar />

      {/* Home Section */}
      <HomeSection scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection setIsAboutModalOpen={setIsAboutModalOpen} />

      {/* Skills Section */}
      <SkillsSection setIsTechStackModalOpen={setIsTechStackModalOpen} />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Bottom Spacing */}
      <div className="h-16 bg-gradient-to-t from-black to-transparent"></div>

      {/* Tech Stack Modal */}
      <TechStackModal 
        isOpen={isTechStackModalOpen} 
        onClose={() => setIsTechStackModalOpen(false)} 
      />
      
      {/* About Modal */}
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
        setIsTechStackModalOpen={setIsTechStackModalOpen}
      />
    </div>
  )
}
