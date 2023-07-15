import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import { BiLogoFacebook } from "react-icons/bi"

const navData = [
  { id: 1, name: "this is massively", link: "/" },
  { id: 2, name: "generic page", link: "/" },
  { id: 3, name: "elements reference", link: "/" },
]


const navIcons = [
  { id: 1, icon: AiOutlineTwitter, name: "twitter", link: "/" },
  { id: 2, icon: BiLogoFacebook, name: "facebook", link: "/" },
  { id: 3, icon: AiOutlineInstagram, name: "instagram", link: "/" },
  { id: 4, icon: AiOutlineGithub, name: "github", link: "/" },
]


export {
  navData,
  navIcons,
}