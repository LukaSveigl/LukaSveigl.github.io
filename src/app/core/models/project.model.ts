export interface Project {
  title: string;

  description: string;

  category: string;

  technologies: string[];

  githubUrl?: string;

  liveUrl?: string;

  featured?: boolean;
}
