"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import styles from "@/app/dashboard/dashboard.module.css"
import friendsIcon from "@/public/assets/friends.svg"

export function DiscordMainHead(
  { addFriend, setAddFriend }:
    { addFriend: boolean, setAddFriend: React.Dispatch<React.SetStateAction<boolean>> }
) {
  return (
    <div className={`p-3 py-2 ${styles.shadow_sm}`}>
      <div className='navbar justify-content-start'>
        <ul className='navbar-nav flex-row gap-5 '>
          <li className={`nav-item text-white text-nowrap`}>
            <Image
              src={friendsIcon}
              alt={'.'}
              width={24}
              height={24}
              className='me-2'
            />
            <span className='fw-semibold'>Friends</span>
          </li>
          {['Online', 'All', 'Pending', 'Blocked'].map((item, ind) => (
            <li key={item} className={`nav-item ${ind === 0 && styles.active_nav_item} bg-transparent`}>
              {item}
            </li>
          ))}
        </ul>
        {/*  */}
        <button type="button"
          className={`btn ms-5 ${addFriend ? 'bg-transparent text-success' : 'bg-success text-white'}`}
          onClick={(e) => {
            setAddFriend(prev => !prev)
          }}>Add Friend</button>
      </div>
    </div>
  )
}

export function DiscordMainBody(
  { addFriend }:
    { addFriend: boolean }
) {
  return (
    <div className={`flex-grow-1 position-relative`}>
      <div className="d-flex gap-3 h-100">
        <div className='shadow-lg w-75 px-3 py-2'>
          <div className={addFriend ? styles.add_friend_background : styles.no_friend_background}></div>

          {addFriend && (
            <div>
              <h4 className='text-uppercase fw-bold text-white mt-3'>Add friend</h4>
              <p>You can add a friend with their Discord Tag. It&apos;s cAsE sEnSiTivE</p>

              <form action=""
                className='d-flex justify-content-between p-2 gap-3'>

                <input type="text" title="username" placeholder="Enter a Username#0000"
                  className='w-100 border-0 bg-transparent ps-2' />

                <button type="submit" className='py-2 px-4 text-nowrap text-white' >Send Friend Request</button>
              </form>
            </div>
          )}
        </div>

        <div>
          <h4 className='fw-bold text-white mt-3'>Active Now</h4>
          <p className='text-center text-white fw-semibold mt-3'>It&apos;s quiet for now...</p>

          <p className='text-center'>When a friend starts an activity - like playing a game or hanging out on voice - we&apos;ll show it here!</p>
        </div>
      </div>

    </div>
  )
}

export default function DiscordMain() {
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className={`${styles.discord_main} d-flex flex-column`}>
      <DiscordMainHead addFriend={addFriend} setAddFriend={setAddFriend} />
      <DiscordMainBody addFriend={addFriend} />
    </div>
  )
}
