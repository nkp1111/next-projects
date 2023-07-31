import React from 'react'

export default function SignUpForm() {
  return (
    <div className="col col-md-6 col-12 d-flex flex-column justify-content-center align-items-center">
      <form action="" className='bg-white p-4 m-auto shadow-lg'>
        <div>
          <input type="text" title="username" placeholder='Username' className='w-100 p-2 px-3 mt-3 rounded-2 border-1' />
        </div>
        <div>
          <input type="email" title="email" placeholder='Email' className='w-100 p-2 px-3 mt-3 rounded-2 border-1' />
        </div>
        <div>
          <input type="password" title="password" placeholder='Password' className='w-100 p-2 px-3 mt-3 rounded-2 border-1' />
        </div>
        <div>
          <input type="password" title="confirm password" placeholder='Password Again' className='w-100 p-2 px-3 mt-3 rounded-2 border-1' />
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
