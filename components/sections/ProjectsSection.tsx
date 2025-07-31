"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects-data"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 relative">
      <div className="dots-pattern absolute inset-0 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Projects Grid - Show 2 projects horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, 2).map((project, index) => (
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
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-mono text-white text-lg font-semibold mb-2">{project.title}</h3>
                <p className="font-mono text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3 items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.categories.map((category, idx) => (
                      <span key={idx} className="font-mono text-xs bg-pink-400 bg-opacity-20 text-pink-400 px-2 py-1 rounded">
                        {category}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 p-1 rounded"
                    >
                      <Github className="h-3 w-3" />
                    </a>
                  )}
                </div>
                <div className="font-mono text-gray-400 text-xs mb-3">{project.technologies.join(" ")}</div>
                <div className="space-y-2 relative z-20">

                  <div className="flex space-x-2">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 flex-1 bg-transparent text-sm px-4 py-2 rounded text-center relative z-20 cursor-pointer flex items-center justify-center"
                        style={{ pointerEvents: 'auto' }}
                        onClick={() => console.log('Live button clicked for:', project.title)}
                      >
                        <span>Live</span>
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    )}
                    {project.documentationUrl && (
                      <a
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 flex-1 bg-transparent text-sm px-4 py-2 rounded text-center relative z-20 cursor-pointer flex items-center justify-center"
                        style={{ pointerEvents: 'auto' }}
                      >
                        <span>Documentation</span>
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    )}
                    <Link href={project.engineeringUrl} className="flex-1">
                      <button className="font-mono border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 w-full bg-transparent text-sm px-4 py-2 rounded text-center relative z-20" style={{ pointerEvents: 'auto' }}>
                        Engineering
                      </button>
                    </Link>
                  </div>
                </div>
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