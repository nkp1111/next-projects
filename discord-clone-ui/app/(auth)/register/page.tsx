import React from 'react'
import styles from "@/app/(auth)/auth.module.css"
import Logo from '@/components/auth/Logo'

export const metadata = {
  title: "Register-Discord-clone-ui"
}

export default function Register() {
  return (
    <main className={styles.auth_background}>
      <h1 className='visually-hidden'>Register</h1>
      <Logo />
      <article className={`card ${styles.auth_form_box}`}>
        <h2 className='text-center fs-2 mb-4'>Create an account</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name="username" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="text" className="form-control" id="password" name="password" />
          </div>

          <button type="submit" className="btn w-100 mb-1">Continue</button>

          <a href="/login">Already have an account?</a>
        </form>
      </article>
    </main>
  )
}
