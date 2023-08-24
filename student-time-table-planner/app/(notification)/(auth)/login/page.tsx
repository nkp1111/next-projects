"use client";

import Image from "next/image";
import Link from "next/link";
import frontImage from "@/public/images/stock-image.jpg"
import styles from "@/app/utils.module.css"
import handleLogin from "@/lib/auth/handleLogin";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  return (
    <main className={`${styles.height_full}`}>
      <div className="container-fluid vh-100">
        <div className="row h-100 d-flex align-items-center">
          <div className={`col-md-6 col-12 order-2 ${styles.md_center}`}>
            <h1 className="text-dark fw-bold">Login</h1>

            <form className="bg-white shadow-lg p-4 rounded-2 mt-2" encType="multipart/form-data"
              onSubmit={(e) => {
                handleLogin(e, loginData, router)
                setLoginData({ email: "", password: "" });
              }}>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email"
                  value={loginData.email} onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                  required />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"
                  value={loginData.password} onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                  required />
              </div>

              <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <div className="mt-3">
              <p>New student? <Link role="button" className="text-danger" href="/register">Register</Link> here</p>
            </div>
          </div>

          <div className={`col-md-6 col-12 ${styles.hide_md}`}>
            <Image
              src={frontImage}
              alt="main sitting in front of computer checking screen for data"
              width={640}
              height={354}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
