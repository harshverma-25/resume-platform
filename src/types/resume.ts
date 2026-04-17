export interface Education {
  id: string;
  college: string;
  course: string;
  cgpa: string;
  year: string;
  address: string;
}

export interface SkillSet {
  languages: string;
  frameworks: string;
  databases: string;
  tools: string;
  cloud: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  tech: string;
  github: string;
  live: string;
  description: string;
}

export interface BasicInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface ResumeData {
  basicInfo: BasicInfo;
  summary: string;
  education: Education[];
  skills: SkillSet;
  experience: Experience[];
  projects: Project[];
  achievements: string[];
  templateId: string;
}
