"use client";

import Sidebar from '@/components/chat/sidebar'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '@/lib/getContext';
import { UserData, Conversation } from "@/types"
import styles from "@/app/chat/chat.module.css"
import { getChats, sendChat } from '@/lib/user';
import { format } from "date-fns"

export default function Chat() {
  const { currentListener, setCurrentListener, currentUser } = useGlobalContext();
  // console.log(currentListener, "current user chat page", currentUser);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (currentUser._id && currentListener) {
      getChats({ speaker: currentUser._id, listener: currentListener }).then(data => {
        setConversations(data);
      })
    }
  }, [currentListener, currentUser._id])

  return (
    <main className={`${styles.chat_mainbox} d-flex flex-grow-1`}>
      <Sidebar setCurrentListener={setCurrentListener}
        currentUser={currentUser} />
      <section className='flex-grow-1'>
        {!currentListener ? (
          <div className='w-100 d-flex justify-content-center align-items-center'>
            <p className='mt-5 fs-1 fw-bold text-secondary'>Open a conversation to start a chat</p>
          </div>
        ) : (
          <div className={`${styles.chat_box} d-flex flex-column`}>
            <div className='flex-grow-1 p-3'>
              {conversations.map(conversation => {
                return <div key={conversation._id}
                  className={`${conversation.speaker === currentUser._id ? styles.user_message : styles.friend_message} mb-4 d-flex`}>
                  <span className='p-1 px-3 rounded-3'>
                    <span>{conversation.text}</span>
                    <small className={`d-block ${conversation.speaker !== currentUser._id && 'text-end'}`}> {format(new Date(conversation.createdAt), "h:mmb")}</small>
                  </span>

                </div>
              })}
            </div>

            <div className='mt-auto p-3 d-flex align-items-center justify-content-between flex-column'>
              <textarea title="message" placeholder='Type your message' className='form-control'
                value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <button type="button"
                disabled={!message}
                onClick={() => {
                  sendChat({
                    speaker: currentUser._id, listener: currentListener, text: message
                  })
                  setMessage("")
                  getChats({ speaker: currentUser._id, listener: currentListener }).then(data => {
                    setConversations(data);
                  })
                }}
                className='btn btn-primary w-100 mt-2'>Send</button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
