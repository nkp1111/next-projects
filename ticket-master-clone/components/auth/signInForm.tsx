import Link from 'next/link'
import React from 'react'

export default function SignInForm() {
  return (
    <div className='px-3 pt-5'>
      <h1>Sign In</h1>
      <p>New to Ticketmaster?
        <Link href="/signup" className='text-primary ms-1 fw-semibold text-decoration-none'>Sign Up</Link>
      </p>

      <form className='mt-5 pb-2'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="mb-3 d-flex justify-content-between flex-wrap">
          <div className='form-check'>
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
          </div>

          <a href="#" className="text-primary fw-bold text-decoration-none">Forgot Password?</a>
        </div>

        <div className="mb-3">
          <p>
            By continuing past this page, you agree to the <a href="#" className='text-primary fw-semibold text-decoration-none'>Terms of Use</a> and understand that information will be used as described in our <a href="#" className='text-primary fw-semibold text-decoration-none'>Privacy Policy</a>.
          </p>
        </div>

        <div className='text-end mt-3'>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  )
}
