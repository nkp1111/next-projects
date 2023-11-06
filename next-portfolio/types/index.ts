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


export type {
  SkillParams,
  PersonalInfoParams,
  ExperienceParams,
}