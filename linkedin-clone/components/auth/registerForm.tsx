"use client";

import styles from "@/app/page.module.css"
import { REGISTER_URL } from "@/constant";
import handleFetch from "@/lib/handleFetch";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
  });
  return (
    <form className={`${styles.auth_form} mx-auto text-start my-5 bg-white shadow-lg rounded-2`}
      onSubmit={(e) => {
        e.preventDefault();

        // handle register 
        handleFetch({
          url: REGISTER_URL,
          method: "POST",
          body: user
        }).then(data => {
          console.log(data);
        });
      }}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email or phone number</label>
        <input type="text" className="form-control" id="email"
          value={user.email} onChange={(e) => setUser(pre => ({ ...pre, email: e.target.value }))} />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input type="text" className="form-control" id="name"
          value={user.name} onChange={(e) => setUser(pre => ({ ...pre, name: e.target.value }))} />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password(6 or more characters)</label>
        <div className="position-relative">
          <input type={showPassword ? "text" : "password"}
            className="form-control" id="password"
            value={user.password} onChange={(e) => setUser(pre => ({ ...pre, password: e.target.value }))} />
          {/* show and hide password  */}
          <button type="button" className="btn text-primary position-absolute top-0 end-0"
            onClick={() => setShowPassword(pre => !pre)}>
            {showPassword ? "hide" : "show"}
          </button>
        </div>
      </div>

      <button type="submit" className="btn btn-primary rounded-pill w-100 mt-2"
        disabled={!user.email || !user.name || !user.password}>Continue</button>
    </form>
  )
}
