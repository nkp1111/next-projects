"use client";

import React, { useEffect, useState } from 'react'

export default function ContactForm(
  { handleSubmit }: { handleSubmit: (formData: FormData) => void }
) {
  const [contactData, setContactData] = useState({
    name: "", email: "", message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-4">

      <form className="card-body group"
        action={handleSubmit}
        noValidate>
        <span className={`mt-2 text-sm text-red-500`}>
          *Please fill all fields
        </span>

        {/* name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Who are you?"
            className="input input-bordered"
            onChange={(e) => setContactData((pre) => ({ ...pre, name: e.target.value }))}
            required />
        </div>
        {/* email  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Can you give me your email?"
            className="input input-bordered peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            onChange={(e) => setContactData((pre) => ({ ...pre, email: e.target.value }))}
            required />

          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a valid email address
          </span>
        </div>
        {/* message  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            placeholder="Please write your message here"
            className="textarea textarea-bordered peer-[1]"
            onChange={(e) => setContactData((pre) => ({ ...pre, message: e.target.value }))}
            required />
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className={`btn btn-primary group-invalid:pointer-events-none group-invalid:opacity-40 ${loading && "pointer-events-none"}`}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
