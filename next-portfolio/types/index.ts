interface PersonalInfoParams {
  name: string;
  email: string;
  phone: string;
  location: string;
  website: string[];
  images: string[];
  language: { name: string; proficiency: string }[];
  social: {
    name: string;
    link: string;
    icon: string;
  }[]
}


interface ExperienceParams {
  title: string;
  company: string;
  position: string;
  language: string;
  location: string;
  start_date: string;
  end_date: string;
  projects: string[];
  social: {
    [key: string]: string;
  }
}


interface SkillParams {
  name: string,
  level: number,
  image: string,
  description: string,
}


interface ProjectParam {
  id: number;
  name: string;
  description: string;
  image: string[];
  links: {
    github: string;
    live_site: string[];
  };
  tags: string[];
  technologies: string[];
  acknowledgement: string[];
  api_used?: string[];
  createdAt: string;
  duration?: number;
  features: string[];
}


export type {
  SkillParams,
  PersonalInfoParams,
  ExperienceParams,
  ProjectParam,
}