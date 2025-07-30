"use client"

import Image from "next/image"

interface AboutSectionProps {
  setIsAboutModalOpen: (isOpen: boolean) => void
}

export default function AboutSection({ setIsAboutModalOpen }: AboutSectionProps) {
  console.log('AboutSection rendering')

  return (
    <>
      <section id="about" className="py-20 flex items-center px-8 relative">
        <div className="dots-pattern"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* About Header */}
            <div className="mb-12">
              <h1 className="font-mono text-4xl font-normal mb-4">
                <span className="text-pink-400">#</span>
                <span className="text-white">about-me</span>
              </h1>
              <div className="w-64 h-px bg-pink-400"></div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="font-mono text-gray-300 text-lg leading-relaxed">Hello, i'm Ananya!</p>
              <p className="font-mono text-gray-300 text-base leading-relaxed">
              Hi, I&apos;m Ananya Nagpal — a curious builder, full-stack developer, and lifelong learner currently pursuing Electrical Engineering at IIT Jodhpur. 
              </p>
              <p className="font-mono text-gray-300 text-base leading-relaxed">
              My journey with technology didn&apos;t just start with writing code — it started with a mindset of solving real-world problems, and has since grown into a love for creating seamless, scalable, and meaningful digital experiences.
              </p>
              <p className="font-mono text-gray-300 text-base leading-relaxed">
              I thrive at the intersection of engineering and creativity. Whether I&apos;m designing interfaces......
              </p>
            </div>
          </div>

          {/* Right Content - About Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="w-80 h-80 relative">
              <Image
                src="/1.png"
                alt="About illustration"
                width={600}
                height={600}
                className="object-contain w-full h-full"
                priority
              />
            </div>
        
          </div>

          {/* Know More About Me Button */}
          <div className="flex justify-left lg:justify-end relative z-10 mt-4">
            <button
              onClick={() => {
                console.log('About button clicked!')
                setIsAboutModalOpen(true)
              }}
              className="font-mono border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 px-8 py-3 bg-transparent cursor-pointer rounded relative z-20"
              style={{ pointerEvents: 'auto' }}
            >
              Know More About Me
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}