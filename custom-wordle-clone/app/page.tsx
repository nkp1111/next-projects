"use client";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineLeaderboard } from "react-icons/md";
import styles from "@/app/utils.module.css";
import GuessBox from "@/components/guessBox";
import Keyboard from "@/components/keyboard";
import useGlobalContext from "@/lib/context";
import { useEffect } from "react";

export default function Home() {
  const { isRuleOpen, setIsRuleOpen, isResultOpen, isAuthOpen, setIsAuthOpen, isAddCustomOpen, setIsAddCustomOpen, } = useGlobalContext();
  // connect to postgres database
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/dbConnect", {
        method: "POST"
      })
      const { success, error, message } = await res.json();
      if (success) console.log(message);
      if (error) console.log(error);
    })();
  }, [])

  return (
    <main className={`vh-100 vw-100 text-white bg-dark pt-5`}>
      <div className={`${(isRuleOpen || isResultOpen || isAuthOpen || isAddCustomOpen) && styles.overlay}`} />
      <h1 className="text-center">Custom Wordle</h1>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <AiOutlineInfoCircle className={`text-white fs-3 fw-semibold ${styles.cursor_pointer}`}
          onClick={() => setIsRuleOpen(() => true)} />

        <p className={`p-1 px-2 text-primary bg-dark shadow-sm border rounded-1 border-primary mx-3 my-0 ${styles.cursor_pointer}`}
          onClick={() => setIsAddCustomOpen(() => true)}>
          Make your own worlde
        </p>

        <MdOutlineLeaderboard className={`text-white fs-3 fw-semibold ${styles.cursor_pointer}`}
          onClick={() => setIsAuthOpen(() => true)} />
      </div>

      <div className={`d-flex justify-content-center align-items-center flex-column fs-4 ${styles.font_mono}`}>
        <GuessBox />
        <Keyboard />
      </div>
    </main>
  )
}
