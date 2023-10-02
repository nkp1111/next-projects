import { AiFillHome, AiFillMessage, AiFillBell } from "react-icons/ai";
import { BsPeopleFill, BsBriefcaseFill, BsPersonFill } from "react-icons/bs";
import { IoMdExit } from "react-icons/io"
import { MdOutlineOndemandVideo } from "react-icons/md";
import { PiGridNineFill } from "react-icons/pi"

// navbar links
export const navData = [
  {
    id: 1,
    title: "Home",
    icon: AiFillHome,
    link: "#",
    spClass: "text-decoration-underline"
  },
  {
    id: 2,
    title: "My Network",
    icon: BsPeopleFill,
    link: "#",
    spClass: ""
  },
  {
    id: 3,
    title: "Jobs",
    icon: BsBriefcaseFill,
    link: "#",
    spClass: ""
  },
  {
    id: 4,
    title: "Messaging",
    icon: AiFillMessage,
    link: "#",
    spClass: ""
  },
  {
    id: 5,
    title: "Notifications",
    icon: AiFillBell,
    link: "#",
    spClass: ""
  },
  {
    id: 6,
    title: "Me",
    icon: BsPersonFill,
    link: "#",
    spClass: "text-danger"
  },
  {
    id: 7,
    title: "Work",
    icon: PiGridNineFill,
    link: "#",
    spClass: ""
  },
  // {
  //   id: 8,
  //   title: "Log out",
  //   icon: IoMdExit,
  //   link: "#",
  //   spClass: "text-danger"
  // },
];

