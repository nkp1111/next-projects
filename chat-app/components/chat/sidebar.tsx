import Image from 'next/image'
import React from 'react'


const friends: {}[] = Array(4).fill(0);
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <input type="text" title="Friend Search" placeholder='Search for friends' />

      <ul className=''>
        {friends.map((_, ind) => (
          <li key={ind} className='mt-3'>
            <span className='me-3'>
              <Image
                src="https://source.unsplash.com/random?avatar" alt="gravatar"
                width={40}
                height={40}
                className='rounded-circle' />
            </span>
            <span>{ind}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
