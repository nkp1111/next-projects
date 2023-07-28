import React from 'react'
import discordLogo from "@/public/assets/discord_main_logo.svg"
import Image from 'next/image'

export default function Logo() {
  return (
    <header>
      <a href="/" title="home">
        <Image
          src={discordLogo}
          alt="discord logo"
          width={200}
          height={80}
        />
      </a>
    </header>
  )
}
