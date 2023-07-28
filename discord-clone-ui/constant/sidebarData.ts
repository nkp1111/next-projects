import discordLogo from "@/public/assets/discord_mini_icon.svg"
import newlineLogo from "@/public/assets/new_line.png"
import plusLogo from "@/public/assets/plus.svg"


type Sidebar = {
  id: number,
  title: string,
  icon: string,
  link: string,
}

export const availableLinks: string[] = [
  "discord",
  "newline",
]


export const sidebarData: Sidebar[] = [
  {
    id: 1,
    title: "discord",
    icon: discordLogo,
    link: "/dashboard/discord",
  },
  {
    id: 2,
    title: "newline",
    icon: newlineLogo,
    link: "/dashboard/newline",
  },
  {
    id: 3,
    title: "plus",
    icon: plusLogo,
    link: "/dashboard/plus",
  },
];