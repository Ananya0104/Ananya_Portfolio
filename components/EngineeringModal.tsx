"use client"

import { X, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Project } from "@/lib/projects-data"

interface EngineeringModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function EngineeringModal({ project, isOpen, onClose }: EngineeringModalProps) {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-700 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={project.image}
                alt={project.title}
                width={60}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h2 className="font-mono text-2xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="font-mono text-gray-400">Engineering Deep Dive</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Links */}
          <div className="flex space-x-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 px-4 py-2 bg-transparent rounded"
            >
              Live Demo
              <ExternalLink className="ml-2 h-4 w-4 inline" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-gray-600 text-gray-400 hover:border-pink-400 hover:text-pink-400 transition-all duration-300 px-4 py-2 bg-transparent rounded"
            >
              <Github className="h-4 w-4 mr-2 inline" />
              Source Code
            </a>
          </div>

          {/* Architecture Overview */}
          <section>
            <h3 className="font-mono text-xl font-semibold mb-4 text-pink-400">
              Architecture Overview
            </h3>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-mono text-lg font-semibold mb-3 text-white">Frontend</h4>
                  <ul className="font-mono text-gray-300 space-y-2">
                    <li>• Next.js with TypeScript</li>
                    <li>• TailwindCSS for styling</li>
                    <li>• React Hook Form for validation</li>
                    <li>• Framer Motion for animations</li>
                    <li>• Responsive design with mobile-first approach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-lg font-semibold mb-3 text-white">Backend</h4>
                  <ul className="font-mono text-gray-300 space-y-2">
                    <li>• Golang for high-performance APIs</li>
                    <li>• AWS Lambda for serverless functions</li>
                    <li>• DynamoDB for data persistence</li>
                    <li>• AWS Cognito for authentication</li>
                    <li>• API Gateway for RESTful endpoints</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AI/ML Components */}
          <section>
            <h3 className="font-mono text-xl font-semibold mb-4 text-pink-400">
              AI/ML Components
            </h3>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-lg font-semibold mb-2 text-white">Vaira - AI Chatbot</h4>
                  <p className="font-mono text-gray-300 mb-2">
                    An empathetic AI chatbot designed to provide mental health support through natural conversations.
                  </p>
                  <ul className="font-mono text-gray-300 space-y-1 text-sm">
                    <li>• Built with OpenAI GPT-4 for natural language understanding</li>
                    <li>• Custom prompt engineering for empathetic responses</li>
                    <li>• Context-aware conversations with memory</li>
                    <li>• Safety filters and crisis detection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-lg font-semibold mb-2 text-white">Smart Journaling</h4>
                  <p className="font-mono text-gray-300 mb-2">
                    AI-powered journaling that analyzes mood patterns and provides insights.
                  </p>
                  <ul className="font-mono text-gray-300 space-y-1 text-sm">
                    <li>• Sentiment analysis using NLP</li>
                    <li>• Mood pattern recognition</li>
                    <li>• Personalized insights and recommendations</li>
                    <li>• Privacy-first data processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Challenges */}
          <section>
            <h3 className="font-mono text-xl font-semibold mb-4 text-pink-400">
              Technical Challenges & Solutions
            </h3>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-lg font-semibold mb-2 text-white">Real-time SOS Alerts</h4>
                  <p className="font-mono text-gray-300">
                    Implemented a real-time alert system for crisis situations using WebSockets and AWS SNS.
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-lg font-semibold mb-2 text-white">Data Privacy & Security</h4>
                  <p className="font-mono text-gray-300">
                    Built end-to-end encryption for sensitive mental health data with HIPAA compliance considerations.
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-lg font-semibold mb-2 text-white">Scalable Architecture</h4>
                  <p className="font-mono text-gray-300">
                    Designed a microservices architecture that can handle thousands of concurrent users with auto-scaling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Metrics */}
          <section>
            <h3 className="font-mono text-xl font-semibold mb-4 text-pink-400">
              Performance & Impact
            </h3>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-pink-400 mb-1">99.9%</div>
                  <div className="font-mono text-gray-300 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-pink-400 mb-1">&lt;200ms</div>
                  <div className="font-mono text-gray-300 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-pink-400 mb-1">10K+</div>
                  <div className="font-mono text-gray-300 text-sm">Active Users</div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h3 className="font-mono text-xl font-semibold mb-4 text-pink-400">
              Key Learnings
            </h3>
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
              <ul className="font-mono text-gray-300 space-y-2">
                <li>• Importance of mental health data privacy and ethical AI development</li>
                <li>• Building scalable systems for sensitive applications</li>
                <li>• Real-time communication challenges in healthcare applications</li>
                <li>• Balancing AI capabilities with human oversight in mental health</li>
                <li>• Cross-platform development for maximum accessibility</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 