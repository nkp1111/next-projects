"use client";

import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from "./rules.module.css"
import useGlobalContext from '@/lib/context';

export default function Rules() {
  const { isOpen, setIsOpen }:
    { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> } = useGlobalContext();
  const modalOpenStyles = "d-block bg-dark position-absolute w-50"
  const modalCloseStyles = "d-none"
  return (
    <div className={`text-white bg-red ${isOpen ? modalOpenStyles : modalCloseStyles} ${styles.rules_body}`}>
      <span>Rules</span>
      <button type="button" className="btn btn-danger"
        onClick={() => setIsOpen(() => false)}>Close</button>
    </div>
  )
}
