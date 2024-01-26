import Link from 'next/link'
import React from 'react'

interface SingleLinkParams {
  activeColor?: "blue" | "red",
  item: any,
  currentLink: string,
  setCurrentLink: React.Dispatch<React.SetStateAction<string>>,
}

export default function SingleLink({ activeColor = "blue", item, currentLink, setCurrentLink }: SingleLinkParams) {
  const currentActiveColor = activeColor === "blue" ? "text-custom-blue" : "text-custom-tomato-red"
  return (
    <li key={item.id}>
      <Link
        href={item.link}
        className={`font-medium transition-custom1 ${currentLink === item.title && currentActiveColor} hover:opacity-90`}
        onClick={(e) => setCurrentLink(item.title)}
      >{item.title}</Link>
    </li>
  )
}
