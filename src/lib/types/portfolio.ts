export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  logo?: string;
  roles: string[];
  achievements: string[];
  technologies: string[];
  description: string;
  highlights: string[];
  majorProjects?: {
    name: string;
    description: string;
  }[];
}

export interface NpmPackage {
  name: string;
  url: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  role?: string;
  company?: string;
  impact?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  npmUrl?: string;
  npmPackages?: NpmPackage[];
  featured: boolean;
  type: 'professional' | 'personal';
  stars?: number;
  forks?: number;
  lastUpdated?: string;
  isPublished?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'testing' | 'tools' | 'cloud' | 'devops' | 'ai-ml';
  proficiency: number; // 1-100
  icon?: string;
  color?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resume2025: string;
  resume2024: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  yearsOfExperience: number;
  domains: string[];
  summary: string;
  about: string;
  location: string;
  availableForWork: boolean;
}
