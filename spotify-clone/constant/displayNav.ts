import { VscLibrary } from "react-icons/vsc"
import { BiSearch } from "react-icons/bi"
import { FiHome } from "react-icons/fi"
import { AiFillPlusSquare, AiFillHeart } from "react-icons/ai"
import { DisplayNavProps } from "@/types"

const displayNav: DisplayNavProps[] = [
  {
    id: 1,
    title: "Account",
    icon: FiHome,
    link: "/account",
    active: true,
  },
  {
    id: 2,
    title: "Profile",
    icon: BiSearch,
    link: "/profile",
    active: false,
  },
  {
    id: 3,
    title: "Upgrade to Premium",
    icon: VscLibrary,
    link: "/premium",
    active: false,
  },
  {
    id: 4,
    title: "Private Session",
    icon: AiFillPlusSquare,
    link: "/private",
    active: false,
  },
  {
    id: 5,
    title: "Settings",
    icon: AiFillHeart,
    link: "/settings",
    active: false,
  },
  {
    id: 6,
    title: "Log out",
    icon: AiFillHeart,
    link: "/logout",
    active: false,
  },
]

export {
  displayNav,
};