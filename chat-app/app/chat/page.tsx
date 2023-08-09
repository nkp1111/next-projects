"use client";

import Sidebar from '@/components/chat/sidebar'
import React from 'react'
import { useGlobalContext } from '@/lib/getContext';
import { UserData } from "@/types"

export default function Chat() {
  const { currentListener, setCurrentListener, currentUser } = useGlobalContext();
  // console.log(currentListener, "current user chat page", currentUser);
  return (
    <main className='d-flex h-100'>
      <Sidebar setCurrentListener={setCurrentListener}
        currentUser={currentUser as UserData} />
      <section className='flex-grow-1'>
        {!currentListener ? (
          <div className='w-100 d-flex justify-content-center align-items-center'>
            <p className='mt-5 fs-1 fw-bold text-secondary'>Open a conversation to start a chat</p>
          </div>
        ) : (
          <div>
            <textarea title="message" placeholder='Type your message'></textarea>
          </div>
        )}

      </section>
    </main>
  )
}
