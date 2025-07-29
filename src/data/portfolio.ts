export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  photo: string;
  about: {
    title: string;
    status: string;
    description: string;
    highlights: string[];
  };
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
    leetcode: string;
  };
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  courseTags: string[];
  highlights?: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  slug: string;
  thumbnail: string;
  summary: string;
  description: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  githubLink?: string;
  demoLink?: string;
  sourceLink?: string;
  ProjectLink?: string;
  results?: string[];
  future_work?: string[];
  category?: string;
  sourceCode?: string;
  updatedAt: string;
}

export interface Skills {
  Languages: string[];
  "Frontend Development": string[];
  "Backend & Cloud": string[];
  "Network & Infrastructure": string[];
  "Data & Analytics": string[];
  "DevOps & Tools": string[];
  "Security & Protocols": string[];
}

export interface Achievement {
  text: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  description: string;
}

export interface ThoughtSection {
  title: string;
  content: string[];
}

export interface Thoughts {
  title: string;
  sections: ThoughtSection[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: {
    Network: Project[];
    Software: Project[];
    "AI/ML": Project[];
  };
  skills: Skills;
  achievements: Achievement[];
  certifications: Certification[];
  thoughts: Thoughts;
}