import { AiFillHome, AiFillMessage, AiFillBell } from "react-icons/ai";
import { BsPeopleFill, BsBriefcaseFill, BsPersonFill, BsFillCameraVideoFill, BsFillHandThumbsUpFill, BsFillTrashFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoMdExit } from "react-icons/io"
import { MdArticle, MdInsertPhoto } from "react-icons/md";
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


export const dashboardNews = [
  {
    id: 1,
    title: "Pope Benedict XVI knew of abusive priests that are going",
    time: "1 hour ago",
  },
  {
    id: 2,
    title: "Aid finally reaches devastated Tonga, water floods",
    time: "2 hours ago",
  },
  {
    id: 3,
    title: "Antibiotic-resistant infections are a 'major concern for",
    time: "2 hours ago",
  },
  {
    id: 4,
    title: "Activision says it's not planning to remove anybody",
    time: "4 hours ago",
  },
  {
    id: 5,
    title: "Tech is now in a correction: wall of worry is beginning",
    time: "5 hours ago",
  },
];


export const addPostLinks = [
  {
    id: 1,
    link: "",
    title: "Photo",
    icon: MdInsertPhoto,
    spClass: "text-primary",
  },
  {
    id: 2,
    link: "",
    title: "Video",
    icon: BsFillCameraVideoFill,
    spClass: "text-success",
  },
  {
    id: 3,
    link: "",
    title: "Job",
    icon: FaBriefcase,
    spClass: "text-info",
  },
  {
    id: 4,
    link: "",
    title: "Write Article",
    icon: MdArticle,
    spClass: "text-danger",
  },
];


export const showPostLinks = [
  {
    id: 1,
    link: "",
    title: "Like",
    icon: BsFillHandThumbsUpFill,
    spClass: "text-primary",
  },
  {
    id: 2,
    link: "",
    title: "Delete post",
    icon: BsFillTrashFill,
    spClass: "text-danger",
  },
];