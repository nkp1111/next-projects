"use client";

import Image from "next/image";
import Link from "next/link";
import frontImage from "@/public/images/stock-image.jpg"
import styles from "@/app/utils.module.css"
import { useState } from "react";
import { handleImageInput } from "@/lib/handleImageInput";
import handleRegister from "@/lib/handleRegister";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    photo: "",
  });
  return (
    <main className={`${styles.height_full}`}>
      <div className="container-fluid h-100">
        <div className="row h-100 d-flex align-items-center">
          <div className={`col-md-6 col-12 order-2 ${styles.md_center}`}>
            <h1>New Student&apos;s <strong className="text-dark">Register</strong> here</h1>

            <form className="bg-white shadow-lg p-4 rounded-2 mt-2" encType="multipart/form-data"
              onSubmit={(e) => {
                handleRegister(e, registerData);
                setRegisterData({
                  name: "", email: "", password: "", bio: "", photo: "",
                })
              }}>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name"
                  value={registerData.name} onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
                  required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email"
                  value={registerData.email} onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                  required />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"
                  value={registerData.password} onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                  required />
              </div>

              <div className="mb-3">
                <label htmlFor="bio" className="form-label">Bio</label>
                <textarea className="form-control" id="bio"
                  value={registerData.bio} onChange={(e) => setRegisterData(prev => ({ ...prev, bio: e.target.value }))}>
                </textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="photo" className="form-label">Photo</label>
                <input type="file" className="form-control" id="photo"
                  onChange={(e) => {
                    handleImageInput(e, setRegisterData)
                  }} />
              </div>

              <button type="submit" className="btn btn-primary">Register</button>
            </form>

            <div className="mt-3">
              <p>Already registered as a student? <Link role="button" href="/login">Login</Link></p>

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
