"use client"

import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SocialSidebar from "@/components/social-sidebar"

export default function GodaiWellnessEngineering() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Left Social Sidebar */}
      <SocialSidebar />
      
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/projects">
              <button className="text-gray-400 hover:text-white px-4 py-2 rounded transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2 inline" />
                Back to Projects
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
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/godai_p.png"
                alt="Godai Wellness Platform"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-mono text-4xl font-normal">
                  <span className="text-pink-400">#</span>
                  <span className="text-white">godai-wellness-engineering</span>
                </h1>
                <p className="font-mono text-gray-400 mt-2">AI-Powered Mental Wellness Platform</p>
              </div>
            </div>
            <div className="w-64 h-px bg-pink-400 mb-8"></div>
          </div>

          {/* Project Links */}
          <div className="flex space-x-4 mb-12">
            <a
              href="https://godaiwellness.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 px-6 py-3 bg-transparent rounded"
            >
              Live Demo
              <ExternalLink className="ml-2 h-4 w-4 inline" />
            </a>
            <a
              href="https://github.com/godai-wellness/godai-wellness-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-gray-600 text-gray-400 hover:border-pink-400 hover:text-pink-400 transition-all duration-300 px-6 py-3 bg-transparent rounded"
            >
              <Github className="h-4 w-4 mr-2 inline" />
              Source Code
            </a>
          </div>

          {/* Engineering Details */}
          <div className="space-y-12">
            {/* Architecture Overview */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Architecture Overview
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Frontend</h3>
                    <ul className="font-mono text-gray-300 space-y-2">
                      <li>• Next.js with TypeScript</li>
                      <li>• TailwindCSS for styling</li>
                      <li>• React Hook Form for validation</li>
                      <li>• Framer Motion for animations</li>
                      <li>• Responsive design with mobile-first approach</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Backend</h3>
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
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                AI/ML Components
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Vaira - AI Chatbot</h3>
                    <p className="font-mono text-gray-300 mb-3">
                      An empathetic AI chatbot designed to provide mental health support through natural conversations.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-1">
                      <li>• Built with OpenAI GPT-4 for natural language understanding</li>
                      <li>• Custom prompt engineering for empathetic responses</li>
                      <li>• Context-aware conversations with memory</li>
                      <li>• Safety filters and crisis detection</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Smart Journaling</h3>
                    <p className="font-mono text-gray-300 mb-3">
                      AI-powered journaling that analyzes mood patterns and provides insights.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-1">
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
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Technical Challenges & Solutions
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Real-time SOS Alerts</h3>
                    <p className="font-mono text-gray-300">
                      Implemented a real-time alert system for crisis situations using WebSockets and AWS SNS.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Data Privacy & Security</h3>
                    <p className="font-mono text-gray-300">
                      Built end-to-end encryption for sensitive mental health data with HIPAA compliance considerations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Scalable Architecture</h3>
                    <p className="font-mono text-gray-300">
                      Designed a microservices architecture that can handle thousands of concurrent users with auto-scaling.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Metrics */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Performance & Impact
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-pink-400 mb-2">99.9%</div>
                    <div className="font-mono text-gray-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-pink-400 mb-2">&lt;200ms</div>
                    <div className="font-mono text-gray-300">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-pink-400 mb-2">10K+</div>
                    <div className="font-mono text-gray-300">Active Users</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Learnings */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Key Learnings
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <ul className="font-mono text-gray-300 space-y-3">
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
    </div>
  )
} 