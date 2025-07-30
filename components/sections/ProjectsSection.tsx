"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8 relative">
      <div className="dots-pattern"></div>
      <div className="w-full px-80">
        {/* Projects Header */}
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="font-mono text-4xl font-normal mb-4">
              <span className="text-pink-400">#</span>
              <span className="text-white">projects</span>
            </h1>
            <div className="w-64 h-px bg-pink-400"></div>
          </div>
        </div>

        {/* Projects Grid - Show 3 projects horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.slice(0, 3).map((project, index) => (
            <Card
              key={index}
              className="bg-transparent border border-gray-600 rounded-lg overflow-hidden hover:border-pink-400 transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-mono text-white text-lg font-semibold mb-2">{project.title}</h3>
                <p className="font-mono text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>
                <div className="font-mono text-gray-400 text-xs mb-3">{project.technologies.join(" ")}</div>
                <button
                  className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 w-full bg-transparent text-sm px-4 py-2 rounded"
                >
                  Live
                  <ExternalLink className="ml-2 h-3 w-3" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Explore All Projects Button */}
        <div className="text-right relative z-10">
          <Link href="/projects">
            <button
              className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 px-8 py-3 bg-transparent cursor-pointer rounded relative z-20"
              style={{ pointerEvents: 'auto' }}
            >
              Explore all projects
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
} 