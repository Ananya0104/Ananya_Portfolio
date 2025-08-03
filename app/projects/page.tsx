"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ArrowLeft, Github } from "lucide-react"
import Link from "next/link"
import SocialSidebar from "@/components/social-sidebar"
import { projects, categories } from "@/lib/projects-data"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedCategory))

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Left Social Sidebar */}
      <SocialSidebar />
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <button className="text-gray-400 hover:text-white px-4 py-2 rounded transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2 inline" />
                Back to Portfolio
              </button>
            </Link>
          </div>
          <div className="text-xl font-mono font-bold">
            <span className="text-white">@</span>
            <span className="text-white">AnanyaNagpal</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="font-mono text-4xl font-normal mb-6">
              <span className="text-pink-400">#</span>
              <span className="text-white">all-projects</span>
            </h1>
            <div className="w-64 h-px bg-pink-400 mb-8"></div>
            <p className="font-mono text-gray-400 text-lg max-w-2xl">
              A collection of my projects showcasing various technologies and problem-solving approaches. 
              From AI/ML applications to full-stack web development, each project represents different challenges and learning experiences.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`font-mono transition-all duration-300 px-4 py-2 rounded border ${
                    selectedCategory === category.id
                      ? "bg-pink-400 text-black hover:bg-pink-500"
                      : "border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black bg-transparent"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-transparent border border-gray-600 rounded-lg overflow-hidden hover:border-pink-400 transition-all duration-300 group"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={800}
                    className="w-full h-80 object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-pink-400 text-black px-2 py-1 rounded text-xs font-mono font-semibold">
                      Featured
                    </div>
                  )}

                </div>
                <CardContent className="p-0">
                  {/* Tech Stack */}
                  <div className="px-4 py-3 border-b border-gray-600">
                    <div className="font-mono text-gray-400 text-sm">{project.technologies.join(" ")}</div>
                  </div>
                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-mono text-white text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="font-mono text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4 items-center justify-between">
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
                    </div>
                    <div className="space-y-2 relative z-20">
                      <div className="flex space-x-2">
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 flex-1 bg-transparent px-3 py-2 rounded text-sm text-center cursor-pointer relative z-20 flex items-center justify-center"
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
                            className="font-mono border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 flex-1 bg-transparent px-3 py-2 rounded text-sm text-center cursor-pointer flex items-center justify-center"
                            style={{ pointerEvents: 'auto' }}
                          >
                            <span>Documentation</span>
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        )}
                        <Link href={project.engineeringUrl} className="flex-1">
                          <button className="font-mono border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 w-full bg-transparent px-3 py-2 rounded text-sm text-center">
                            Engineering
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-mono text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Spacing */}
      <div className="h-32"></div>
      
    </div>
  )
} 