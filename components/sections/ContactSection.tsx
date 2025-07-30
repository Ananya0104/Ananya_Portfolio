"use client"

import { useState } from "react"
import { Linkedin, Github, Code, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSending, setIsSending] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields")
      return
    }

    setIsSending(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }
      
      // Show success message
      setShowSuccess(true)
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      alert(errorMessage)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="pt-24 px-4 sm:px-8 relative">
      <div className="dots-pattern"></div>
      <div className="max-w-6xl mx-auto">
        {/* Contact Header */}
        <div className="mb-12">
          <h1 className="font-mono text-4xl font-normal mb-4">
            <span className="text-pink-400">#</span>
            <span className="text-white">contact-me</span>
          </h1>
          <div className="w-72 h-px bg-pink-400"></div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl">
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  <span className=" decoration-pink-400 decoration-2">Your message</span>
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  <span className=" decoration-pink-400 decoration-2">has been sent!</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                We appreciate your contact and will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-6 px-6 py-2 bg-pink-400 text-black font-mono rounded-lg hover:bg-pink-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Message Form */}
          <div className="space-y-6">
            <h2 className="font-mono text-white text-2xl font-semibold">Message Me</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors relative z-10"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors relative z-10"
                    style={{ pointerEvents: 'auto' }}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Write a message..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none transition-colors resize-none relative z-10"
                  style={{ pointerEvents: 'auto' }}
                ></textarea>
              </div>

              {/* Send Message Button */}
              <button 
                type="submit"
                disabled={isSending}
                className={`w-full font-mono font-semibold py-3 px-6 rounded-lg transition-colors relative z-10 ${
                  isSending 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-pink-400 text-black hover:bg-pink-500'
                }`}
                style={{ pointerEvents: 'auto' }}
                onClick={(e) => {
                  e.preventDefault()
                  handleSubmit(e)
                }}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="space-y-8 lg:ml-auto lg:max-w-md">
            {/* Contact Section */}
            <div className="space-y-4">
              <h2 className="font-mono text-white text-2xl font-semibold">Contact</h2>
              <a 
                href="mailto:ananyangpal0501@gmail.com"
                className="flex items-center space-x-3 text-white hover:text-pink-400 transition-colors cursor-pointer relative z-10"
                style={{ pointerEvents: 'auto' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
                <span className="font-mono text-sm">ananyangpal0501@gmail.com</span>
              </a>
            </div>

            {/* Social Media Section */}
            <div className="space-y-4">
              <h2 className="font-mono text-white text-2xl font-semibold">Social Media</h2>
              <div className="space-y-3">
                <div 
                  className="flex items-center space-x-3 text-white hover:text-pink-400 transition-colors cursor-pointer relative z-10"
                  style={{ pointerEvents: 'auto' }}
                  title="LinkedIn"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/ananya-nagpal-23aa73256/", "_blank");
                  }}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="font-mono text-sm">Linkedin</span>
                </div>
                <div 
                  className="flex items-center space-x-3 text-white hover:text-pink-400 transition-colors cursor-pointer relative z-10"
                  style={{ pointerEvents: 'auto' }}
                  title="GitHub"
                  onClick={() => {
                    window.open("https://github.com/Ananya0104", "_blank");
                  }}
                >
                  <Github className="h-5 w-5" />
                  <span className="font-mono text-sm">Github</span>
                </div>
                <div 
                  className="flex items-center space-x-3 text-white hover:text-pink-400 transition-colors cursor-pointer relative z-10"
                  style={{ pointerEvents: 'auto' }}
                  title="Coding Profile"
                  onClick={() => {
                    window.open("https://codolio.com/profile/noni05", "_blank");
                  }}
                >
                  <Code className="h-5 w-5" />
                  <span className="font-mono text-sm">Coding Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 