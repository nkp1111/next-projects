import { UserData } from '@/types';
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'


export default function Sidebar(
  { setCurrentListener, currentUser }:
    { setCurrentListener: Dispatch<SetStateAction<string>>, currentUser: UserData }
) {

  return (
    <div className='sidebar'>
      <input type="text" title="Friend Search" placeholder='Search for friends' />

      <ul className=''>
        {currentUser.friends.map((friend, ind) => (
          <li key={ind} className='mt-3' onClick={(e) => setCurrentListener(`${ind}`)}>
            <span className='me-3'>
              <Image
                src={"https://source.unsplash.com/random?avatar"} alt="gravatar"
                width={40}
                height={40}
                className='rounded-circle' />
            </span>
            <span>{JSON.stringify(friend)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
