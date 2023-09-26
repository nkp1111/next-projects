"use client";

import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from "@/app/modal.module.css"
import useGlobalContext from '@/lib/context';
import { STYLES } from "@/constant";
import { UserDetailSchema } from '@/type';
import toast from 'react-hot-toast';
import addNewCustomWord from '@/lib/user/addNewCustomWord';
import getCustomWordById from '@/lib/user/getCustomWordById';

const { modalCloseStyles, modalOpenStyles } = STYLES;


export default function AddCustom() {
  const { isAddCustomOpen,
    setIsAddCustomOpen,
    userData, gameReset,
    setWordToGuess }
    : {
      isAddCustomOpen: boolean, setIsAddCustomOpen: Dispatch<SetStateAction<boolean>>,
      userData: UserDetailSchema, gameReset: () => Promise<void>, setWordToGuess: Dispatch<SetStateAction<string>>,
    } = useGlobalContext();

  const [playCustom, setPlayCustom] = useState(false);
  // for adding custom word
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
      {/* add custom wordle or play custom word  */}
      <div className="d-flex justify-content-between align-items-center mt-1">
        <h3 className='fw-bold fs-2'>Custom Word-
          <span className={playCustom ? "text-success" : "text-primary"}>{playCustom ? "Play" : "Add"}</span>
        </h3>

        <button type='button' className='btn btn-success btn-sm'
          onClick={() => setPlayCustom(pre => !pre)}>
          {playCustom ? "Add Custom" : "Play Custom"}
        </button>
      </div>


      <form
        onSubmit={async (e) => {
          e.preventDefault()
          // start custom word play
          if (playCustom) {
            getCustomWordById(wordToAdd, gameReset);
            setIsAddCustomOpen(false);
            return
          }

          // add new word to user
          await addNewCustomWord(
            wordToAdd,
            setWordToAdd,
            userData.userId,
            setCustomWord)
        }}>

        <div className="mb-3">
          {/* label on base of customPlay  */}
          <label htmlFor="customWord" className="form-label">
            Your custom word {playCustom && "Id"}
          </label>
          <input type="text" className="form-control" id="customWord" name="customWord"
            value={wordToAdd} onChange={(e) => setWordToAdd(pre => e.target.value)}
            placeholder={playCustom ? "e.g. 0f9cb39a-833a-419a-8587-c7e42474c5dc" : "e.g. hello"}
            required />

          <p className="mt-3">
            <strong>Note: </strong> <br />
            {playCustom ? (
              // play custom word notes
              <>
                <span>- Custom wordId needs to be in uuid format.
                  <br /> e.g. 0f9cb39a-833a-419a-8587-c7e42474c5dc
                  <br /> e.g. 0f9cb39a833a419a8587c7e42474c5dc</span><br />
              </>
            ) : (
              // add custom word notes 
              <>
                <span>- Custom word needs to be of 5 character.</span><br />
                {(!userData || !userData.userId) && (<span className="text-danger">- Please login first</span>)}
              </>
            )}
          </p>
        </div>

        <button type="submit" className="btn btn-primary"
          disabled={playCustom ? ![32, 36].includes(wordToAdd.length) : wordToAdd.length !== 5}
        >
          {playCustom ? "Play Word" : "Add Word"}
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


