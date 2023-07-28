import Image from 'next/image'
import React from 'react'
import plusIcon from "@/public/assets/plus_icon.svg"
import styles from "@/app/dashboard/dashboard.module.css"
import friendsIcon from "@/public/assets/friends.svg"
import discoveryIcon from "@/public/assets/stage_discovery.svg"
import nitroIcon from "@/public/assets/nitro_icon.svg"

export function DiscordNav(
  { src, alt, text, active }:
    { src: string, alt: string, text: string, active?: boolean }
) {
  return (
    <li className={`nav-item mt-2 p-1 d-block w-100 rounded-1 ${active && styles.active_nav_item}`}>
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className='me-2'
      />
      <span className='fw-semibold'>{text}</span>
    </li>
  )
}

export default function DiscordSidebar() {
  return (
    <div className={`px-3 ${styles.discord_sidebar}`}>
      <form action="">
        <input type="text" className="form-action w-100 p-2" title="search"
          placeholder='Find or start a conversation' />
      </form>

      <nav className='navbar mt-2'>
        <ul className='navbar-nav w-100'>
          <DiscordNav
            src={friendsIcon}
            alt={"friend"}
            text={"Friends"}
            active={true}
          />
          <DiscordNav
            src={discoveryIcon}
            alt={"discovery"}
            text={"Stage Discovery"}
          />
          <DiscordNav
            src={nitroIcon}
            alt={"nitro"}
            text={"Nitro"}
          />
        </ul>
      </nav>

      <div className='w-100 mt-4'>
        <p className='text-uppercase fw-bold d-flex justify-content-between'>
          <span>
            Direct messages
          </span>

          <span>
            <Image
              src={plusIcon}
              alt="add icon"
              width={20}
              height={20}
            />
          </span>
        </p>
      </div>
    </div>
  )
}
