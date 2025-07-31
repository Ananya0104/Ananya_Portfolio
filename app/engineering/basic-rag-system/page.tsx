"use client"

import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react"
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
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
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
                  <span className="text-white">basic-rag-system-engineering</span>
                </h1>
                <p className="font-mono text-gray-400 mt-2">Retrieval-Augmented Generation Implementation</p>
              </div>
            </div>
            <div className="w-64 h-px bg-pink-400 mb-8"></div>
          </div>

          {/* Project Links */}
          <div className="flex space-x-4 mb-12">
            <a
              href="https://github.com/Ananya0104/Basic-RAG-Implementation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border border-gray-600 text-gray-400 hover:border-pink-400 hover:text-pink-400 transition-all duration-300 px-6 py-3 bg-transparent rounded"
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

          {/* Engineering Details */}
          <div className="space-y-12">
            {/* RAG Architecture Overview */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                RAG Architecture Overview
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Document Ingestion</h3>
                    <ul className="font-mono text-gray-300 space-y-2">
                      <li>• PDF/Text document parsing</li>
                      <li>• Custom chunking strategies</li>
                      <li>• Metadata extraction</li>
                      <li>• Content preprocessing</li>
                      <li>• Quality filtering</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Vector Embeddings</h3>
                    <ul className="font-mono text-gray-300 space-y-2">
                      <li>• FAISS vector database</li>
                      <li>• Sentence transformers</li>
                      <li>• Dense retrieval methods</li>
                      <li>• Similarity search</li>
                      <li>• Index optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Response Generation</h3>
                    <ul className="font-mono text-gray-300 space-y-2">
                      <li>• Mistral API integration</li>
                      <li>• Context-aware prompting</li>
                      <li>• Response synthesis</li>
                      <li>• Source attribution</li>
                      <li>• Quality validation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Implementation */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Technical Implementation
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Custom Chunking Strategy</h3>
                    <p className="font-mono text-gray-300 mb-3">
                      Implemented intelligent document chunking that preserves semantic meaning while optimizing for retrieval performance.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-1 text-sm">
                      <li>• Semantic boundary detection using NLP techniques</li>
                      <li>• Overlap management to prevent context loss</li>
                      <li>• Size optimization for vector embeddings</li>
                      <li>• Metadata preservation for source tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">FAISS Vector Database</h3>
                    <p className="font-mono text-gray-300 mb-3">
                      Leveraged Facebook AI Similarity Search for efficient similarity search and retrieval operations.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-1 text-sm">
                      <li>• Index type: IVF (Inverted File Index) for balanced performance</li>
                      <li>• Quantization: Product Quantization for memory efficiency</li>
                      <li>• Search parameters: k=5 for top-5 retrieval</li>
                      <li>• Index optimization for fast similarity search</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Prompt Engineering</h3>
                    <p className="font-mono text-gray-300 mb-3">
                      Designed context-aware prompts that guide the LLM to generate accurate, grounded responses.
                    </p>
                    <ul className="font-mono text-gray-300 space-y-1 text-sm">
                      <li>• System prompt for role definition and constraints</li>
                      <li>• Context injection with retrieved documents</li>
                      <li>• Source attribution requirements</li>
                      <li>• Response format specifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Code Architecture */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Code Architecture
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Core Components</h3>
                    <div className="font-mono text-gray-300 space-y-2">
                      <div className="bg-gray-800 p-3 rounded">
                        <span className="text-pink-400">class</span> <span className="text-white">DocumentProcessor</span><br/>
                        <span className="text-gray-400">  • chunk_documents()</span><br/>
                        <span className="text-gray-400">  • extract_metadata()</span><br/>
                        <span className="text-gray-400">  • preprocess_content()</span>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <span className="text-pink-400">class</span> <span className="text-white">VectorStore</span><br/>
                        <span className="text-gray-400">  • create_index()</span><br/>
                        <span className="text-gray-400">  • similarity_search()</span><br/>
                        <span className="text-gray-400">  • update_index()</span>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <span className="text-pink-400">class</span> <span className="text-white">RAGPipeline</span><br/>
                        <span className="text-gray-400">  • retrieve_context()</span><br/>
                        <span className="text-gray-400">  • generate_response()</span><br/>
                        <span className="text-gray-400">  • validate_response()</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Metrics */}
            <section>
              <h2 className="font-mono text-2xl font-semibold mb-6 text-pink-400">
                Performance & Optimization
              </h2>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-pink-400 mb-2">&lt;500ms</div>
                    <div className="font-mono text-gray-300">Query Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-pink-400 mb-2">95%</div>
                    <div className="font-mono text-gray-300">Retrieval Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono font-bold text-pink-400 mb-2">10K+</div>
                    <div className="font-mono text-gray-300">Documents Processed</div>
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
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Chunking Strategy Optimization</h3>
                    <p className="font-mono text-gray-300">
                      Balanced semantic preservation with retrieval efficiency by implementing adaptive chunking based on document structure and content type.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Vector Search Performance</h3>
                    <p className="font-mono text-gray-300">
                      Optimized FAISS index parameters and implemented caching mechanisms to achieve sub-second query response times.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold mb-3 text-white">Context Window Management</h3>
                    <p className="font-mono text-gray-300">
                      Implemented smart context selection to maximize relevant information while staying within LLM token limits.
                    </p>
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
                  <li>• Importance of chunking strategy in RAG performance and accuracy</li>
                  <li>• Vector database selection and optimization for production use</li>
                  <li>• Prompt engineering techniques for context-aware responses</li>
                  <li>• Balancing retrieval speed with response quality</li>
                  <li>• Source attribution and response validation best practices</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 