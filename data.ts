
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Subhadeep Dash",
  title: "Senior Full Stack Engineer & AI Specialist",
  about: "Full-stack engineer with 6+ years of experience building AI-powered knowledge management, chatbot, and RPA workflow platforms. Specialist in RAG pipelines, document intelligence, and scalable multi-cloud architectures across Azure, AWS, and GCP.",
  contact: {
    email: "dashsubhadeep@gmail.com",
    linkedin: "linkedin.com/in/subhadeep-dash",
    github: "github.com/lishat"
  },
  skills: [
    // Languages
    { name: "Python", level: 95, category: "Languages" },
    { name: "TypeScript", level: 94, category: "Languages" },
    { name: "JavaScript", level: 92, category: "Languages" },
    // Frontend
    { name: "React", level: 98, category: "Frontend" },
    { name: "MaterialUI", level: 92, category: "Frontend" },
    { name: "Tailwind CSS", level: 94, category: "Frontend" },
    { name: "Bootstrap", level: 88, category: "Frontend" },
    // Backend
    { name: "Django", level: 96, category: "Backend" },
    { name: "FastAPI", level: 92, category: "Backend" },
    { name: "Flask", level: 88, category: "Backend" },
    { name: "ExpressJS", level: 85, category: "Backend" },
    // AI
    { name: "LLMs (OpenAI/Claude/Gemini)", level: 95, category: "AI" },
    { name: "RAG Pipelines", level: 95, category: "AI" },
    { name: "Azure Cognitive Search", level: 90, category: "AI" },
    { name: "OpenSearch", level: 85, category: "AI" },
    // Database
    { name: "PostgreSQL", level: 88, category: "Database" },
    { name: "Redis", level: 85, category: "Database" },
    { name: "Oracle", level: 82, category: "Database" },
    { name: "MSSQL", level: 84, category: "Database" },
    { name: "MySQL", level: 85, category: "Database" },
    // Cloud & DevOps
    { name: "Azure", level: 90, category: "Cloud" },
    { name: "AWS", level: 82, category: "Cloud" },
    { name: "Google Cloud (GCP)", level: 85, category: "Cloud" },
    { name: "Docker", level: 88, category: "DevOps" },
    { name: "Git", level: 92, category: "DevOps" },
    { name: "NX Monorepo", level: 94, category: "DevOps" }
  ],
  education: [
    {
      school: "IIIT Sri City",
      degree: "B. Tech in Computer Science",
      period: "June 2020",
      score: "9.08/10",
      location: "Sri City"
    },
    {
      school: "Narayana Junior College",
      degree: "Higher Secondary Education",
      period: "April 2016",
      score: "98.1%",
      location: "Hyderabad"
    },
    {
      school: "NSKK High School",
      degree: "Matriculation",
      period: "May 2014",
      score: "9.7/10",
      location: "Hyderabad"
    }
  ],
  certifications: [
    {
      name: "Full-Stack Web Development with React",
      issuer: "HKUST (The Hong Kong University of Science and Technology)",
      date: "May 2020"
    }
  ],
  achievements: [
    {
      title: "Extra Mile Award",
      description: "For contributions in AutomationEdge towards OpenAI based applications.",
      icon: "award"
    },
    {
      title: "Star Performer of the Quarter",
      description: "For contributions in my short span at Gnani.ai.",
      icon: "star"
    },
    {
      title: "Stood Third in CSE 2020 Batch",
      description: "Third Highest Grade Point Scorer in CSE 2020 batch of IIIT Sri City.",
      icon: "medal"
    }
  ],
  experience: [
    {
      company: "AutomationEdge",
      role: "Senior Engineer",
      period: "July 2020 - Ongoing",
      description: [
        "Built and integrated Knowledge Management (KM), AiStudio, and Chatbot Webservice platforms using Django and React.",
        "Engineered document ingestion and semantic search pipelines using Azure Document Intelligence, AWS Textract, and OpenAI/Claude/Gemini embeddings.",
        "Designed a reporting framework that auto-generates optimized SQL from UI filters for PostgreSQL, MS SQL, and Oracle.",
        "Implemented an NX monorepo architecture for multi-engine AI delivery and multi-OCR providers."
      ]
    },
    {
      company: "Gnani.ai",
      role: "Full Stack Intern",
      period: "January 2020 - June 2020",
      description: [
        "Developed interactive chat-based web applications using ReactJS, Tailwind CSS, and Material UI.",
        "Built and maintained robust backend services with Flask and ExpressJS for conversational AI features.",
        "Delivered full-stack MERN applications featuring real-time reporting dashboards for analytics."
      ]
    }
  ],
  projects: [
    {
      id: "careflo",
      title: "CareFlo",
      description: "Medical document intelligence for healthcare referral extraction.",
      longDescription: "A sophisticated healthcare referral extraction platform built on an NX monorepo. It features configurable field extraction and page classification. Uses FastAPI providers to integrate LLMs like OpenAI, Claude, and Gemini. Specialist detection for Facesheets, H&P, and Discharge Summaries.",
      tags: ["NX", "FastAPI", "LLMs", "VertexAI", "Healthcare AI"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
      category: "AI",
      liveUrl: "#"
    },
    {
      id: "km-system",
      title: "Knowledge Management System (KM)",
      description: "Standalone service for document processing and semantic search.",
      longDescription: "Engineered a standalone service for document ingestion (PDF, Docx, Web via BeautifulSoup). Built with Django and PostgreSQL. Utilizes Azure Document Intelligence for extraction and LLMs for embeddings. Search retrieval is powered by Azure Cognitive Search (with AWS equivalents like Textract, OpenSearch, and S3 integrated).",
      tags: ["Django", "Azure Search", "S3", "BeautifulSoup"],
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
      category: "AI",
      githubUrl: "#"
    },
    {
      id: "aistudio",
      title: "AiStudio & Cognibot",
      description: "Visual platform for chatbot configuration and logic builders.",
      longDescription: "The main enterprise platform containing 'Cognibot'. Features advanced visual dialog builders and flowchart visualizations developed with React and Material UI. Supports complex trigger configuration and integrates custom Python functions for AI actions through a Django backend.",
      tags: ["React", "Material UI", "Django", "JointJS"],
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      category: "Web",
      githubUrl: "#"
    },
    {
      id: "reporting-framework",
      title: "Reporting Framework Service",
      description: "Dynamic reporting engine with cross-DB SQL generation.",
      longDescription: "A metadata-driven reporting service integrated with CareFlo. Supports real-time charts, tables, and dashboards. The core feature is a UI-driven SQL generator that translates frontend filters into optimized queries for PostgreSQL, MS SQL, and Oracle dynamically.",
      tags: ["Python", "SQL Generation", "Oracle", "PostgreSQL", "MSSQL"],
      imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop",
      category: "Web",
      githubUrl: "#"
    },
    {
      id: "psweb",
      title: "PSWeb",
      description: "Interactive RPA workflow builder.",
      longDescription: "A visual drag-and-drop builder for Robotic Process Automation (RPA). Designed and implemented the UI to allow users to construct complex automation workflows without coding, mapping out process sequences and logical branching visually.",
      tags: ["React", "RPA", "DND", "Workflow Engine"],
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
      category: "Other",
      liveUrl: "#"
    }
  ]
};
