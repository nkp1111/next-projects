import React from 'react'
import discordLogo from "@/public/assets/discord_main_logo.svg"
import Image from 'next/image'

export default function Logo() {
  return (
    <header>
      <Image
        src={discordLogo}
        alt="discord logo"
        width={200}
        height={80}
      />
    </header>
  )
}
