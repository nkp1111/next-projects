import { VscLibrary } from "react-icons/vsc"
import { BiSearch } from "react-icons/bi"
import { FiHome } from "react-icons/fi"
import { AiFillPlusSquare, AiFillHeart } from "react-icons/ai"
import { SidebarNavProps } from "@/types"

const sidebarNav: SidebarNavProps[] = [
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
  {
    id: 4,
    title: "Create Playlist",
    icon: AiFillPlusSquare,
    link: "/playlist/create",
    containerClass: "mt-8",
  },
  {
    id: 5,
    title: "Liked Songs",
    icon: AiFillHeart,
    link: "/liked",
  },
]

export {
  sidebarNav,
};