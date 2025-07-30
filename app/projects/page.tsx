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
    : projects.filter(project => project.category === selectedCategory)

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
            <span className="text-white">Ananya</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="font-mono text-4xl font-normal mb-4">
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
          <div className="mb-12">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-transparent border border-gray-600 rounded-lg overflow-hidden hover:border-pink-400 transition-all duration-300 group"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
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
                  <div className="p-4 space-y-4">
                    <div>
                      <h3 className="font-mono text-white text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="font-mono text-gray-400 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 flex-1 bg-transparent px-3 py-2 rounded text-sm"
                      >
                        Live
                        <ExternalLink className="ml-2 h-3 w-3 inline" />
                      </button>
                      <button
                        className="font-mono border border-gray-600 text-gray-400 hover:border-pink-400 hover:text-pink-400 transition-all duration-300 bg-transparent px-3 py-2 rounded text-sm"
                      >
                        <Github className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="font-mono text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 