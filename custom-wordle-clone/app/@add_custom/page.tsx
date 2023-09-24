"use client";

import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from "@/app/modal.module.css"
import useGlobalContext from '@/lib/context';
import { STYLES } from "@/constant";
import { UserDetailSchema } from '@/type';
import toast from 'react-hot-toast';
import addNewCustomWord from '@/lib/user/addNewCustomWord';

const { modalCloseStyles, modalOpenStyles } = STYLES;


export default function AddCustom() {
  const { isAddCustomOpen, setIsAddCustomOpen,
    userData }
    : {
      isAddCustomOpen: boolean, setIsAddCustomOpen: Dispatch<SetStateAction<boolean>>,
      userData: UserDetailSchema
    } = useGlobalContext();
  const [wordToAdd, setWordToAdd] = useState("");
  const [customWord, setCustomWord] = useState({
    wordId: "",
    word: "",
  });

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
          // add new word to user
          await addNewCustomWord(
            wordToAdd,
            setWordToAdd,
            userData.userId,
            setCustomWord,
          )
        }}>

        <div className="mb-3">
          <label htmlFor="customWord" className="form-label">Your custom word</label>
          <input type="text" className="form-control" id="customWord" name="customWord"
            value={wordToAdd} onChange={(e) => setWordToAdd(pre => e.target.value)}
            required />
          <p className="mt-3">
            <strong>Note: </strong> <br />
            <span>- Custom word needs to be of 5 character.</span><br />
            {(!userData || !userData.userId) && (<span className="text-danger">- Please login first</span>)}
          </p>
        </div>

        <button type="submit" className="btn btn-primary"
          disabled={wordToAdd.length !== 5}
        >
          Add Word
        </button>
      </form>

      {customWord.wordId && (
        <>
          <hr />
          <div className='container'>
            <div className="row align-items-center">
              <div className="col-3"><strong className='fs-5'>Word</strong></div>
              <div className="col-9"><strong className='fs-5'>Link</strong></div>
              <div className="col-3">{customWord.word}</div>
              <div className="col-9">/{customWord.wordId}</div>
            </div>
            <div className="ms-auto mt-2 text-end">
              <button type="button"
                className='btn btn-success'
                onClick={() => {
                  navigator.clipboard.writeText(`/${customWord.wordId}`)
                  toast.success(`Word link copied - /${customWord.wordId}`)
                }}
              >Copy Link</button>
            </div>

          </div>
        </>
      )}
    </div>
  )
}


