import { UserData } from '@/types';
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from "@/app/chat/chat.module.css"
import { FaPlus } from 'react-icons/fa';

export default function Sidebar(
  { setCurrentListener, currentUser }:
    { setCurrentListener: Dispatch<SetStateAction<string>>, currentUser: UserData }
) {

  const [friendName, setFriendName] = useState("");
  const [friendSearched, setFriendSearched] = useState<UserData[]>([]);

  useEffect(() => {
    if (friendName) {
      fetch(`/api/user/${friendName}`)
        .then(res => res.json())
        .then(data => {
          setFriendSearched(data.users);
        })
        .catch(error => console.log(error));
    }
  }, [friendName])

  return (
    <div className={`overflow-hidden ${styles.sidebar}`}>
      <input type="text" title="Friend Search" placeholder='Search for friends'
        className='w-100 p-2'
        value={friendName} onChange={(e) => setFriendName(e.target.value)} />

      <ul className=''>
        {friendSearched?.map((friend, ind) => (
          <li key={ind} className='mt-3' onClick={(e) => setCurrentListener(`${ind}`)}>
            <span className='me-3'>
              <Image
                src={"https://source.unsplash.com/random?avatar"} alt="gravatar"
                width={40}
                height={40}
                className='rounded-circle' />
            </span>
            <span className='me-3'>{friend.username}</span>
            <span className='shadow-sm border border-3 px-2 py-1 rounded-circle'>
              <FaPlus />
            </span>
          </li>
        ))}
      </ul>

      <hr className='border border-top-5' />

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
