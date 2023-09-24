"use client";

import React, { useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import styles from "@/app/modal.module.css"
import useGlobalContext from '@/lib/context';
import { STYLES } from "@/constant";
import UserStats from '@/components/userStats';
import AuthForm from '@/components/authForm';
import getCurrentUserData from '@/lib/user/getCurrentUserData';

const { modalCloseStyles, modalOpenStyles } = STYLES;


export default function Auth() {
  const { isAuthOpen, setIsAuthOpen, setUserData, userData } = useGlobalContext();

  useEffect(() => {
    if (!userData.userId) {
      (async () => {
        await getCurrentUserData(setUserData)
      })();
    }
  }, [setUserData, userData])

  return (
    <div className={`text-white bg-dark card ${isAuthOpen ? modalOpenStyles : modalCloseStyles} ${styles.modal_body}`}>
      {/* close button  */}
      <div role="button" title="close button" className="text-end ms-auto fw-semibold"
        onClick={() => setIsAuthOpen(() => false)}>
        <AiOutlineCloseCircle className="fs-2" />
      </div>

      {userData && Object.keys(userData).length > 0
        ? <UserStats user={userData} />
        : <AuthForm setUserData={setUserData} />}

    </div>
  )
}
