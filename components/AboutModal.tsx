"use client";

import Image from "next/image";
import { X, Briefcase, GraduationCap, Building2, School, Award } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsTechStackModalOpen: (isOpen: boolean) => void;
}

export default function AboutModal({ isOpen, onClose, setIsTechStackModalOpen }: AboutModalProps) {
  console.log('AboutModal render - isOpen:', isOpen)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-700 px-8 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="font-mono text-3xl text-white">
              Get to Know Me
            </h1>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {/* Get to Know Me Section */}
              <div className="space-y-4">
                <div className="space-y-4 text-gray-300 font-mono text-md leading-relaxed">
                  <p>
                  Hi, I&apos;m Ananya Nagpal — a curious builder, full-stack developer, and lifelong learner currently pursuing Electrical Engineering at IIT Jodhpur. My journey with technology didn’t just start with writing code — it started with a mindset of solving real-world problems, and has since grown into a love for creating seamless, scalable, and meaningful digital experiences.
                  </p>
                  <p>
                  I thrive at the intersection of engineering and creativity. Whether I&apos;m designing interfaces in Figma, writing backend logic in Golang, or deploying serverless architectures using AWS Lambda and DynamoDB, I’m driven by the challenge of turning abstract ideas into intuitive, user-friendly products.
                  </p>
                  <p>
                  Over the last few years, I&apos;ve built projects that span across domains — from a mental wellness platform with real-time features like journaling and SOS alerts, to AI-powered customer service tools that rethink traditional support systems. I&apos;ve also worked with Generative AI during my internship at Ernst & Young, where I designed scalable RAG pipelines to handle over a million documents efficiently.
                  </p>
                  <p>
                  Beyond development, I enjoy solving 600+ DSA problems, exploring AI/ML tools like LangChain and scikit-learn, and diving into the logic that powers smart systems. My workflow is rooted in collaboration, clean architecture, and continuous learning — because I believe good software is not just built, it's crafted with care.
                  </p>
                  <p className="font-semibold">
                    In everything I do, my goal is simple: build tech that feels natural, useful, and just a little magical.
                  </p>
                </div>
                <div className="flex justify-end">
                  <button 
                    className="border border-white text-pink-400 font-mono px-6 py-2 rounded-lg hover:bg-pink-400 hover:text-black transition-colors"
                    onClick={() => window.open('https://drive.google.com/file/d/1f7qR2R3XD-MIwcd2UYaLlNW73YASh7JL/view?usp=drive_link', '_blank')}
                  >
                    Resume
                  </button>
                </div>
              </div>

              {/* Stack Section */}
              <div className="space-y-4">
                <h3 className="font-mono text-xl font-semibold text-white">
                  Stack
                </h3>
                <div className="space-y-3 text-gray-300 font-mono text-md leading-relaxed">
                  <p>
                    I build full-stack applications using{" "}
                    <span className="text-pink-400">
                      Next.js, Golang, Python, and JavaScript
                    </span>
                    . My serverless infrastructures leverage{" "}
                    <span className="text-pink-400">
                      AWS Lambda, DynamoDB, and Amplify{" "} 
                    </span>
                     with robust{" "}
                    <span className="text-pink-400">
                      CI/CD pipelines via GitHub Actions
                    </span>
                    .
                  </p>
                  <p>
                    For design, I use <span className="text-pink-400">Figma</span>{" "}
                    to create seamless user experiences. I integrate AI intelligence
                    using{" "}
                    <span className="text-pink-400">
                      LangChain, FAISS, and scikit-learn{" "}
                    </span>
                    to build intelligent applications.
                  </p>
                </div>
                                <div className="flex justify-end">
                  <button 
                    className="border border-white text-pink-400 font-mono px-6 py-2 rounded-lg hover:bg-pink-400 hover:text-black transition-colors"
                    onClick={() => {
                      onClose(); // Close the about modal
                      setIsTechStackModalOpen(true); // Open the tech stack modal
                    }}
                  >
                    View All Stack →
                  </button>
                </div>
              </div>

              {/* Experience Section */}
              <div className="space-y-5">
                <h3 className="font-mono text-xl font-semibold text-white flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-pink-400" />
                  <span>Experience</span>
                </h3>
                <div className="space-y-3 text-gray-300 font-mono text-md">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8  bg-white rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <img src="/godai.png" alt="Godai" className="h-7 w-7 object-contain" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Software Engineering Intern
                      </p>
                      <p>Godal Wellness (May 2025 - July 2025)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8  bg-white rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <img src="/ey.png" alt="EY" className="h-7 w-7 object-contain" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Generative AI Intern
                      </p>
                      <p>EY (May 2024 - July 2024)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-5">
                <h3 className="font-mono text-xl font-semibold text-white flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-pink-400" />
                  <span>Education</span>
                </h3>
                <div className="space-y-3 text-gray-300 font-mono text-md">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <Image src="/iitj.png" alt="IIT Jodhpur" className="h-7 w-7 object-contain" width={28} height={28} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Bachelors of Technology
                      </p>
                      <p>Indian Institute of Technology, Jodhpur (2022-2026)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8  bg-white rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <Image src="/sid.png" alt="Siddhartha Public School" className="h-7 w-7 object-contain" width={28} height={28} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        Senior Secondary School
                      </p>
                      <p>Sidhartha Public School, Delhi (2022)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8  bg-white rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                      <Image src="/mdvm.png" alt="MDVM School" className="h-7 w-7 object-contain" width={28} height={28} />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Secondary School</p>
                      <p>MDVM School, Alwar (2020)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}