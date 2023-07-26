import twitterLogo from "@/public/assets/twitter_icon.svg"
import instagramLogo from "@/public/assets/instagram_icon.svg"
import facebookLogo from "@/public/assets/facebook_icon.svg"
import youtubeLogo from "@/public/assets/youtube_icon.svg"

type FooterIcon = {
  id: number,
  title: string,
  icon: string,
  link: string,
}

type FooterSubLink = {
  id: number,
  title: string,
  link?: string,
}

type FooterLink = {
  readonly [key: string]: FooterSubLink[]
}

export const footerIcons: FooterIcon[] = [
  {
    id: 1,
    title: "twitter",
    icon: twitterLogo,
    link: "#",
  },
  {
    id: 2,
    title: "instagram",
    icon: instagramLogo,
    link: "#",
  },
  {
    id: 3,
    title: "facebook",
    icon: facebookLogo,
    link: "#",
  },
  {
    id: 4,
    title: "youtube",
    icon: youtubeLogo,
    link: "#",
  },
];


export const footerLinks: FooterLink = {
  Product: [
    { id: 1, title: "Download", link: "" },
    { id: 2, title: "Nitro", link: "" },
    { id: 3, title: "Status", link: "" },
  ],
  Company: [
    { id: 1, title: "About", link: "" },
    { id: 2, title: "Jobs", link: "" },
    { id: 3, title: "Branding", link: "" },
    { id: 4, title: "Newsroom", link: "" },
  ],
  Resources: [
    { id: 1, title: "Collage", link: "" },
    { id: 2, title: "Support", link: "" },
    { id: 3, title: "Safely", link: "" },
    { id: 4, title: "Blog", link: "" },
    { id: 5, title: "Feedback", link: "" },
    { id: 6, title: "Developers", link: "" },
    { id: 7, title: "StreamKit", link: "" },
  ],
  Policies: [
    { id: 1, title: "Terms", link: "" },
    { id: 2, title: "Privacy", link: "" },
    { id: 3, title: "Guidelines", link: "" },
    { id: 4, title: "Acknowledgement", link: "" },
    { id: 5, title: "Licenses", link: "" },
    { id: 6, title: "Moderation", link: "" },
  ],
}