"use client";

import styles from "@/app/page.module.css"
import Link from "next/link"
import { useState } from "react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className={`${styles.auth_form} mx-auto text-start my-5 bg-white shadow-lg rounded-2`}>
      <h1 className='mt-3 fw-semibold'>Sign in</h1>
      <p>Stay updated on your professional world</p>

      <div className="mb-3">
        <input type="text" className="form-control py-2" id="email" placeholder="Email or Phone" />
      </div>

      <div className="mb-3 position-relative">
        <input type={showPassword ? "text" : "password"}
          className="form-control py-2" id="password" placeholder="Password" />
        {/* show and hide password  */}
        <button type="button" className="btn text-primary position-absolute top-0 end-0"
          onClick={() => setShowPassword(pre => !pre)}>
          {showPassword ? "hide" : "show"}
        </button>
      </div>

      <Link href="#" className="text-decoration-none fw-bold my-4">Forgot password?</Link>

      <button type="submit" className="btn btn-primary rounded-pill w-100 mt-3 py-2">Sign in</button>
    </form>
  )
}
