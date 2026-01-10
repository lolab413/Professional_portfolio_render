export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  inDevelopment?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
}
