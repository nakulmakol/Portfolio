// ── Portfolio Data — Nakul Makol ─────────────────────────────

export const personal = {
  name:           "Nakul Makol",
  email:          "nakulmakol14@gmail.com",
  phone:          "+91-9953884301",
  location:       "Delhi, India",
  github:         "https://github.com/NakulMakol",
  linkedin:       "https://linkedin.com/in/NakulMakol",
  githubUsername: "NakulMakol",
  tagline:        "Building intelligent systems at the intersection of computer vision, machine learning, and scalable web architecture.",
} as const;

// ── Projects — 2 only, with both demo + GitHub URLs from resume ──
export const projects = [
  {
    id:          "finsight-ai",
    title:       "Finsight AI",
    tagline:     "Intelligent Financial Copilot",
    description: "An AI-powered financial analytics platform integrating portfolio management, real-time market insights, AI chat assistance, and news sentiment analysis — enabling users to monitor 50+ stocks with actionable investment recommendations.",
    problem:     "Retail investors lack institutional-grade analytics. Fragmented data, manual tracking, and noisy financial news make real-time decision-making nearly impossible.",
    solution:    "Finsight AI centralises portfolio management, live market data, LLM-powered chat, and news sentiment in one unified platform — surfacing personalised recommendations.",
    architecture:"React + TypeScript frontend → Python Flask/FastAPI REST backend → PostgreSQL with JWT auth → Railway cloud. NLP sentiment pipeline classifies financial headlines.",
    tech:        ["React","TypeScript","Python","Flask","FastAPI","PostgreSQL","LLM","NLP","JWT","Railway","Vercel"],
    features:    [
      "Real-time tracking across 50+ stocks",
      "LLM-powered investment Q&A chat",
      "News sentiment analysis",
      "Portfolio allocation & P/L visualisations",
      "Watchlist with price alerts",
      "JWT-secured authentication",
    ],
    highlights:  [
      "Monitors 50+ stocks with real-time market data",
      "70% improvement in portfolio monitoring efficiency",
      "99%+ backend availability on Railway",
    ],
    // From resume
    demo:   "https://fin-sight-ai-weld.vercel.app",
    github: "https://github.com/NakulMakol/FinsightAI",
    status: "live" as const,
    category: "ai" as const,
  },
  {
    id:          "medibot-ai",
    title:       "MediBot AI",
    tagline:     "RAG-Powered Medical Chatbot",
    description: "A production-grade AI medical chatbot using Retrieval-Augmented Generation to provide context-aware, evidence-based responses from a curated medical knowledge base with 95%+ retrieval relevance.",
    problem:     "Patients and healthcare students navigate fragmented medical documentation, receiving generic answers. Existing chatbots hallucinate without source grounding.",
    solution:    "RAG pipeline over 1,000+ indexed medical chunks — FAISS vector search retrieves precise context, Llama-3.3 70B synthesises accurate, readable answers.",
    architecture:"LangChain orchestrates retrieval + generation. HuggingFace all-MiniLM-L6-v2 for embeddings. FAISS indexes 1,000+ chunks. Groq API hosts Llama-3.3 70B. Flask REST API. Railway deployment.",
    tech:        ["Python","Flask","LangChain","FAISS","Hugging Face","Groq","Llama 3.3 70B","RAG","NLP","Railway"],
    features:    [
      "Semantic retrieval over 1,000+ medical chunks",
      "Context-grounded answers from Llama-3.3 70B",
      "Sub-50ms FAISS vector search",
      "Secure environment variable management",
      "Full-stack Flask web interface",
      "Real-time streaming responses",
    ],
    highlights:  [
      "95%+ retrieval relevance on medical queries",
      "~45% reduction in retrieval latency",
      "99%+ application availability on Railway",
    ],
    // From resume
    demo:   "https://medical-chatbot-production-ed14.up.railway.app",
    github: "https://github.com/NakulMakol/MediBot-AI",
    status: "live" as const,
    category: "ai" as const,
  },
];

// ── Experience ───────────────────────────────────────────────
export const experiences = [
  {
    id:       "zeroforg",
    company:  "ZeroForg",
    role:     "AI/ML Intern",
    type:     "internship",
    location: "Gurugram, Haryana",
    period:   "June 2026 – August 2026",
    color:    "from-violet-500 to-indigo-600",
    description: [
      "Developed an end-to-end computer vision pipeline for automated detection and analysis of 16+ crack and surface defect categories using Python, OpenCV, and image processing techniques, improving industrial quality inspection efficiency.",
      "Implemented and optimised 10+ image processing algorithms including Sobel, Canny, Gabor, Otsu & Multi-Otsu Thresholding, Watershed, GLCM, and Contour Detection by tuning kernel sizes (3×3–9×9) to enhance edge detection while minimising noise.",
      "Researched stereo vision-based depth estimation and evaluated YOLO, RF-DETR, DINOv2, and ResNet architectures to support scalable AI-driven defect detection systems.",
    ],
    tech: ["Python","OpenCV","YOLO","RF-DETR","DINOv2","ResNet","NumPy","Stereo Vision","GLCM"],
  },
  {
    id:       "wibix",
    company:  "Wibix Consulting",
    role:     "Data Analyst Intern",
    type:     "internship",
    location: "Gurugram, Haryana",
    period:   "June 2025 – August 2025",
    color:    "from-cyan-500 to-blue-600",
    description: [
      "Processed and validated 100K–150K records across 5+ internal and external data sources, reducing data inconsistencies by 25–30% through systematic cleaning and validation pipelines.",
      "Delivered insights from large-scale structured and unstructured data, uncovering actionable patterns that directly influenced 3+ strategic business decisions.",
    ],
    tech: ["Python","SQL","Power BI","Pandas","NumPy","Excel"],
  },
];

// ── Achievements — only items #2, #3, #6 (indexes 1,2,5) ────
export const achievements = [
  { id:1, title:"8.62 CGPA at TIET",              description:"Maintaining a strong academic record at Thapar Institute while pursuing a rigorous ECE + AI/ML curriculum.", icon:"🎓" },
  { id:2, title:"Sales Head — AIESEC TIET",        description:"Led campaigns engaging 200+ students, achieved 30% increase in sign-ups, coordinated society fair for 1,500+ attendees across 5+ teams.", icon:"🏆" },
  { id:3, title:"95%+ RAG Retrieval Relevance",    description:"Achieved 95%+ retrieval relevance on medical queries in MediBot AI through careful chunking, embedding selection, and FAISS optimisation.", icon:"⚡" },
  { id:4, title:"70% Efficiency Gain",             description:"Finsight AI's dashboard improved portfolio monitoring efficiency by 70% through real-time sync and smart visualisations.", icon:"📈" },
  { id:5, title:"150K Records Processed",          description:"Processed 100K–150K records at Wibix Consulting across 5+ sources, reducing inconsistencies by 25–30% and informing 3+ business decisions.", icon:"🗄️" },
  { id:6, title:"Global Exchange Coordinator",     description:"Coordinated 20+ international exchange applications through AIESEC, connecting TIET students with global opportunities.", icon:"🌐" },
];

// ── Education ────────────────────────────────────────────────
export const education = {
  institution: "Thapar Institute of Engineering and Technology",
  degree:      "B.E. Electronics and Communication Engineering",
  period:      "Aug 2023 – June 2027",
  location:    "Patiala, Punjab",
  gpa:         "8.62",
  coursework:  ["Artificial Intelligence","Generative AI","Agentic AI","Database Management","Data Structures","Algorithm Analysis","Computer Vision","RAG/NLP"],
};
