"use client"

import { ArrowLeft, Github, ExternalLink, FileText, Database, Cpu, Search, MessageSquare, Code, Zap, Target, TrendingUp, Lightbulb, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SocialSidebar from "@/components/social-sidebar"

export default function BasicRAGSystemEngineering() {
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
                src="/basic_rag.png"
                alt="Basic RAG System"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-mono text-4xl font-normal">
                  <span className="text-pink-400">#</span>
                  <span className="text-white">basic-rag-system-implementation</span>
                </h1>
                <p className="font-mono text-gray-400 mt-2">Retrieval-Augmented Generation Implementation</p>
              </div>
            </div>
            <div className="w-640 h-px bg-pink-400 mb-8"></div>
          </div>

          {/* Project Links */}
          <div className="flex space-x-4 mb-16">
            <a
              href="https://github.com/Ananya0104/Basic-RAG-Implementation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 px-6 py-3 bg-transparent rounded"
            >
              <Github className="h-4 w-4 mr-2 inline" />
              Source Code
            </a>
            <a
              href="https://drive.google.com/file/d/1h5eAaxsNGde8YqGJeFu9wVYxZ7IKrUcc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 px-6 py-3 bg-transparent rounded"
            >
              <FileText className="h-4 w-4 mr-2 inline" />
              Documentation
            </a>
          </div>

          {/* Engaging Introduction */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🤖</div>
                <h2 className="font-mono text-2xl font-semibold text-pink-400 mb-4">
                  Cracking open a new way to learn: What to expect…?
                </h2>
                <p className="font-mono text-gray-300 text-lg">
                  Hey hey — you're here, which means PDFs probably stress you out too.
                </p>
                <p className="font-mono text-gray-300 mt-2">
                  Don't worry. You're not alone.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-mono text-lg font-semibold text-white mb-4">
                  Let me set the vibe for what's ahead:
                </h3>
                <div className="space-y-3 font-mono text-gray-300">
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>First, we'll zoom in on a very real problem — drowning in PDFs, articles, and notes without a clue where to start.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Next, you'll meet someone like you: a sharp, curious girl named X who's had enough of endless scrolling and Ctrl + F fails.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Then, we'll give you a peek at the system — where documents don't just sit there… they answer back.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>And finally, we'll touch on the AI magic behind it all — where RAG and OCR join forces to make reading obsolete (well, almost 😉).</span>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="font-mono text-gray-300 mb-4">
                  Take a deep breath.
                </p>
                <p className="font-mono text-pink-400 font-semibold text-lg">
                  Let's turn passive reading into smart asking.
                </p>
              </div>

              {/* Story Section */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">📚</div>
                  <h3 className="font-mono text-lg font-semibold text-white">
                    Once upon a lazy scroll…
                  </h3>
                </div>
                <p className="font-mono text-gray-300 mb-4">
                  Meet <span className="text-pink-400 font-semibold">Ananya</span>.
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  Funny. Fast. Forever curious.<br/>
                  But ask her to read a 50-page PDF?
                </p>
                <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 mb-4">
                  <p className="font-mono text-pink-400 font-semibold text-center">
                    "Ugh. No thanks."
                  </p>
                </div>
                <p className="font-mono text-gray-300 mb-4">
                  She'd download the file, skim the title, maybe search a word or two…<br/>
                  Then close it faster than you can say "abstract."
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  And honestly? Who could blame her?
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  Too long. Too dull. Too why-is-this-even-like-this.
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  Then one day, she discovered <span className="text-pink-400 font-semibold">The System™</span>.
                </p>
              </div>
              <div className="h-6"></div>

              {/* System Features */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-lg border border-blue-600 text-center">
                  <div className="text-2xl mb-2">📥</div>
                  <p className="font-mono text-blue-200 text-sm">Upload a PDF</p>
                </div>
                <div className="bg-gradient-to-br from-green-900 to-green-800 p-4 rounded-lg border border-green-600 text-center">
                  <div className="text-2xl mb-2">❓</div>
                  <p className="font-mono text-green-200 text-sm">Ask a question</p>
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
                    <span className="font-mono text-gray-300">"What's that long formula on page 7?"</span>
                    <span className="font-mono text-green-400 ml-2">→ Answered.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                    <span className="font-mono text-gray-300">"Show me the image of the neural network?"</span>
                    <span className="font-mono text-green-400 ml-2">→ Boom. Extracted.</span>
                  </div>
                </div>
              </div>

              {/* Transformation */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                <p className="font-mono text-gray-300 mb-4">
                  No more reading line-by-line.<br/>
                  No more getting lost in jargon jungles.
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  Now Ananya doesn't read PDFs.<br/>
                  She talks to them.
                </p>
                <p className="font-mono text-gray-300 mb-4">
                  She asks.<br/>
                  They answer.<br/>
                  Just like that.
                </p>
                <div className="text-center">
                  <p className="font-mono text-pink-400 font-semibold">
                    Because when tech meets curiosity —<br/>
                    even the boring stuff becomes kinda awesome. 😎
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
                  System Design
                </h2>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <Image
                      src="/ra.png"
                      alt="RAG System Architecture"
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
                    <h3 className="font-mono text-lg font-semibold text-white">RAG Workflow</h3>
                  </div>
                  <p className="font-mono text-gray-300 mb-6">
                    Let's visualize the basic workflow of a RAG-based LLM architecture:
                  </p>
                  <div className="relative justify-center mb-6">
                    <Image
                      src="/rag_work.jpeg"
                      alt="RAG System Architecture"
                      width={600}
                      height={600}
                      className="rounded-lg shadow-2xl border border-gray-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                  </div>
                                  </div>
                 
                  {/* Spacing */}
                  <div className="h-8"></div>
                 
                  {/* Example Query */}
                  <div className="mb-16 justify-center">
                  <div className="flex items-center mb-8">
                    <Target className="h-5 w-5 text-pink-400 mr-3" />
                    <h3 className="font-mono text-lg font-semibold text-white">Example Query: "What are Lipids?"</h3>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="font-mono text-gray-300 space-y-3 text-sm">
                      <div className="flex items-center">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                        <span>Generate question_embedding for the query</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                        <span>Compare these embeddings against the indexed embeddings to retrieve the most pertinent data</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-pink-400 w-2 h-2 rounded-full mr-3"></div>
                        <span>Search for the top k (e.g., k=2) relevant chunks</span>
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
                      <h3 className="font-mono text-lg font-semibold text-white">Document Chunking Strategy</h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      Purpose: Splitting documents into smaller pieces ensures better management for embedding creation and retrieval operations.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-3 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Ensures balance between accuracy and completeness
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Avoids overly large chunks that could include unrelated content
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Optimizes for semantic meaning preservation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Implements overlap management to prevent context loss
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <Cpu className="h-5 w-5 text-pink-400 mr-3" />
                      <h3 className="font-mono text-lg font-semibold text-white">Mistral AI Embeddings</h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      Model Used: Mistral AI's "mistral-embed" model for converting text chunks into numerical embeddings.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-3 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Converts text chunks into numerical embeddings
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Creates vector representations with semantic meaning
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Stores embeddings in NumPy array for effective semantic similarity-based comparisons
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Enables efficient similarity search operations
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <Search className="h-5 w-5 text-pink-400 mr-3" />
                      <h3 className="font-mono text-lg font-semibold text-white">FAISS Vector Database</h3>
                    </div>
                    <p className="font-mono text-gray-300 mb-4">
                      Tool: FAISS (Facebook AI Similarity Search) for storing embedding vectors and allowing quick similarity searches.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-3 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Stores embedding vectors for efficient retrieval
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Allows quick and exact similarity searches
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Retrieves most relevant chunks based on given query using cosine similarity
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Optimized for fast similarity search operations
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
                        Enhanced precision and relevance in information retrieval
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Robust and efficient RAG model implementation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Effective integration of chunking, embedding, and LLM generation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Semantic search capabilities across multiple sectors
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg border border-gray-600">
                    <div className="flex items-center mb-4">
                      <Target className="h-5 w-5 text-pink-400 mr-3" />
                      <h3 className="font-mono text-lg font-semibold text-white">Key Benefits</h3>
                    </div>
                    <ul className="font-mono text-gray-300 space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Accurate and contextually relevant answers
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Improved information retrieval capacity
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Enhanced AI-powered system capabilities
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        Methodical approach to RAG implementation
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
                      <h3 className="font-mono text-sm font-semibold text-purple-200">Mistral AI</h3>
                      <p className="text-xs text-purple-300 mt-1">LLM & Embeddings</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔍</div>
                      <h3 className="font-mono text-sm font-semibold text-blue-200">FAISS</h3>
                      <p className="text-xs text-blue-300 mt-1">Vector Database</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-900 to-green-800 border border-green-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🐍</div>
                      <h3 className="font-mono text-sm font-semibold text-green-200">Python</h3>
                      <p className="text-xs text-green-300 mt-1">Core Implementation</p>
                    </div>
                  </div>

                  {/* Data Processing */}
                  <div className="bg-gradient-to-br from-orange-900 to-orange-800 border border-orange-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📊</div>
                      <h3 className="font-mono text-sm font-semibold text-orange-200">NumPy</h3>
                      <p className="text-xs text-orange-300 mt-1">Array Operations</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 border border-indigo-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📝</div>
                      <h3 className="font-mono text-sm font-semibold text-indigo-200">Jupyter</h3>
                      <p className="text-xs text-indigo-300 mt-1">Notebook Development</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-900 to-pink-800 border border-pink-600 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔗</div>
                      <h3 className="font-mono text-sm font-semibold text-pink-200">Semantic Search</h3>
                      <p className="text-xs text-pink-300 mt-1">Retrieval Engine</p>
                    </div>
                  </div>

                </div>
                
                {/* Fun Description */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl border border-gray-600">
                  <div className="text-center">
                    <h3 className="font-mono text-lg font-semibold text-pink-400 mb-3">
                      🧠 The RAG Architecture
                    </h3>
                    <p className="font-mono text-gray-300 text-sm leading-relaxed">
                      Each technology is like a neuron in our intelligent system. 
                      From the powerful Mistral AI embeddings to the lightning-fast FAISS vector search, 
                      every component works in harmony to create a system that's not just 
                      functional, but truly intelligent. Think of it as a digital brain where 
                      each tech choice enhances the model's ability to understand and respond.
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
                      The RAG model seeks to transform question-answering systems by combining advanced NLP techniques with semantic search capabilities, thus providing users with accurate and contextually relevant answers based on both retrieved data and complete knowledge bases.
                    </p>
                    <p>
                      This initiative not only improves information retrieval but also increases the capacity of AI-powered systems in managing challenging searches across several sectors. Focusing on each important phase from intake to synthesis, this outline offers a methodical approach to apply a Retrieval-Augmented Generation model, guaranteeing strong performance and improved user experience.
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