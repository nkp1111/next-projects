import React from 'react'
import DiscordMain from './discordMain'
// import NewlineMain from './newlineMain'
import styles from "@/app/dashboard/dashboard.module.css"

export default function ContentMain(
  { currentField }: { currentField: string }
) {
  return (
    <div className={`${styles.content_main}`}>
      {currentField === "discord" && <DiscordMain />}
      {/* {currentField === "newline" && <NewlineMain />} */}
    </div>
  )
}
