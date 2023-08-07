"use client";

import handleLogin from '@/lib/handleLogin'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useGlobalContext } from '@/lib/getContext';

export default function LoginForm() {
  const router = useRouter()
  const { setCurrentUser } = useGlobalContext();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  return (
    <div className="col col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
      <form action="" className='bg-white p-4 m-auto shadow-lg' onSubmit={e => handleLogin(e, loginData, router, setCurrentUser)}>
        <div>
          <input type="email" title="email" placeholder='Email' className='w-100 p-2 px-3 mt-3 rounded-2 border-1'
            value={loginData.email} onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))} />
        </div>
        <div>
          <input type="password" title="password" placeholder='Password' className='w-100 p-2 px-3 mt-3 rounded-2 border-1'
            value={loginData.password} onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))} />
        </div>

        <button type='submit' className='btn w-100 bg-primary text-white px-3 m-auto mt-3'>Log In</button>

        <div className='text-center my-4'>
          <a href="#" className='text-primary'>Forgot Password?</a>
        </div>

        <div>
          <a role="button" href="/" className='btn bg-success text-white px-3 d-block m-auto mt-3'>Create a New Account</a>
        </div>

      </form>
    </div>
  )
}
