"use client"

import { ArrowLeft, Github, ExternalLink, FileText, Database, Cpu, Search, MessageSquare, Code, Zap, Target, TrendingUp, Lightbulb, CheckCircle, Video, Play, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SocialSidebar from "@/components/social-sidebar"

export default function VidGenieEngineering() {
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
              <Image
                src="/vidgenie.png"
                alt="VidGenie"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-mono text-4xl font-normal">
                  <span className="text-pink-400">#</span>
                  <span className="text-white">vidgenie-engineering</span>
                </h1>
                <p className="font-mono text-gray-400 mt-2">AI-Powered Video Generation Platform</p>
              </div>
            </div>
            <div className="w-64 h-px bg-pink-400 mb-8"></div>
          </div>

          {/* Project Links */}
          <div className="flex space-x-4 mb-16">
            <a
              href="https://github.com/Ananya0104/VidGenie"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 px-6 py-3 bg-transparent rounded"
            >
              <Github className="h-4 w-4 mr-2 inline" />
              Source Code
            </a>
            <a
              href="https://vidgenie-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 px-6 py-3 bg-transparent rounded"
            >
              <ExternalLink className="h-4 w-4 mr-2 inline" />
              Live Demo
            </a>
          </div>

          {/* Engaging Introduction */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🎬</div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400 mb-4">
                  Transforming Ideas into Visual Stories
                </h2>
                <p className="font-mono text-gray-300 text-lg">
                  VidGenie is an AI-powered platform that turns text descriptions into engaging video content.
                </p>
                <p className="font-mono text-gray-300 mt-2">
                  From concept to creation in seconds.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-mono text-lg font-semibold text-white mb-4">
                  What makes VidGenie special:
                </h3>
                <div className="space-y-3 font-mono text-gray-300">
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Advanced AI models that understand context and generate coherent video sequences</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Real-time video generation with customizable parameters and styles</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Intuitive interface that makes video creation accessible to everyone</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Scalable architecture supporting high-quality video generation</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="font-mono text-pink-400 font-semibold text-lg">
                  Where imagination meets technology
                </p>
              </div>

              {/* Story Section */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">🎥</div>
                  <h3 className="font-mono text-lg font-semibold text-white">
                    The Vision Behind VidGenie
                  </h3>
                </div>
                <p className="font-mono text-gray-300 mb-4">
                  Content creators spend hours on video production. What if they could focus on ideas instead?
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  VidGenie bridges the gap between creative vision and technical execution, making video creation as simple as writing a description.
                </p>
                <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 mb-4">
                  <p className="font-mono text-pink-400 font-semibold text-center">
                    "Describe it. Generate it. Share it."
                  </p>
                </div>
              </div>

              {/* System Features */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-lg border border-blue-600 text-center">
                  <div className="text-2xl mb-2">✍️</div>
                  <p className="font-mono text-blue-200 text-sm">Text Input</p>
                </div>
                <div className="bg-gradient-to-br from-green-900 to-green-800 p-4 rounded-lg border border-green-600 text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <p className="font-mono text-green-200 text-sm">AI Processing</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-4 rounded-lg border border-purple-600 text-center">
                  <div className="text-2xl mb-2">🎬</div>
                  <p className="font-mono text-purple-200 text-sm">Video Output</p>
                </div>
              </div>
            </div>
          </section>

          {/* Engineering Details */}
          <div className="space-y-16">
            
            {/* System Design */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-pink-400 p-3 rounded-lg mr-4">
                  <Cpu className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400">
                  System Design
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <Image
                      src="/vidgenie.png"
                      alt="VidGenie System Architecture"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-2xl border border-gray-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="h-5 w-5 text-pink-400 mr-3" />
                    <h3 className="font-mono text-lg font-semibold text-white">Video Generation Pipeline</h3>
                  </div>
                  <p className="font-mono text-gray-300 mb-6">
                    VidGenie's architecture follows a sophisticated pipeline for video generation:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Input Processing */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 hover:border-pink-400 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <MessageSquare className="h-5 w-5 text-pink-400 mr-3" />
                        <h4 className="font-mono text-md font-semibold text-pink-400">1. Input Processing</h4>
                      </div>
                      <p className="font-mono text-gray-300 text-sm mb-4">
                        Text descriptions are processed and enhanced for video generation:
                      </p>
                      <ul className="font-mono text-gray-300 text-sm space-y-3">
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Text Analysis:</span> Natural language processing to understand context and intent
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Scene Planning:</span> Breaking down descriptions into visual scenes and sequences
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Style Mapping:</span> Determining visual style, tone, and aesthetic preferences
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* AI Generation */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 hover:border-pink-400 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <Cpu className="h-5 w-5 text-pink-400 mr-3" />
                        <h4 className="font-mono text-md font-semibold text-pink-400">2. AI Generation</h4>
                      </div>
                      <p className="font-mono text-gray-300 text-sm mb-4">
                        Advanced AI models create video content from processed inputs:
                      </p>
                      <ul className="font-mono text-gray-300 text-sm space-y-3">
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Frame Generation:</span> Creating individual video frames with consistent style
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Temporal Consistency:</span> Ensuring smooth transitions between frames
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Quality Enhancement:</span> Upscaling and refining generated content
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Output Delivery */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 hover:border-pink-400 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <Video className="h-5 w-5 text-pink-400 mr-3" />
                        <h4 className="font-mono text-md font-semibold text-pink-400">3. Output Delivery</h4>
                      </div>
                      <p className="font-mono text-gray-300 text-sm mb-4">
                        Final video processing and delivery to users:
                      </p>
                      <ul className="font-mono text-gray-300 text-sm space-y-3">
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Video Encoding:</span> Converting frames to optimized video formats
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Streaming Delivery:</span> Efficient video streaming and download options
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <span className="text-pink-400 font-semibold">Quality Control:</span> Final validation and quality assurance checks
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacing */}
                <div className="h-8"></div>
                
                {/* Example Workflow */}
                <div className="mb-16 justify-center">
                  <div className="flex items-center mb-8">
                    <Target className="h-5 w-5 text-pink-400 mr-3" />
                    <h3 className="font-mono text-lg font-semibold text-white">Example Workflow: "A sunset over mountains"</h3>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="font-mono text-gray-300 space-y-3 text-sm">
                      <div className="flex items-center">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                        <span>Text input processed for scene understanding</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                        <span>AI generates mountain landscape with sunset lighting</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                        <span>Video frames created with temporal consistency</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                        <span>Final video delivered in high quality format</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Implementation */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-pink-400 p-3 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400">
                  Technical Implementation
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <Database className="h-5 w-5 text-pink-400 mr-3" />
                      <h3 className="font-mono text-lg font-semibold text-white">AI Model Architecture</h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      Advanced deep learning models for video generation with attention mechanisms and temporal modeling.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-3 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Transformer-based architecture for sequence modeling
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Temporal consistency networks for smooth frame transitions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Style transfer capabilities for diverse visual outputs
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Multi-scale processing for detail preservation
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <Cpu className="h-5 w-5 text-pink-400 mr-3" />
                      <h3 className="font-mono text-lg font-semibold text-white">Real-time Processing</h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      Optimized pipeline for fast video generation with parallel processing and GPU acceleration.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-3 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        GPU-accelerated inference for rapid generation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Parallel frame processing for efficiency
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Memory optimization for large-scale video generation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Adaptive quality settings based on user preferences
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <Search className="h-5 w-5 text-pink-400 mr-3" />
                      <h3 className="font-mono text-lg font-semibold text-white">Quality Assurance</h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      Comprehensive quality control systems ensuring high-quality video outputs.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-3 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Automated quality assessment algorithms
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Frame consistency validation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Content appropriateness filtering
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        User feedback integration for continuous improvement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance & Results */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-pink-400 p-3 rounded-lg mr-4">
                  <TrendingUp className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400">
                  Performance & Results
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <Zap className="h-5 w-5 text-pink-400 mr-3" />
                      <h3 className="font-mono text-lg font-semibold text-white">System Capabilities</h3>
                    </div>
                    <ul className="font-mono text-gray-300 space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        High-quality video generation (1080p+ resolution)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Real-time processing with &lt;30 second generation times
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Support for multiple video styles and genres
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Scalable architecture handling concurrent users
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <Users className="h-5 w-5 text-pink-400 mr-3" />
                      <h3 className="font-mono text-lg font-semibold text-white">User Experience</h3>
                    </div>
                    <ul className="font-mono text-gray-300 space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Intuitive text-to-video interface
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Customizable video parameters and styles
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Instant preview and download capabilities
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Cross-platform compatibility and accessibility
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-pink-400 p-3 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400">
                  🛠️ Tech Stack
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* AI/ML Technologies */}
                  <div className="bg-gradient-to-br from-purple-900 to-purple-800 border border-purple-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🤖</div>
                      <h3 className="font-mono text-sm font-semibold text-purple-200">AI Models</h3>
                      <p className="text-xs text-purple-300 mt-1">Video Generation</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">⚡</div>
                      <h3 className="font-mono text-sm font-semibold text-blue-200">Next.js</h3>
                      <p className="text-xs text-blue-300 mt-1">Frontend Framework</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900 to-green-800 border border-green-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🐍</div>
                      <h3 className="font-mono text-sm font-semibold text-green-200">Python</h3>
                      <p className="text-xs text-green-300 mt-1">Backend Processing</p>
                    </div>
                  </div>

                  {/* Video Processing */}
                  <div className="bg-gradient-to-br from-orange-900 to-orange-800 border border-orange-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎬</div>
                      <h3 className="font-mono text-sm font-semibold text-orange-200">FFmpeg</h3>
                      <p className="text-xs text-orange-300 mt-1">Video Processing</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 border border-indigo-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">☁️</div>
                      <h3 className="font-mono text-sm font-semibold text-indigo-200">Vercel</h3>
                      <p className="text-xs text-indigo-300 mt-1">Deployment</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-900 to-pink-800 border border-pink-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎨</div>
                      <h3 className="font-mono text-sm font-semibold text-pink-200">Tailwind CSS</h3>
                      <p className="text-xs text-pink-300 mt-1">Styling</p>
                    </div>
                  </div>

                </div>
                
                {/* Fun Description */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600">
                  <div className="text-center">
                    <h3 className="font-mono text-lg font-semibold text-pink-400 mb-3">
                      🎬 The Video Creation Revolution
                    </h3>
                    <p className="font-mono text-gray-300 text-sm leading-relaxed">
                      Each technology is like a frame in our video masterpiece. 
                      From the powerful AI models to the lightning-fast Next.js frontend, 
                      every component works in harmony to create a platform that's not just 
                      functional, but truly magical. Think of it as a digital film studio where 
                      each tech choice enhances the user's creative vision.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-pink-400 p-3 rounded-lg mr-4">
                  <Lightbulb className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400">
                  Conclusion
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                  <div className="font-mono text-gray-300 space-y-4">
                    <p>
                      VidGenie represents the future of content creation, where AI and human creativity converge to produce stunning video content. The platform demonstrates how advanced AI models can be harnessed to democratize video creation, making it accessible to creators of all skill levels.
                    </p>
                    <p>
                      This project showcases the potential of AI-powered video generation while maintaining high quality standards and user experience. The combination of cutting-edge AI models, efficient processing pipelines, and intuitive interfaces creates a powerful tool for visual storytelling.
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