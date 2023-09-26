"use client";

import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdOutlineLeaderboard } from 'react-icons/md'
import GuessBox from './guessBox'
import Keyboard from './keyboard'
import useGlobalContext from '@/lib/context';
import styles from "@/app/utils.module.css";
import toast from 'react-hot-toast';

export default function LandingPage({ dbConnected }: { dbConnected: boolean }) {
  const { isRuleOpen, setIsRuleOpen,
    isResultOpen, isAuthOpen,
    setIsAuthOpen, isAddCustomOpen,
    setIsAddCustomOpen, userData, setUserData } = useGlobalContext();
  return (
    <main className={`vh-100 vw-100 text-white bg-dark pt-5`}>
      <div className={`${(isRuleOpen || isResultOpen || isAuthOpen || isAddCustomOpen) && styles.overlay}`} />
      <h1 className="text-center">Custom Wordle</h1>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <AiOutlineInfoCircle className={`text-white fs-3 fw-semibold ${styles.cursor_pointer}`}
          onClick={() => setIsRuleOpen(() => true)} />

        <p className={`p-1 px-2 text-primary bg-dark shadow-sm border rounded-1 border-primary mx-3 my-0 
        ${dbConnected ? styles.cursor_pointer : styles.cursor_disabled}`}
          onClick={() => {
            if (!dbConnected) {
              toast.error("Database not connected");
            }
            setIsAddCustomOpen(() => true)
          }}>
          Make your own worlde
        </p>

        <MdOutlineLeaderboard className={`text-white fs-3 fw-semibold 
        ${dbConnected ? styles.cursor_pointer : styles.cursor_disabled}`}
          onClick={() => {
            if (!dbConnected) {
              toast.error("Database not connected");
            }
            setIsAuthOpen(() => true);
          }} />
      </div>

      <div className={`d-flex justify-content-center align-items-center flex-column fs-4 ${styles.font_mono}`}>
        <GuessBox />
        <Keyboard />
      </div>
    </main>
  )
}
