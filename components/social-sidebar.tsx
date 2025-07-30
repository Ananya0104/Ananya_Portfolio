"use client"

import { Button } from "@/components/ui/button"
import { Linkedin, Github, Code, Link } from "lucide-react"

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-6">
        <div className="relative group">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-pink-400 p-2 transition-all duration-300 relative z-10"
            style={{ pointerEvents: 'auto' }}
            onClick={() => {
              console.log("Sidebar GitHub clicked");
              window.open("https://github.com/Ananya0104", "_blank");
            }}
          >
            <Github className="h-5 w-5" />
          </Button>
          <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
            GitHub
          </div>
        </div>
        
        <div className="relative group">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-pink-400 p-2 transition-all duration-300 relative z-10"
            style={{ pointerEvents: 'auto' }}
            onClick={() => {
              console.log("Sidebar LinkedIn clicked");
              window.open("https://www.linkedin.com/in/ananya-nagpal-23aa73256/", "_blank");
            }}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
            LinkedIn
          </div>
        </div>
        
        <div className="relative group">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-pink-400 p-2 transition-all duration-300 relative z-10"
            style={{ pointerEvents: 'auto' }}
            onClick={() => {
              console.log("Sidebar Codolio clicked");
              window.open("https://codolio.com/profile/noni05", "_blank");
            }}
          >
            <Code className="h-5 w-5" />
          </Button>
          <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
            Coding Profile
          </div>
        </div>

        <div className="relative group">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-pink-400 p-2 transition-all duration-300 relative z-10"
            style={{ pointerEvents: 'auto' }}
            onClick={() => {
              console.log("Sidebar Resume clicked");
              // Try different approaches to open the resume
              const resumeUrl = "https://drive.google.com/file/d/1f7qR2R3XD-MIwcd2UYaLlNW73YASh7JL/view?usp=drive_link";
              
              // Method 1: Try window.open with features
              const newWindow = window.open(resumeUrl, "_blank", "noopener,noreferrer");
              
              // Method 2: If popup blocked, try location.href
              if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
                console.log("Popup blocked, trying direct navigation");
                window.location.href = resumeUrl;
              }
            }}
          >
            <Link className="h-5 w-5" />
          </Button>
          <div className="absolute left-full ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
            Resume
          </div>
        </div>
      </div>
    </div>
  )
} 