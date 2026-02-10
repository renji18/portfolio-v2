export interface BlogInterface {
  content: string;
  date: string;
  title: string;
  tags: string[];
}

export interface CompanyDataInterface {
  name: string;
  file: string;
  to: string;
  from: string;
}

export interface ProjectInterface {
  desc: string;
  image: string;
  imageSmall: string;
  link: string;
  name: string;
  repo: string;
  skills: string;
}

export interface TechInterface {
  type: string;
  stack: Array<{
    icon: string;
    name: string;
  }>;
}

export interface SocialInterface {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface PortfolioInterface {
  blogs: Array<BlogInterface>;
  company_data: Array<CompanyDataInterface>;
  projects: Array<ProjectInterface>;
  socials: SocialInterface;
  tech: Array<TechInterface>;
}
