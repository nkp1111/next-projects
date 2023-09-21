"use client";

import React from 'react'
import { AiOutlineCheck, AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/ai';
import styles from "@/app/modal.module.css"
import useGlobalContext from '@/lib/context';
import { STYLES } from "@/constant";

const { modalCloseStyles, modalOpenStyles } = STYLES;

export default function Result() {
  const { isResultOpen, gameStatus: { gameWon }, gameReset }:
    {
      isResultOpen: boolean,
      gameStatus: { isGameOver: boolean, gameWon: boolean },
      gameReset: () => void,
    } = useGlobalContext();


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
        }}>Play A Random Word</button>
    </div>
  )
}

