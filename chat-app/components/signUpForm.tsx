"use client";

import React, { useState } from 'react'
import handleRegister from '@/lib/handleRegister'
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/lib/getContext';

export default function SignUpForm() {
  const router = useRouter()
  const { setCurrentUser } = useGlobalContext();
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  return (
    <div className="col col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
      <form className='bg-white p-4 m-auto shadow-lg' onSubmit={e => handleRegister(e, registerData, router, setCurrentUser)}>
        <div>
          <input type="text" title="username" placeholder='Username' className='w-100 p-2 px-3 mt-3 rounded-2 border-1'
            value={registerData.username} onChange={(e) => setRegisterData(prev => ({ ...prev, username: e.target.value }))} />
        </div>
        <div>
          <input type="email" title="email" placeholder='Email' className='w-100 p-2 px-3 mt-3 rounded-2 border-1'
            value={registerData.email} onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))} />
        </div>
        <div>
          <input type="password" title="password" placeholder='Password' className='w-100 p-2 px-3 mt-3 rounded-2 border-1'
            value={registerData.password} onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))} />
        </div>
        <div>
          <input type="password" title="confirm password" placeholder='Password Again' className='w-100 p-2 px-3 mt-3 rounded-2 border-1'
            value={registerData.confirmPassword} onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))} />
        </div>

        <button type='submit' className='btn w-100 bg-primary text-white p-2 px-3 m-auto mt-3'>Sign Up</button>

        <div className='d-flex justify-content-center'>
          <a href="/login" role='button'
            className='btn bg-success text-white p-2 px-3 mt-3'>
            Log into Account
          </a>
        </div>
      </form>
    </div>
  )
}
