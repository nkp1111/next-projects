import React from 'react'
import DiscordSidebar from './discordSidebar'
// import NewlineSidebar from './newlineSidebar'
import styles from "@/app/dashboard/dashboard.module.css"

export default function ContentSidebar(
  { currentField }: { currentField: string }
) {
  return (
    <div className={`${styles.content_sidebar}`}>
      {currentField === "discord" && <DiscordSidebar />}
      {/* {currentField === "newline" && <NewlineSidebar />} */}
    </div>
  )
}
