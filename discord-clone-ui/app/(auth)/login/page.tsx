import React from 'react'
import styles from "@/app/(auth)/auth.module.css"
import Logo from '@/components/auth/Logo'
import Image from 'next/image'
import QrCodeIcon from "@/public/assets/qr_code.png"


export const metadata = {
  title: "Login-Discord-clone-ui"
}

export default function Login() {
  return (
    <main className={styles.auth_background}>
      <h1 className='visually-hidden'>Login</h1>
      <Logo />
      <article className={`card ${styles.auth_form_box} ${styles.wide} flex-row`}>
        <div className='p-2'>
          <h2 className='text-center fs-2 mb-4'>Welcome back!</h2>
          <p>We&apos;re so excited to see you again!</p>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="text" className="form-control" id="password" name="password" />
            </div>

            <a href="/login" className='mb-3 d-block'>Forgot your password?</a>

            <button type="submit" className="btn w-100 mb-1">Login</button>

            <p>Need an account? <a href="/register" className='ms-2'>Register</a></p>
          </form>
        </div>
        <article className={`${styles.qr_login_box} text-center p-3 flex-column`}>
          <div className="order-2">
            <h3 className='mt-3'>Log in with QR Code</h3>
            <p className='mt-3'>
              Scan this with the <strong>Discord mobile app </strong> to log in instantly.
            </p>
          </div>
          <div className='bg-white p-2 m-auto d-inline-block rounded-2'>
            <Image
              src={QrCodeIcon}
              alt="qr code"
              width={250}
              height={250}
            />
          </div>
        </article>
      </article>
    </main >
  )
}
