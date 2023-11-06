import {
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  CogIcon,
  FolderIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid'


// header data
const sections = [
  { id: 1, title: "Home", link: "/", icon: HomeIcon },
  { id: 2, title: "About", link: "/about", icon: InformationCircleIcon },
  { id: 3, title: "Experience", link: "/experience", icon: BriefcaseIcon },
  { id: 4, title: "Skills", link: "/skills", icon: CogIcon },
  { id: 5, title: "Projects", link: "/projects", icon: FolderIcon },
  { id: 6, title: "Contact", link: "/contact", icon: DevicePhoneMobileIcon },
];


const GITHUB_AUTH_TOKEN = `Bearer ${process.env.GITHUB_TOKEN}`

// urls
const URLS = {
  profileUrl: `https://raw.githubusercontent.com/nkp1111/personal-files/main/data/personal_info.json`,
  skillsUrl: "https://raw.githubusercontent.com/nkp1111/personal-files/main/data/skills.json",
  experienceUrl: "https://raw.githubusercontent.com/nkp1111/personal-files/main/data/experience.json"
}

// 0 for data change, false for using cache data
const REVALIDATE_TIME: (false | number) = (process.env.REVALIDATE_TIME && Number(process.env.REVALIDATE_TIME)) || false;

export { sections, URLS, GITHUB_AUTH_TOKEN, REVALIDATE_TIME }