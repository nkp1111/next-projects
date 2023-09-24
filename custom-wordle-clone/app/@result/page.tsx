"use client";

import React, { useEffect, Dispatch, SetStateAction } from 'react'
import { AiOutlineCheck, AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/ai';
import styles from "@/app/modal.module.css"
import useGlobalContext from '@/lib/context';
import { STYLES } from "@/constant";
import { UserDetailSchema } from '@/type';
import getCurrentUserData from '@/lib/getCurrentUserData';
import toast from 'react-hot-toast';

const { modalCloseStyles, modalOpenStyles } = STYLES;

let resultAdded = false;

export default function Result() {
  const { isResultOpen, gameStatus: { gameWon, isGameOver }, gameReset, guessBoxLetters, userData, setUserData }:
    {
      isResultOpen: boolean,
      gameStatus: { isGameOver: boolean, gameWon: boolean },
      gameReset: () => void,
      guessBoxLetters: string[],
      userData: UserDetailSchema,
      setUserData: Dispatch<SetStateAction<{}>>
    } = useGlobalContext();

  useEffect(() => {
    if (!userData.userId) {
      (async () => {
        await getCurrentUserData(setUserData)
      })();
    }
  }, [setUserData, userData]);

  useEffect(() => {
    if (isGameOver && !resultAdded) {
      resultAdded = true;
      fetch("/api/countResult", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameWon, guessTurns: guessBoxLetters.length, userId: userData.userId }),
      }).then(res => res.json())
        .then(data => {
          const { success, user } = data;
          if (success) {
            toast.success("Result updated")
            setUserData(user);
          }
        })
        .catch(err => console.log(err))
    }
  }, [gameWon, guessBoxLetters.length, isGameOver, setUserData, userData])

  return (
    <div className={`text-white bg-dark card ${isResultOpen ? modalOpenStyles : modalCloseStyles} ${styles.modal_body}`}>
      {/* close button  */}
      <div role="button" title="close button" className="text-end ms-auto fw-semibold"
        onClick={() => {
          gameReset()
          resultAdded = false;
        }}>
        <AiOutlineCloseCircle className="fs-2" />
      </div>
      <div className="text-center">
        <div className='mb-3'>
          {gameWon
            ? <AiOutlineCheck className="fs-1 bg-success rounded-circle p-1" />
            : <AiOutlineClose className="fs-1 bg-danger rounded-circle p-1" />
          }
        </div>
        <h3 className='fw-bold fs-2 m-0'>{gameWon ? "You Won" : "You Lose"}</h3>
        <p className='d-block fs-5 m-0 text-info' role="button">Share this word&apos;s link</p>
      </div>

      <button type="button" className='btn btn-success w-100 my-3' disabled>Make Your Own Wordle</button>
      <button type="button" className='btn btn-danger w-100'
        onClick={() => {
          gameReset()
          resultAdded = false;
        }}>Play A Random Word</button>
    </div>
  )
}

