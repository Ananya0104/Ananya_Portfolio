export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "AIPortfolio",
    description: "AI-powered portfolio website with intelligent content generation and dynamic project showcasing. Features include automated content updates, smart project recommendations, and interactive AI chat assistant.",
    image: "/placeholder.svg?height=300&width=400&text=AI+Portfolio",
    technologies: ["Python", "FastAPI", "React", "OpenAI", "TailwindCSS"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "RAGSystem",
    description: "Retrieval-Augmented Generation system for intelligent document processing and Q&A. Built with LangChain and Pinecone for efficient document retrieval and OpenAI for natural language generation.",
    image: "/placeholder.svg?height=300&width=400&text=RAG+System",
    technologies: ["Python", "LangChain", "Pinecone", "OpenAI", "Streamlit"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "MLTracker",
    description: "Machine learning experiment tracking platform with model versioning and performance analytics. Enables teams to track experiments, compare models, and maintain reproducibility.",
    image: "/placeholder.svg?height=300&width=400&text=ML+Tracker",
    technologies: ["Python", "MLflow", "React", "PostgreSQL", "Docker"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Wedora Website",
    description: "Modern wedding planning platform with real-time collaboration features. Built with Next.js and includes features like vendor management, timeline planning, and budget tracking.",
    image: "/placeholder.svg?height=300&width=400&text=Wedora+Website",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL"],
    category: "Web Development",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Features include user authentication, order processing, and analytics.",
    image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    category: "Web Development",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking. Features include task assignment, deadline management, and performance analytics.",
    image: "/placeholder.svg?height=300&width=400&text=Task+Management+App",
    technologies: ["React", "Firebase", "Material-UI", "Redux", "TypeScript"],
    category: "Web Development",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive data visualization dashboard for business analytics. Features multiple chart types, real-time data updates, and customizable dashboards for different business metrics.",
    image: "/placeholder.svg?height=300&width=400&text=Data+Viz+Dashboard",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    category: "Data Science",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "API Gateway Service",
    description: "Microservices API gateway with authentication, rate limiting, and request routing. Built for high-performance applications with load balancing and monitoring capabilities.",
    image: "/placeholder.svg?height=300&width=400&text=API+Gateway",
    technologies: ["Golang", "Docker", "Kubernetes", "Redis", "Prometheus"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "AI/ML", name: "AI/ML" },
  { id: "Web Development", name: "Web Development" },
  { id: "Data Science", name: "Data Science" },
  { id: "Backend", name: "Backend" }
] 