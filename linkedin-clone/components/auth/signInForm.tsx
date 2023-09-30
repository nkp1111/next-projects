"use client";

import styles from "@/app/page.module.css"
import { LOGIN_URL } from "@/constant";
import handleFetch from "@/lib/handleFetch";
import Link from "next/link"
import { useState } from "react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <form className={`${styles.auth_form} mx-auto text-start my-5 bg-white shadow-lg rounded-2`}
      onSubmit={(e) => {
        e.preventDefault();

        // handle login
        handleFetch({
          url: LOGIN_URL,
          method: "POST",
          body: user
        }).then(data => {
          // TODO: handle after login
          console.log(data);
        });
      }}>
      <h1 className='mt-3 fw-semibold'>Sign in</h1>
      <p>Stay updated on your professional world</p>

      <div className="mb-3">
        <input type="text" className="form-control py-2" id="email" placeholder="Email or Phone"
          value={user.email} onChange={(e) => setUser(pre => ({ ...pre, email: e.target.value }))} />
      </div>

      <div className="mb-3 position-relative">
        <input type={showPassword ? "text" : "password"}
          className="form-control py-2" id="password" placeholder="Password"
          value={user.password} onChange={(e) => setUser(pre => ({ ...pre, password: e.target.value }))} />
        {/* show and hide password  */}
        <button type="button" className="btn text-primary position-absolute top-0 end-0"
          onClick={() => setShowPassword(pre => !pre)}>
          {showPassword ? "hide" : "show"}
        </button>
      </div>

      <Link href="#" className="text-decoration-none fw-bold my-4">Forgot password?</Link>

      <button type="submit" className="btn btn-primary rounded-pill w-100 mt-3 py-2"
        disabled={!user.email || !user.password}>Sign in</button>
    </form>
  )
}
