"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

interface HomeSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-8 relative">
      <div className="geometric-lines"></div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="font-mono text-4xl lg:text-5xl font-normal leading-tight">
              <div className="mb-2">
                <span className="text-white">Hi, I'm </span>
                <span className="text-pink-400 typewriter">Ananya Nagpal</span>
              </div>
              <div className="mt-2">
                <span className="text-white">A passionate </span>
                <span className="text-pink-400 typewriter-line-2">Full Stack Developer</span>
                <span className="text-white"> & </span>
                <span className="text-pink-400 typewriter-line-2">AI Enthusiast</span>
              </div>
            </div>

            <p className="font-mono text-gray-400 text-lg max-w-lg leading-relaxed">
            From frontend finesse to AI-powered backends — I build products that think, scale, and solve.
            </p>
          </div>

          <div className="border border-pink-400 rounded-lg p-4 inline-block">
            <button 
              onClick={() => scrollToSection("about")}
              className="font-mono text-white flex items-center space-x-2 hover:text-pink-400 transition-colors"
            >
              <span>Scroll Down</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Content - Profile */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Geometric decoration around profile */}
            <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg opacity-20"></div>
            <div className="absolute -inset-2 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg opacity-40"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me.jpg-jBoXaIYljWRJwSnk5Qmf3pUktBPW1O.jpeg"
              alt="Ananya Nagpal"
              width={300}
              height={300}
              className="rounded-lg object-cover relative z-10 w-64 h-64 lg:w-80 lg:h-80"
            />
          </div>

          {/* Status Box */}
          <div className="absolute bottom-0 right-0 border border-pink-400 rounded-lg p-4 font-mono text-sm bg-black bg-opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Currently working on</span>
              <span className="text-white font-semibold">Portfolio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
        <div className="border-2 border-dashed border-white rounded-lg p-4 lg:p-6 text-center">
          <div className="text-4xl text-pink-400 mb-2">"</div>
          <p className="font-mono text-white text-lg leading-relaxed">
          Debug your comfort zone — that&apos;s where version 2.0 of you begins.
          </p>
          <p className="font-mono text-pink-400 text-xs mt-2">- Mr. Who</p>
        </div>
      </div>
    </section>
  )
} 