"use client";

import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from "@/app/modal.module.css"
import useGlobalContext from '@/lib/context';
import { STYLES } from "@/constant";
import { UserDetailSchema } from '@/type';
import checkWordInDictionary from '@/lib/checkWordInDictionary';
import toast from 'react-hot-toast';
import getCurrentUserData from '@/lib/getCurrentUserData';

const { modalCloseStyles, modalOpenStyles } = STYLES;

export default function AddCustom() {
  const { isAddCustomOpen, setIsAddCustomOpen,
    userData, setIsAuthOpen, setUserData }
    : {
      isAddCustomOpen: boolean, setIsAddCustomOpen: Dispatch<SetStateAction<boolean>>,
      userData: UserDetailSchema, setIsAuthOpen: Dispatch<SetStateAction<boolean>>,
      setUserData: Dispatch<SetStateAction<{}>>
    } = useGlobalContext();

  const [customWord, setCustomWord] = useState("");

  useEffect(() => {
    if (!userData.userId) {
      setIsAddCustomOpen(false);
      toast.error("Please login first");
    }
  }, [setIsAddCustomOpen, userData.userId])


  return (
    <div className={`text-white bg-dark card ${isAddCustomOpen ? modalOpenStyles : modalCloseStyles} ${styles.modal_body}`}>
      {/* close button  */}
      <div role="button" title="close button" className="text-end ms-auto fw-semibold"
        onClick={() => setIsAddCustomOpen(() => false)}>
        <AiOutlineCloseCircle className="fs-2" />
      </div>
      {/* add custom wordle  */}
      <h3 className='fw-bold fs-2'>Custom Word</h3>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          if (!await checkWordInDictionary(customWord)) {
            toast.error("Word is not valid, Please enter a valid word");
            return;
          }

          const addCustomWordUrl = "/api/addCustomWord";
          const res = await fetch(addCustomWordUrl, {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify({ userId: userData.userId, customWord }),
          })

          const { success, error, word } = await res.json()
          if (success) {
            console.log(success)
            toast.success(`New word added ${word.word}.`)
          } else {
            console.log(error);
          }
        }}>


        <div className="mb-3">
          <label htmlFor="customWord" className="form-label">Your custom word</label>
          <input type="text" className="form-control" id="customWord" name="customWord"
            value={customWord} onChange={(e) => setCustomWord(e.target.value)}
            required />
          <p className="mt-3">
            <strong>Note: </strong> <br />
            <span>- Custom word needs to be of 5 character.</span><br />
            {(!userData || !userData.userId) && (<span className="text-danger">- Please login first</span>)}
          </p>
        </div>

        <button type="submit" className="btn btn-primary"
          disabled={customWord.length !== 5}
        >
          Add Word
        </button>
      </form>

      <hr className='border-secondary mt-3 mb-2' />
      <button className='btn btn-info' type="button"
      >Added Custom Word </button>

    </div>
  )
}


