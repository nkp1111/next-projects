import { UserData } from '@/types';
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from "@/app/chat/chat.module.css"
import { FaPlus } from 'react-icons/fa';
import { addFriend } from '@/lib/user';

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
          setFriendSearched(data.users.filter((user: UserData) => user._id !== currentUser._id));
        })
        .catch(error => console.log(error));
    }
  }, [currentUser._id, friendName])

  return (
    <div className={`overflow-hidden ${styles.sidebar}`}>
      <input type="text" title="Friend Search" placeholder='Search for friends'
        className='w-100 p-2'
        value={friendName} onChange={(e) => setFriendName(e.target.value)} />

      <div className='px-1'>
        <h3>Friends to Add</h3>
        {!friendSearched.length && <p>No friends found...</p>}
        <ul className='navbar-nav'>
          {friendSearched?.map((friend, ind) => (
            <li key={ind} className='mt-3'>
              <span className='me-3'>
                <Image
                  src={"https://source.unsplash.com/random?avatar"} alt="gravatar"
                  width={40}
                  height={40}
                  className='rounded-circle' />
              </span>
              <span className='me-3'>{friend.username}</span>
              <span className='shadow-sm border border-3 px-2 py-1 rounded-circle' onClick={() => addFriend({ userId: currentUser._id as string, friendId: friend._id as string })}>
                <FaPlus />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <hr className='border border-top-5' />

      <div className='px-1'>
        <h3>Friends Added</h3>
        <ul className='navbar-nav'>
          {currentUser.friends?.map((friend, ind) => (
            <li key={ind} className='mt-3' onClick={(e) => setCurrentListener(friend._id)}>
              <span className='me-3'>
                <Image
                  src={"https://source.unsplash.com/random?avatar"} alt="gravatar"
                  width={40}
                  height={40}
                  className='rounded-circle' />
              </span>
              <span>{friend.username}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}
