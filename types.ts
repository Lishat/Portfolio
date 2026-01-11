
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'Web' | 'Mobile' | 'AI' | 'Other';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  score: string;
  location: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: 'award' | 'star' | 'medal';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeData {
  name: string;
  title: string;
  about: string;
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  education: Education[];
  achievements: Achievement[];
  certifications: Certification[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}
