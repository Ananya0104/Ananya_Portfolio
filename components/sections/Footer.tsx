"use client"

import { Linkedin, Github, Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
            <span className="text-black text-xs font-bold">A</span>
          </div>
          <span className="font-mono text-white">Ananya</span>
        </div>
        <div className="text-center">
          <p className="font-mono text-gray-500 text-sm">© Copyright 2024. Made by Ananya</p>
        </div>
        <div className="flex items-center space-x-6">
          <span className="font-mono text-white">Media</span>
          <div className="flex space-x-4">
            <button 
              className="text-gray-400 hover:text-white p-2 transition-colors relative z-10"
              style={{ pointerEvents: 'auto' }}
              title="GitHub"
              onClick={() => {
                console.log("GitHub button clicked");
                window.open("https://github.com/Ananya0104", "_blank");
              }}
            >
              <Github className="h-5 w-5" />
            </button>
            <button 
              className="text-gray-400 hover:text-white p-2 transition-colors relative z-10"
              style={{ pointerEvents: 'auto' }}
              title="Coding Profile"
              onClick={() => {
                console.log("Codolio button clicked");
                window.open("https://codolio.com/profile/noni05", "_blank");
              }}
            >
              <Code className="h-5 w-5" />
            </button>
            <button 
              className="text-gray-400 hover:text-white p-2 transition-colors relative z-10"
              style={{ pointerEvents: 'auto' }}
              title="LinkedIn"
              onClick={() => {
                console.log("LinkedIn button clicked");
                window.open("https://www.linkedin.com/in/ananya-nagpal-23aa73256/", "_blank");
              }}
            >
              <Linkedin className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
