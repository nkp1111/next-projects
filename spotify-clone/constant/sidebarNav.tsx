import { VscLibrary } from "react-icons/vsc"
import { BiSearch } from "react-icons/bi"
import { FiHome } from "react-icons/fi"

const sidebarNav = [
  {
    id: 1,
    title: "Home",
    icon: FiHome,
    link: "/"
  },
  {
    id: 2,
    title: "Search",
    icon: BiSearch,
    link: "/search"
  },
  {
    id: 3,
    title: "Your Library",
    icon: VscLibrary,
    link: "/library"
  },
]

export {
  sidebarNav,
};