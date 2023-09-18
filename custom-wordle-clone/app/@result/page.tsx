"use client";

import React from 'react'
import { AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';
import styles from "@/app/modal.module.css"
import useGlobalContext from '@/lib/context';


export default function Result() {
  const { isResultOpen, gameStatus: { gameWon }, gameReset }:
    {
      isResultOpen: boolean,
      gameStatus: { isGameOver: boolean, gameWon: boolean },
      gameReset: () => void,
    } = useGlobalContext();

  const modalOpenStyles = "d-block bg-dark position-absolute"
  const modalCloseStyles = "d-none"

  return (
    <div className={`text-white bg-dark card ${isResultOpen ? modalOpenStyles : modalCloseStyles} ${styles.modal_body}`}>
      {/* close button  */}
      <div role="button" title="close button" className="text-end ms-auto fw-semibold"
        onClick={() => {
          gameReset()
        }}>
        <AiOutlineCloseCircle className="fs-2" />
      </div>
      <div className="text-center">
        <div>
          <AiOutlineCheck className="fs-1 bg-success rounded-circle p-1 mb-3" />
        </div>
        <h3 className='fw-bold fs-2 m-0'>{gameWon ? "You Won" : "You Lose"}</h3>
        <p className='d-block fs-5 m-0 text-info'>Share this word&apos;s link</p>
      </div>


    </div>
  )
}

