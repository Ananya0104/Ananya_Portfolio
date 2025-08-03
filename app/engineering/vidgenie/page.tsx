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
                <p className="font-mono text-gray-400 mt-2">Transforming YouTube videos into interactive AI assistants using RAG technology</p>
              </div>
            </div>
            <div className="w-64 h-px bg-pink-400 mb-8"></div>
          </div>

          {/* Project Links */}
          <div className="flex space-x-4 mb-16">
            <a
              href="https://github.com/Ananya0104/AskVid"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 px-6 py-3 bg-transparent rounded"
            >
              <Github className="h-4 w-4 mr-2 inline" />
              Source Code
            </a>
            <a
              href="https://askvid-demo.vercel.app"
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
                <div className="text-4xl mb-4">🎥</div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400 mb-4">
                  Engineering behind VidGenie: What to expect..?
                </h2>
                <p className="font-mono text-gray-300 text-lg">
                  I'll walk you through the RAG workflow that powers VidGenie and how I solved the proxy challenge that emerged during development.
                </p>
                <p className="font-mono text-gray-300 mt-2">
                  We'll explore the technical architecture, problem-solving approach, and the innovative solutions that make this project unique.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-mono text-lg font-semibold text-white mb-4">
                  Let me set the vibe for what's ahead:
                </h3>
                <div className="space-y-3 font-mono text-gray-300">
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>First, we'll zoom in on a very real problem — YouTube videos contain vast amounts of valuable information, but accessing and querying this content intelligently is challenging.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Next, you'll meet someone like you: a typical engineering student named Ananya who's facing a classic procrastination crisis.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Then, we'll give you a peek at the system — where videos don't just play… they answer back intelligently.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>And finally, we'll touch on the AI magic behind it all — where RAG joins forces to make video learning obsolete (well, almost 😉).</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="font-mono text-gray-300 mb-4">
                  Take a deep breath.
                </p>
                <p className="font-mono text-pink-400 font-semibold text-lg">
                  Let's turn passive watching into smart asking.
                </p>
              </div>

              {/* Story Section */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">📚</div>
                  <h3 className="font-mono text-lg font-semibold text-white">
                    Once upon a midnight cram session…
                  </h3>
                </div>
                <p className="font-mono text-gray-300 mb-4">
                  Meet <span className="text-pink-400 font-semibold">Ananya</span>.
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  Smart. Ambitious. Classic procrastinator.<br/>
                  It's 12 AM, and she just opened her textbook for the first time.
                </p>
                <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 mb-4">
                  <p className="font-mono text-pink-400 font-semibold text-center">
                    "Exam tomorrow at 8 AM. 20 lectures. 8 hours left. What have I done?"
                  </p>
                </div>
                <p className="font-mono text-gray-300 mb-4">
                  She stared at the mountain of course material — 20 lectures, each an hour long.<br/>
                  Her brain: "Nope. Not happening."
                </p>
                                  <p className="font-mono text-gray-300 mb-4">
                    Then she remembered <span className="text-pink-400 font-semibold">VidGenie</span>.
                  </p>
                  <p className="font-mono text-gray-300 mb-4">
                    The YouTube video she'd been meaning to watch for weeks?<br/>
                    Now it was her personal AI tutor.
                  </p>
              </div>
              <div className="h-6"></div>

              {/* System Features */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-lg border border-blue-600 text-center">
                  <div className="text-2xl mb-2">🎥</div>
                  <p className="font-mono text-blue-200 text-sm">Upload YouTube URL</p>
                </div>
                <div className="bg-gradient-to-br from-green-900 to-green-800 p-4 rounded-lg border border-green-600 text-center">
                  <div className="text-2xl mb-2">❓</div>
                  <p className="font-mono text-green-200 text-sm">Ask questions</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-4 rounded-lg border border-purple-600 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="font-mono text-purple-200 text-sm">Get smart answers</p>
                </div>
              </div>

              {/* Examples */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                    <span className="font-mono text-gray-300">"What's the main concept from minute 15?"</span>
                    <span className="font-mono text-green-400 ml-2">→ Answered.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                    <span className="font-mono text-gray-300">"Explain the formula mentioned at 23:45"</span>
                    <span className="font-mono text-green-400 ml-2">→ Boom. Explained.</span>
                  </div>
                </div>
              </div>

              {/* Transformation */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <p className="font-mono text-gray-300 mb-4">
                  No more rewinding and fast-forwarding.<br/>
                  No more getting lost in hour-long videos.
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  Now Ananya doesn't watch videos.<br/>
                  She talks to them.
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  She asks.<br/>
                  They answer.<br/>
                  Just like that.
                </p>
                <div className="text-center">
                  <p className="font-mono text-pink-400 font-semibold">
                    Because when tech meets desperation —<br/>
                    even the most boring lectures become kinda awesome. 😎
                  </p>
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
                  RAG Workflow Architecture
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="h-5 w-5 text-pink-400 mr-3" />
                    <h3 className="font-mono text-lg font-semibold text-white">The Problem: Video Content Intelligence</h3>
                  </div>
                  <p className="font-mono text-gray-300 mb-6">
                    YouTube videos contain vast amounts of valuable information, but accessing and querying this content intelligently is challenging. Users often need to search through hours of video content to find specific information, or ask questions about video topics without getting accurate, contextual answers.
                  </p>
                  <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 mb-6">
                    <p className="font-mono text-pink-400 font-semibold text-center">
                      "How do we make video content as queryable as text?"
                    </p>
                  </div>
                  <p className="font-mono text-gray-300 mb-6">
                    That's where VidGenie comes in. Using RAG (Retrieval-Augmented Generation), we transform any YouTube video into an interactive AI assistant that can answer questions about the video content with high accuracy.
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="h-5 w-5 text-pink-400 mr-3" />
                    <h3 className="font-mono text-lg font-semibold text-white">1. RAG Workflow Architecture</h3>
                  </div>
                  <p className="font-mono text-gray-300 mb-6">
                    The core of VidGenie is built on a sophisticated RAG pipeline that processes YouTube videos and enables intelligent querying. Here's how the workflow operates:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Video Processing */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 hover:border-pink-400 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <MessageSquare className="h-5 w-5 text-pink-400 mr-3" />
                        <h4 className="font-mono text-md font-semibold text-pink-400">01. Video URL Processing</h4>
                      </div>
                      <p className="font-mono text-gray-300 text-sm mb-4">
                        The system accepts any YouTube URL and extracts the video ID using regex pattern matching:
                      </p>
                      <ul className="font-mono text-gray-300 text-sm space-y-3">
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>Handles various YouTube URL formats including watch URLs, shortened URLs, and embedded URLs</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>Validates video availability and accessibility</div>
                        </li>
                      </ul>
                    </div>

                    {/* Transcript Extraction */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 hover:border-pink-400 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <Cpu className="h-5 w-5 text-pink-400 mr-3" />
                        <h4 className="font-mono text-md font-semibold text-pink-400">02. Transcript Extraction with Proxy</h4>
                      </div>
                      <p className="font-mono text-gray-300 text-sm mb-4">
                        Using YouTube Transcript API with ScraperAPI proxy to bypass rate limiting:
                      </p>
                      <ul className="font-mono text-gray-300 text-sm space-y-3">
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>Fetches English transcripts and handles various error scenarios</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>Handles disabled transcripts, unavailable videos, and network issues</div>
                        </li>
                      </ul>
                    </div>

                    {/* Vector Embeddings */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 hover:border-pink-400 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <Search className="h-5 w-5 text-pink-400 mr-3" />
                        <h4 className="font-mono text-md font-semibold text-pink-400">03. Vector Embedding Generation</h4>
                      </div>
                      <p className="font-mono text-gray-300 text-sm mb-4">
                        The transcript is processed using HuggingFace's sentence-transformers:
                      </p>
                      <ul className="font-mono text-gray-300 text-sm space-y-3">
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>Uses all-MiniLM-L6-v2 model for high-dimensional vector embeddings</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>Captures semantic meaning and enables similarity-based retrieval</div>
                        </li>
                      </ul>
                    </div>

                    {/* Vector Database */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 hover:border-pink-400 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <Database className="h-5 w-5 text-pink-400 mr-3" />
                        <h4 className="font-mono text-md font-semibold text-pink-400">04. Qdrant Vector Database Storage</h4>
                      </div>
                      <p className="font-mono text-gray-300 text-sm mb-4">
                        Embeddings are stored in Qdrant vector database with metadata:
                      </p>
                      <ul className="font-mono text-gray-300 text-sm space-y-3">
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>Creates unique collections per video</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>Implements automatic cleanup of previous collections</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Query Processing */}
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <MessageSquare className="h-5 w-5 text-pink-400 mr-3" />
                      <h4 className="font-mono text-md font-semibold text-pink-400">05. Intelligent Query Processing</h4>
                    </div>
                    <p className="font-mono text-gray-300 text-sm mb-4">
                      User queries are processed through LlamaIndex's chat engine with condense_question mode:
                    </p>
                    <ul className="font-mono text-gray-300 text-sm space-y-3">
                      <li className="flex items-start">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>Retrieves relevant context from the vector database</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>Generates contextual responses using GLM-4.5 model</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* The Proxy Challenge */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-pink-400 p-3 rounded-lg mr-4">
                  <Lightbulb className="h-6 w-6 text-black" />
                </div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400">
                  2. The Proxy Challenge: An Interesting Problem
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="mb-8">
                  <p className="font-mono text-gray-300 mb-6">
                    During development, I encountered a fascinating technical challenge that required creative problem-solving and deep understanding of web scraping limitations.
                  </p>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl mr-3">🔍</div>
                      <h3 className="font-mono text-lg font-semibold text-white">
                        The Problem Discovery
                      </h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      Initially, the YouTube transcript extraction worked perfectly in local development. However, when deploying to cloud environments, the system started failing with various errors:
                    </p>
                    <ul className="font-mono text-gray-300 space-y-3 text-sm">
                      <li className="flex items-center">
                        <div className="bg-red-400 w-2 h-2 rounded-full mr-3"></div>
                        <span><span className="text-red-400 font-semibold">Rate Limiting:</span> YouTube API requests were being blocked due to high frequency</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-red-400 w-2 h-2 rounded-full mr-3"></div>
                        <span><span className="text-red-400 font-semibold">IP Restrictions:</span> Cloud provider IPs were being flagged by YouTube</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-red-400 w-2 h-2 rounded-full mr-3"></div>
                        <span><span className="text-red-400 font-semibold">Geo-blocking:</span> Certain regions had restricted access to YouTube APIs</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-red-400 w-2 h-2 rounded-full mr-3"></div>
                        <span><span className="text-red-400 font-semibold">Inconsistent Behavior:</span> Same code worked locally but failed in production</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl mr-3">💡</div>
                      <h3 className="font-mono text-lg font-semibold text-white">
                        The Solution: Proxy Integration
                      </h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      After analyzing the problem, I implemented a sophisticated proxy solution using ScraperAPI:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-900 to-green-800 p-4 rounded-lg border border-green-600">
                        <h4 className="font-mono text-md font-semibold text-green-200 mb-2">Proxy Architecture</h4>
                        <p className="font-mono text-green-300 text-sm">
                          Integrated ScraperAPI as a proxy layer that routes all YouTube API requests through residential IP addresses, bypassing rate limits and IP restrictions.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-lg border border-blue-600">
                        <h4 className="font-mono text-md font-semibold text-blue-200 mb-2">Implementation Strategy</h4>
                        <p className="font-mono text-blue-300 text-sm">
                          Used monkey-patching technique to intercept requests.get() calls and inject proxy configuration dynamically, ensuring seamless integration with existing YouTube Transcript API.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl mr-3">🎯</div>
                      <h3 className="font-mono text-lg font-semibold text-white">
                        Key Learnings & Insights
                      </h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      This project taught me valuable lessons about production deployment challenges, API rate limiting, and creative problem-solving in cloud environments.
                    </p>
                    <p className="font-mono text-gray-300">
                      The proxy challenge highlighted the importance of testing in production-like environments and building robust error handling for external API dependencies.
                    </p>
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
                  4. Performance & Results
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
                        Accurate video content querying with high precision
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Fast response times with intelligent context retrieval
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Support for any YouTube video with available transcripts
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Robust error handling and graceful degradation
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
                        Simple YouTube URL input interface
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Natural language question asking
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Contextual and accurate responses
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Cross-platform accessibility and reliability
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
                      <h3 className="font-mono text-sm font-semibold text-purple-200">LlamaIndex</h3>
                      <p className="text-xs text-purple-300 mt-1">RAG Framework</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔍</div>
                      <h3 className="font-mono text-sm font-semibold text-blue-200">Qdrant</h3>
                      <p className="text-xs text-blue-300 mt-1">Vector Database</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900 to-green-800 border border-green-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎥</div>
                      <h3 className="font-mono text-sm font-semibold text-green-200">YouTube API</h3>
                      <p className="text-xs text-green-300 mt-1">Transcript Extraction</p>
                    </div>
                  </div>

                  {/* Processing Technologies */}
                  <div className="bg-gradient-to-br from-orange-900 to-orange-800 border border-orange-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🧠</div>
                      <h3 className="font-mono text-sm font-semibold text-orange-200">HuggingFace</h3>
                      <p className="text-xs text-orange-300 mt-1">Embeddings</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 border border-indigo-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🌐</div>
                      <h3 className="font-mono text-sm font-semibold text-indigo-200">ScraperAPI</h3>
                      <p className="text-xs text-indigo-300 mt-1">Proxy Service</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-900 to-pink-800 border border-pink-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">⚡</div>
                      <h3 className="font-mono text-sm font-semibold text-pink-200">GLM-4.5</h3>
                      <p className="text-xs text-pink-300 mt-1">LLM Model</p>
                    </div>
                  </div>

                </div>
                
                {/* Fun Description */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600">
                  <div className="text-center">
                    <h3 className="font-mono text-lg font-semibold text-pink-400 mb-3">
                      🎥 The Video Intelligence Revolution
                    </h3>
                    <p className="font-mono text-gray-300 text-sm leading-relaxed">
                      Each technology is like a neuron in our intelligent video system. 
                      From the powerful LlamaIndex RAG framework to the lightning-fast Qdrant vector database, 
                      every component works in harmony to create a system that's not just 
                      functional, but truly intelligent. Think of it as a digital brain where 
                      each tech choice enhances the model's ability to understand and respond to video content.
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
                  5. Conclusion
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                  <div className="font-mono text-gray-300 space-y-4">
                    <p>
                      VidGenie represents the future of video content consumption, where AI and human curiosity converge to create intelligent video assistants. The platform demonstrates how advanced RAG technology can be harnessed to make video content as queryable as text, making it accessible to learners of all backgrounds.
                    </p>
                    <p>
                      This project showcases the potential of AI-powered video intelligence while maintaining high accuracy standards and user experience. The combination of sophisticated RAG architecture, robust proxy solutions, and intuitive interfaces creates a powerful tool for transforming passive video watching into active learning.
                    </p>
                    <p>
                      And yes, Ananya aced her exam. The power of smart video querying combined with a desperate engineering student is truly unstoppable! 😎
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