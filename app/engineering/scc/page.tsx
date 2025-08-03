"use client"

import { ArrowLeft, Github, ExternalLink, FileText, Database, Cpu, Search, MessageSquare, Code, Zap, Target, TrendingUp, Lightbulb, CheckCircle, Phone, Users, Shield, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SocialSidebar from "@/components/social-sidebar"

export default function SCCEngineering() {
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
          <div className="mb-16">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <div>
                <h1 className="font-mono text-4xl font-normal">
                  <span className="text-blue-400">#</span>
                  <span className="text-white">Super-Customer-Care-Engineering</span>
                </h1>
                <p className="font-mono text-gray-400 mt-2">Support Reimagined</p>
              </div>
            </div>
            <div className="w-640 h-px bg-blue-400 mb-8"></div>
          </div>

          {/* Project Links */}
          <div className="flex space-x-4 mb-16">
            <a
              href="https://supercustomercare.club/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 px-6 py-3 bg-transparent rounded"
            >
              <ExternalLink className="h-4 w-4 mr-2 inline" />
              Live Demo
            </a>
          </div>

          {/* Engaging Introduction */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🌅</div>
                <h2 className="font-mono text-2xl font-semibold text-blue-400 mb-4">
                  Warming up: What to expect…?
                </h2>
                <p className="font-mono text-gray-300 text-lg">
                  Hey — welcome in! 🙌
                </p>
                <p className="font-mono text-gray-300 mt-2">
                  If you've ever tried calling customer support and ended up with a headache instead of help… you're going to feel right at home here.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-mono text-lg font-semibold text-white mb-4">
                  Let me quickly break down what's ahead:
                </h3>
                <div className="space-y-3 font-mono text-gray-300">
                  <div className="flex items-start">
                    <div className="bg-blue-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>We'll start with the real (and frustrating) problem that sparked this idea — one that millions silently tolerate every day.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Next, we'll lift the curtain on how Super Customer Care rethinks the support experience — from endless menus to instant, human connection.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Still curious? Awesome. We'll peek under the hood — the smart tech that powers the magic without making things feel robotic.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Finally, we'll explore key features, a quick dive into the stack, and a glimpse of what's next.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <h2 className="font-mono text-2xl font-bold mb-8 text-red-400 text-center">
                🌘 Once not-so-long ago…
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-red-400">
                  <p className="text-gray-300 mb-4">
                    <strong className="text-white">Meet Ananya.</strong>
                  </p>
                  <p className="text-gray-300 mb-4">
                    Not a coder. Not a techie. Just a bright, busy student with a phone issue.
                  </p>
                  <p className="text-gray-300">
                    One morning, her mobile stopped working properly. Calls wouldn't connect. Texts failed. She panicked — it was her only way to stay in touch during exams.
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-400">
                  <p className="text-gray-300 mb-4">
                    So she did what anyone would do:
                  </p>
                  <p className="text-gray-300 text-center text-xl">
                    📞 She called customer support.
                  </p>
                  <p className="text-gray-300 text-center text-lg mt-2">
                    <strong>Big mistake.</strong>
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-red-400">
                  <div className="space-y-3 text-gray-300">
                    <p className="text-center font-mono">
                      "Press 1 for billing."
                    </p>
                    <p className="text-center font-mono">
                      "Press 2 for technical issues."
                    </p>
                    <p className="text-center font-mono">
                      "Press 9 to repeat this entire menu."
                    </p>
                    <p className="text-center text-lg mt-4">
                      Cue the music that haunts your dreams… 🎵
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-900 border border-red-600 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⏰</div>
                    <p className="text-sm text-red-300">5 minutes</p>
                    <p className="text-xs text-red-400">became 10</p>
                  </div>
                  <div className="bg-yellow-900 border border-yellow-600 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⏰</div>
                    <p className="text-sm text-yellow-300">10 minutes</p>
                    <p className="text-xs text-yellow-400">became 20</p>
                  </div>
                  <div className="bg-red-900 border border-red-600 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔄</div>
                    <p className="text-sm text-red-300">Transfers</p>
                    <p className="text-xs text-red-400">after transfers</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-red-400">
                  <p className="text-gray-300 text-center">
                    She kept waiting, listening to loops, and hoping someone — anyone — would finally speak.
                  </p>
                  <p className="text-gray-300 text-center mt-2">
                    When someone finally did pick up, they transferred her.
                  </p>
                  <p className="text-gray-300 text-center">
                    And then again. And again.
                  </p>
                  <p className="text-gray-300 text-center mt-4">
                    <strong>Eventually, the line dropped.</strong>
                  </p>
                  <p className="text-gray-300 text-center">
                    No resolution. No callback. Just frustration.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-400">
                  <p className="text-gray-300 italic text-center text-lg">
                    She thought, "Is this seriously the best we can do?"
                  </p>
                </div>
              </div>
            </div>
            </section>

            {/* The Solution */}
            <section className="mb-20">
              <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border-blue-400">
                <h2 className="font-mono text-2xl font-bold mb-8 text-green-400 text-center">
                  💡 The Solution: Super Customer Care
                </h2>
                <div className="space-y-8">
                  <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-400">
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">That moment — multiplied by millions — is what led to this:</strong>
                    </p>
                    <p className="text-gray-300">
                      A smarter, friendlier, human-first platform for customer support that eliminates endless menus and connects users to real help instantly.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
                      <div className="flex items-center mb-4">
                        <Phone className="h-6 w-6 text-green-400 mr-3" />
                        <h3 className="font-mono text-lg font-semibold text-white">One-Click Video</h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        No menus. Just instant face-to-face help
                      </p>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
                      <div className="flex items-center mb-4">
                        <MessageCircle className="h-6 w-6 text-purple-400 mr-3" />
                        <h3 className="font-mono text-lg font-semibold text-white">Context-Aware</h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Agents know your issue before you start
                      </p>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
                      <div className="flex items-center mb-4">
                        <Shield className="h-6 w-6 text-yellow-400 mr-3" />
                        <h3 className="font-mono text-lg font-semibold text-white">No Elevator Music</h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Service, not a hostage situation
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-400">
                    <h3 className="font-mono text-lg font-semibold text-white mb-4">The Five Feelings We Replaced:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="text-2xl mb-2">❌</div>
                        <p className="text-xs text-red-300">Confusion</p>
                        <div className="text-lg text-green-400">→</div>
                        <p className="text-xs text-green-300">Clarity</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">❌</div>
                        <p className="text-xs text-red-300">Waiting</p>
                        <div className="text-lg text-green-400">→</div>
                        <p className="text-xs text-green-300">Connection</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">❌</div>
                        <p className="text-xs text-red-300">Scripts</p>
                        <div className="text-lg text-green-400">→</div>
                        <p className="text-xs text-green-300">Empathy</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">❌</div>
                        <p className="text-xs text-red-300">Transfers</p>
                        <div className="text-lg text-green-400">→</div>
                        <p className="text-xs text-green-300">Resolution</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">❌</div>
                        <p className="text-xs text-red-300">Bot Replies</p>
                        <div className="text-lg text-green-400">→</div>
                        <p className="text-xs text-green-300">Real Help</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Database Design */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-purple-400 p-3 rounded-lg mr-4">
                  <Database className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-purple-400">
                  🗄️ Database Design
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="mb-6">
                  <p className="font-mono text-gray-300 text-center mb-4">
                    The database schema is designed to efficiently manage partners, users, and their support tickets with clear relationships and optimized data flow.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-4xl">
                    <Image
                      src="/scc_db.png"
                      alt="SCC Database Schema - Entity Relationship Diagram showing super_cc_ticket_queue, super_cc_partners, super_cc_ticket_archive, and super_cc_users collections with their relationships"
                      width={800}
                      height={600}
                      className="rounded-lg border border-gray-600 shadow-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Analysis */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-green-400 p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-green-400">
                  🎯 Feature Analysis
                </h2>
              </div>
              
              {/* Ticket and Queue Management System */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-400 p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5 text-black" />
                  </div>
                  <h3 className="font-mono text-xl font-semibold text-blue-400">
                    1. Ticket and Queue Management System
                  </h3>
                </div>
                
                <div className="mb-6">
                  <p className="font-mono text-gray-300 text-center mb-4">
                    A sophisticated state machine that manages the complete lifecycle of support tickets, from initial queue entry to final resolution or archival.
                  </p>
                </div>
                
                <div className="flex justify-center mb-6">
                  <div className="relative w-full max-w-4xl">
                    <Image
                      src="/queue.png"
                      alt="Queue Management System State Diagram showing user states: User Joins Queue, Processing, Waiting, Completed, Left, and Archived states with transition paths"
                      width={800}
                      height={400}
                      className="rounded-lg border border-gray-600 shadow-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Engineering Details */}
            <div className="space-y-16">
            {/* Tech Stack */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-blue-400 p-3 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-blue-400">
                  🛠️ Tech Stack
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Backend Technologies */}
                  <div className="bg-gradient-to-br from-green-900 to-green-800 border border-green-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🚀</div>
                      <h3 className="font-mono text-sm font-semibold text-green-200">Golang</h3>
                      <p className="text-xs text-green-300 mt-1">High Performance</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔷</div>
                      <h3 className="font-mono text-sm font-semibold text-blue-200">Next.js</h3>
                      <p className="text-xs text-blue-300 mt-1">Frontend</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🗄️</div>
                      <h3 className="font-mono text-sm font-semibold text-purple-200">DynamoDB</h3>
                      <p className="text-xs text-purple-300 mt-1">NoSQL Database</p>
                    </div>
                  </div>

                  {/* Cloud & Infrastructure */}
                  <div className="bg-gradient-to-br from-red-900 to-red-800 border border-red-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">☁️</div>
                      <h3 className="font-mono text-sm font-semibold text-red-200">AWS</h3>
                      <p className="text-xs text-red-300 mt-1">Cloud Platform</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 border border-yellow-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📹</div>
                      <h3 className="font-mono text-sm font-semibold text-yellow-200">Jitsi</h3>
                      <p className="text-xs text-yellow-300 mt-1">Video Communication</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-blue-400 p-3 rounded-lg mr-4">
                  <Lightbulb className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-blue-400">
                  Conclusion
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                  <div className="font-mono text-gray-300 space-y-4">
                    <p>
                      Super Customer Care represents the future of customer support, where technology enhances human connection rather than replacing it. The platform demonstrates how AI can be harnessed to eliminate frustration and create meaningful, efficient support experiences.
                    </p>
                    <p>
                      This project showcases the potential of human-first technology while maintaining high performance standards and user experience. The combination of intelligent routing, real-time video communication, and empathetic support creates a powerful tool for customer care that actually cares.
                    </p>
                    <div className="text-center mt-6">
                      <p className="font-mono text-blue-400 font-semibold text-lg">
                        Take a deep breath. Help is now human again. 💬✨
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      
      {/* Bottom Spacing */}
      <div className="h-32"></div>
    </div>
    </div>
  )
} 