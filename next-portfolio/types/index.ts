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



interface SkillParams {
  name: string,
  level: number,
  image: string,
  description: string,
}

export type {
  SkillParams,
  PersonalInfoParams,
}