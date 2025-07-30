"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface TechStackModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TechStackModal({ isOpen, onClose }: TechStackModalProps) {
  const techStack = [
    {
      name: "Python",
      icon: "🐍",
      category: "ML & Problem Solving",
      description: "My primary language for machine learning, AI development, and problem-solving. I've used it extensively in building intelligent systems, writing clean backend logic, and participating in coding challenges and algorithmic problem-solving."
    },
    {
      name: "Golang",
      icon: "🐹",
      category: "Backend Development",
      description: "I use Golang to build high-performance, concurrent backend services. It's especially powerful for handling stateless functions and secure microservices."
    },
    {
      name: "Next.js",
      icon: "⚛️",
      category: "Frontend Development",
      description: "I use Next.js to build fast, scalable, and SEO-friendly frontend interfaces. It powers the frontend of my website, enabling server-side rendering, dynamic routing, and smooth user experiences."
    },
    {
      name: "AWS",
      icon: "☁️",
      category: "Backend Deployment",
      description: "Build and deploy highly scalable applications using AWS Lambda, Amplify, and DynamoDB — eliminating the need for infrastructure management."
    },
    {
      name: "OOPs",
      icon: "🔄",
      category: "Scalable Design",
      description: "Proficient in applying object-oriented design principles to build clean, reusable, and maintainable code across backend systems and AI modules."
    },
    {
      name: "CI/CD",
      icon: "⚙️",
      category: "GitHub Actions",
      description: "Implement automated pipelines to continuously integrate and deploy code with testing, linting, and build steps for fast, reliable delivery."
    },
    {
      name: "Databases",
      icon: "🗄️",
      category: "SQL & NoSQL",
      description: "Proficient in designing and querying relational databases using SQL (MySQL), and working with NoSQL databases like DynamoDB for flexible, scalable data storage in serverless applications."
    },
    {
      name: "Retrieval-Augmented Generation (RAG)",
      icon: "🤖",
      category: "Artificial Intelligence",
      description: "I've explored retrieval and generation strategies through hands-on research and implementation. Using LangChain, I built intelligent systems like VidGenie (VigeoRAG) that combine LLMs with contextual data to deliver accurate, dynamic responses — enhancing both performance and user experience."
    },
    {
      name: "ML Tools",
      icon: "🔧",
      category: "Intelligent Systems",
      description: "Utilize Pandas and scikit-learn for classic ML workflows and PyTorch for deep learning tasks, including training, inference, and experimentation."
    },
    {
      name: "Figma",
      icon: "🎨",
      category: "UI Design",
      description: "Design intuitive, responsive user interfaces using Figma — streamlining collaboration and delivering developer-friendly design specs."
    }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-700 px-8 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="font-mono text-3xl text-white">
              My Tech Toolbox
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="border border-gray-600 rounded-lg p-8 hover:border-pink-400 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl flex-shrink-0">{tech.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="font-mono text-white text-xl font-semibold">
                          {tech.name}
                        </h3>
                        <span className="font-mono text-pink-400 text-sm bg-pink-400 bg-opacity-10 px-3 py-1 rounded">
                          {tech.category}
                        </span>
                      </div>
                      <p className="font-mono text-gray-300 text-base leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 