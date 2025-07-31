"use client"

import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SocialSidebar from "@/components/social-sidebar"

export default function GodaiWellnessEngineering() {
  return (
    <div className="h-screen bg-black text-white overflow-y-auto">
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
          </div>

          {/* Story Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-mono text-3xl font-bold mb-8 text-pink-400 text-center">
                  🌅 Warming up: What to expect…?
                </h2>
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-center text-xl font-medium text-white">
                      Hey there — you made it!
                    </p>
                    <p className="text-gray-300">
                      If you're reading this, there's a good chance you're curious about Godai, and I promise it's not just another wellness app.
                    </p>
                    <p className="text-gray-300">
                      Let me quickly set the stage for what's ahead:
                    </p>
                    <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-pink-400">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-3">•</span>
                          <span>First up, we'll explore the real-life struggles that sparked this project — something painfully familiar, especially for young dreamers navigating burnout in silence.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-3">•</span>
                          <span>Then, we'll float into a bird's-eye view of how Godai is designed — think of it like building a safe haven, with tech as the foundation and emotion as the blueprint.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-3">•</span>
                          <span>Still on board? Cool. We'll then take a peek under the hood — the database design that holds it all together.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-3">•</span>
                          <span>Finally, I'll walk you through a few standout features and wrap things up with the tech stack — a quiet but mighty force powering the calm.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-xl text-white font-medium">
                        So…
                      </p>
                      <p className="text-lg text-gray-300">
                        Take a deep breath.
                      </p>
                      <p className="text-xl text-pink-400 font-semibold">
                        Let's begin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-mono text-3xl font-bold mb-8 text-pink-400 text-center">
                  🌘 Once not-so-long ago...
                </h2>
                <div className="prose prose-invert max-w-none">
                  <div className="space-y-6 text-lg leading-relaxed">
                    <div className="text-center mb-8">
                      <p className="text-2xl font-bold text-white mb-2">
                        Meet Ananya.
                      </p>
                      <p className="text-xl text-pink-400 font-medium">
                        Smart, curious, full of fire.
                      </p>
                    </div>
                    
                    <p className="text-gray-300">
                      She could debug in her sleep, ace coding rounds, and speak fluent tech. Her GitHub was active, her inbox full of job portals, and her days packed with ambition.
                    </p>
                    
                    <p className="text-gray-300">
                      But even superheroes have limits.
                    </p>
                    
                    <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-red-400">
                      <p className="text-gray-300">
                        Despite the effort, the outcomes didn't match.
                      </p>
                      <p className="text-gray-300">
                        No callbacks. No offers. Just… static.
                      </p>
                    </div>
                    
                    <p className="text-gray-300">
                      At first, she shrugged it off.
                    </p>
                    
                    <p className="text-gray-300">
                      Then came the overthinking, the fatigue, the constant inner chatter:
                    </p>
                    
                    <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-400">
                      <p className="italic text-lg text-yellow-300 font-medium">
                        "Maybe I'm not good enough. Maybe I'm just… stuck."
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <p className="text-gray-400 text-sm">Sleep?</p>
                        <p className="text-red-400 font-semibold">Fragmented.</p>
                      </div>
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <p className="text-gray-400 text-sm">Emotions?</p>
                        <p className="text-red-400 font-semibold">Bottled up.</p>
                      </div>
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <p className="text-gray-400 text-sm">Focus?</p>
                        <p className="text-red-400 font-semibold">Drifting.</p>
                      </div>
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <p className="text-gray-400 text-sm">Self-worth?</p>
                        <p className="text-red-400 font-semibold">Quietly eroding.</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300">
                      She tried wellness apps — but they felt shallow, too clinical.
                    </p>
                    <p className="text-gray-300">
                      Journals turned into tasks.
                    </p>
                    <p className="text-gray-300">
                      AI chats felt... algorithmic.
                    </p>
                    
                    <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-400">
                      <p className="text-gray-300 font-medium">
                        What she really wanted?
                      </p>
                      <p className="text-gray-300">
                        Something that understood her chaos without demanding to fix it.
                      </p>
                      <p className="text-gray-300">
                        Something that held space — not just gave advice.
                      </p>
                    </div>
                    
                    <p className="text-gray-300">
                      That's when Godai stepped in.
                    </p>
                    
                    <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-400">
                      <p className="text-gray-300">
                        A space not to perform, but to pause.
                      </p>
                      <p className="text-gray-300">
                        Not to track, but to understand.
                      </p>
                      <p className="text-gray-300">
                        Not to hustle, but to heal — slowly, gently, with the wisdom of nature's five elements.
                      </p>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600">
                      <h3 className="text-center text-xl font-bold text-white mb-6">The Five Elements</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        <div className="text-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                          <div className="text-4xl mb-3">🌍</div>
                          <div className="text-sm font-medium text-white">Earth</div>
                          <div className="text-xs text-gray-400">for grounding</div>
                        </div>
                        <div className="text-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                          <div className="text-4xl mb-3">🌊</div>
                          <div className="text-sm font-medium text-white">Water</div>
                          <div className="text-xs text-gray-400">for flow</div>
                        </div>
                        <div className="text-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                          <div className="text-4xl mb-3">🔥</div>
                          <div className="text-sm font-medium text-white">Fire</div>
                          <div className="text-xs text-gray-400">for drive</div>
                        </div>
                        <div className="text-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                          <div className="text-4xl mb-3">💨</div>
                          <div className="text-sm font-medium text-white">Air</div>
                          <div className="text-xs text-gray-400">for clarity</div>
                        </div>
                        <div className="text-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                          <div className="text-4xl mb-3">🌌</div>
                          <div className="text-sm font-medium text-white">Void</div>
                          <div className="text-xs text-gray-400">for stillness</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Engineering Details */}
          <div className="space-y-12">
            
            {/* Database Design */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Database Design
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="space-y-6">
                  <p className="font-mono text-gray-300">
                    The Godai Wellness platform uses a comprehensive database schema designed to handle user data, 
                    journaling, mood tracking, surveys, sleep data, and session management. The schema follows 
                    a relational design with the user table as the central hub.
                  </p>
                  
                  <div className="flex justify-center">
                    <Image
                      src="/database.png"
                      alt="Godai Wellness Database Schema"
                      width={800}
                      height={600}
                      className="rounded-lg border border-gray-600"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Features Analysis */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Features Analysis
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="space-y-8">
                  
                  {/* Chat Feature */}
                  <div>
                    <h3 className="font-mono text-xl font-semibold mb-4 text-white">
                      01. Vaira - AI Therapist
                    </h3>
                    <div className="space-y-4">
                      <p className="font-mono text-gray-300">
                        An AI-powered chat service with comprehensive system architecture. The service includes user interaction with therapist selection, frontend interface, EC2 AI service processing, chat history database, RAG engine for context retrieval, and Gemini API integration for intelligent responses.
                      </p>
                      
                      <div className="mt-6">
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                          <div className="flex justify-center">
                            <Image
                              src="/chat.png"
                              alt="AI Chat Service Architecture"
                              width={800}
                              height={800}
                              className="rounded-lg border border-gray-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journal Feature */}
                  <div>
                    <h3 className="font-mono text-xl font-semibold mb-4 text-white">
                      02. Private Journal 
                    </h3>
                    <div className="space-y-4">
                      <p className="font-mono text-gray-300">
                      The journal is implemented through an AI agent (RAG) built using Langgraph that extracts the last 10 journal entries from the database, submits them to LLM, then saves the structured output from the LLM to the database.
                      </p>
                      
                      <div className="mt-6">
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                          <div className="flex justify-center">
                            <Image
                              src="/journal.jpeg"
                              alt="Journal Entry Creation Flow"
                              width={800}
                              height={600}
                              className="rounded-lg border border-gray-600"
                            />
                          </div>
                        </div>
                      </div>
                      
                    
                    </div>
                  </div>

                  {/* Mood/Sleep Tracker Feature */}
                  <div>
                    <h3 className="font-mono text-xl font-semibold mb-4 text-white">
                      03. Mood/Sleep Tracker
                    </h3>
                    <div className="space-y-4">
                      <p className="font-mono text-gray-300">
                        A comprehensive mood and sleep tracking system with detailed workflow architecture. The system includes user interaction interfaces, API gateway authentication, serverless processing with Lambda functions, database storage with indexing, and robust error handling with retry mechanisms.
                      </p>
                      
                      <div className="mt-6">
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                          <div className="flex justify-center">
                            <Image
                              src="/mood.png"
                              alt="Mood/Sleep Tracker Workflow Architecture"
                              width={800}
                              height={600}
                              className="rounded-lg border border-gray-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quiz Feature */}
                  <div>
                    <h3 className="font-mono text-xl font-semibold mb-4 text-white">
                      04. Quiz Feature
                    </h3>
                    <div className="space-y-4">
                      <p className="font-mono text-gray-300">
                        An interactive quiz system with comprehensive workflow management. The feature includes user interaction flow, gateway validation, serverless processing, database storage, and results analytics with user feedback display.
                      </p>
                      
                      <div className="mt-6">
                        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                          <div className="flex justify-center">
                            <Image
                              src="/quiz.png"
                              alt="Quiz Feature Workflow Architecture"
                              width={800}
                              height={600}
                              className="rounded-lg border border-gray-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                🛠️ Tech Stack
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                  {/* Backend Technologies */}
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🐍</div>
                      <h3 className="font-mono text-sm font-semibold text-blue-200">Python</h3>
                      <p className="text-xs text-blue-300 mt-1">AI/ML Processing</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900 to-green-800 border border-green-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🚀</div>
                      <h3 className="font-mono text-sm font-semibold text-green-200">Golang</h3>
                      <p className="text-xs text-green-300 mt-1">High Performance</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🗄️</div>
                      <h3 className="font-mono text-sm font-semibold text-purple-200">DynamoDB</h3>
                      <p className="text-xs text-purple-300 mt-1">NoSQL Database</p>
                    </div>
                  </div>

                  {/* Frontend Technologies */}
                  <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 border border-indigo-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔷</div>
                      <h3 className="font-mono text-sm font-semibold text-indigo-200">Next.js</h3>
                      <p className="text-xs text-indigo-300 mt-1">Full Stack</p>
                    </div>
                  </div>

                  {/* AI/ML Technologies */}
                  <div className="bg-gradient-to-br from-pink-900 to-pink-800 border border-pink-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🤖</div>
                      <h3 className="font-mono text-sm font-semibold text-pink-200">LLMs</h3>
                      <p className="text-xs text-pink-300 mt-1">AI Intelligence</p>
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

                </div>
                
                {/* Fun Description */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600">
                  <div className="text-center">
                    <h3 className="font-mono text-lg font-semibold text-pink-400 mb-3">
                      🎨 The Tech Palette
                    </h3>
                    <p className="font-mono text-gray-300 text-sm leading-relaxed">
                      Each technology is like a brush stroke in our wellness masterpiece. 
                      From the lightning-fast Lambda functions to the empathetic LLMs, 
                      every component works in harmony to create a platform that's not just 
                      functional, but truly healing. Think of it as a digital garden where 
                      each tech choice nurtures the user's mental well-being.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Bottom Spacing */}
      <div className="h-32"></div>
    </div>
  )
} 