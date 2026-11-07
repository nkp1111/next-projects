import {
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  CogIcon,
  FolderIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid';

// Navigation sections
const sections = [
  { id: 1, title: "Home", link: "/", icon: HomeIcon },
  { id: 2, title: "About", link: "/about", icon: InformationCircleIcon },
  { id: 3, title: "Experience", link: "/experience", icon: BriefcaseIcon },
  { id: 4, title: "Skills", link: "/skills", icon: CogIcon },
  { id: 5, title: "Projects", link: "/projects", icon: FolderIcon },
  { id: 6, title: "Contact", link: "/contact", icon: DevicePhoneMobileIcon },
];

// Debounce delay for filtering projects
const DEBOUNCE_DELAY: number = 300;

// Number of projects per page
const ITEM_PER_PAGE: number = 6;

export {
  sections,
  DEBOUNCE_DELAY,
  ITEM_PER_PAGE
};
