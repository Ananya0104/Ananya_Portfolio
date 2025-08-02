export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  categories: string[]
  liveUrl: string
  githubUrl?: string
  engineeringUrl: string
  documentationUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "Godai Wellness Platform",
    description: "Godai Wellness is an AI-powered mental wellness platform offering features like smart journaling, SOS alerts, mood & sleep tracking, and Vaira — an empathetic AI chatbot. It’s designed to support users’ emotional well-being through personalized insights and interactive tools.",
    image: "/godai_p.png",
    technologies: ["Golang", "AWS", "DynamoDB", "Nextjs", "Python", "LLMs"],
    categories: ["Full Stack", "AI/ML", "Frontend", "Backend"],
    liveUrl: "https://godaiwellness.com",
    engineeringUrl: "/engineering/godai-wellness",
    featured: true
  },
  {
    title: "Super Customer Care",
    description: "A smarter, friendlier, human-first platform for customer support that eliminates endless menus and connects users to real help instantly. Features one-click video support, and context-aware conversations. Built for speed, empathy, and resolution — so support finally feels like support.",
    image: "/scc.png",
    technologies: ["Golang", "AWS", "DynamoDB", "Nextjs"],
    categories: ["Full Stack", "Frontend", "Backend"],
    liveUrl: "https://supercustomercare.club/",
    engineeringUrl: "/engineering/scc",
    featured: true
  },
  {
    title: "VidGenie",
    description: "Why watch the whole video when you can ask it questions? VidGenie blends cutting-edge AI with video processing to let you search, understand, and pinpoint key moments — instantly. Empower your workflow with transcriptions, visual captions, and timestamped answers — all in one seamless interface.",
    image: "/vidgenie.png",
    technologies: ["Python", "LangChain", "BLIP", "OpenAI", "ChromaDB", "FFmpeg", "Streamlit"],
    categories: ["AI/ML", "Backend"],
    liveUrl: "https://vidgenie-your-smart-video-chatbot.streamlit.app/",
    githubUrl: "https://github.com/Ananya0104/VidGenie-Your-Smart-Video-Chatbot",
    engineeringUrl: "/engineering/vidgenie",
    featured: false
  },
  {
    title: "Basic RAG Implementation",
    description: "This project showcases a streamlined RAG pipeline that enhances the capabilities of language models by grounding responses in external knowledge. Through efficient document ingestion, intelligent retrieval via vector embeddings, and contextual synthesis, it delivers accurate and informed answers to user queries.",
    image: "/basic_rag.png",
    technologies: ["Python", "FAISS", "Mistral API", "Vector Databases"],
    categories: ["AI/ML", "Backend"],
    liveUrl: "",
    githubUrl: "https://github.com/Ananya0104/Basic-RAG-Implementation",
    engineeringUrl: "/engineering/basic-rag-system",
    documentationUrl: "https://drive.google.com/file/d/1h5eAaxsNGde8YqGJeFu9wVYxZ7IKrUcc/view?usp=sharing",
    featured: false
  }
]

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "AI/ML", name: "AI/ML" },
  { id: "Full Stack", name: "Full Stack" },
  { id: "Frontend", name: "Frontend" },
  { id: "Backend", name: "Backend" }
] 