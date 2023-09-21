"use client";

import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import styles from "@/app/modal.module.css"
import useGlobalContext from '@/lib/context';
import { STYLES } from "@/constant";

const { modalCloseStyles, modalOpenStyles } = STYLES;


export default function Auth() {
  const { isAuthOpen, setIsAuthOpen } = useGlobalContext();
  const [isSignUp, setIsSignUp] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className={`text-white bg-dark card ${isAuthOpen ? modalOpenStyles : modalCloseStyles} ${styles.modal_body}`}>
      {/* close button  */}
      <div role="button" title="close button" className="text-end ms-auto fw-semibold"
        onClick={() => setIsAuthOpen(() => false)}>
        <AiOutlineCloseCircle className="fs-2" />
      </div>

      <h3 className='fw-bold'>{isSignUp ? "Sign Up" : "Sign In"}</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const authUrl = isSignUp ? "/api/signUp" : "/api/signIn";
          const res = await fetch(authUrl, {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify(user),
          })

          const data = await res.json()
          if (data) {
            console.log(data)
            setIsAuthOpen(() => false);
          }
        }}>
        {isSignUp && (
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name="username"
              value={user.username} onChange={(e) => setUser(pre => ({ ...pre, username: e.target.value }))}
              required />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email"
            value={user.email} onChange={(e) => setUser(pre => ({ ...pre, email: e.target.value }))}
            required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password"
            value={user.password} onChange={(e) => setUser(pre => ({ ...pre, password: e.target.value }))}
            required />
        </div>

        <button type="submit" className="btn btn-primary"
          disabled={isSignUp
            ? (!user.username || !user.email || !user.password)
            : (!user.email && !user.password)}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <p className='mt-3'>
        <span>{isSignUp ? "Already a User?" : " Welcome New User."}</span>
        <span role="button" className='text-primary' onClick={() => setIsSignUp(pre => !pre)}>{isSignUp ? " Sign In" : " Sign Up"}</span>
      </p>
    </div>
  )
}
