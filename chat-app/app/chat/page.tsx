"use client";

import Sidebar from '@/components/chat/sidebar'
import React from 'react'
import { useGlobalContext } from '@/lib/getContext';
import { UserData } from "@/types"

export default function Chat() {
  const { currentListener, setCurrentListener, currentUser } = useGlobalContext();
  console.log(currentListener, currentUser);
  return (
    <main>
      <Sidebar setCurrentListener={setCurrentListener}
        currentUser={currentUser as UserData} />
      <section>
        {!currentListener ? (
          <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
            <p className='mt-5 fs-1 fw-bold text-secondary'>Open a conversation to start a chat</p>
          </div>
        ) : (
          <div>

          </div>
        )}

      </section>
    </main>
  )
}
