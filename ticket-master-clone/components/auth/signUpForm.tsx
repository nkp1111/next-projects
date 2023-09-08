"use client";

import handleSignUp from '@/lib/handleSignUp';
import useGlobalContext from '@/lib/useGlobalContext'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { UserType } from '@/types';

export default function SignUpForm() {
  const { selectCountry } = useGlobalContext();
  const router = useRouter();
  const [user, setUser] = useState<UserType>({
    email: "", password: "", firstName: "", lastName: "", country: "India", zipCode: ""
  });

  return (
    <div className='px-3 pt-5'>
      <h1>Sign Up</h1>
      <p>Already have a Ticketmaster Account?
        <Link href="/signin" className='text-primary ms-1 fw-semibold text-decoration-none'>Sign In</Link>
      </p>

      <form className='mt-5' onSubmit={(e) => {
        handleSignUp(e, user, router)
      }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" name="email"
            value={user.email} onChange={(e) => setUser(pre => ({ ...pre, email: e.target.value }))} />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password"
            value={user.password} onChange={(e) => setUser(pre => ({ ...pre, password: e.target.value }))} />
        </div>

        <div className="mb-3 row">
          <div className="col-6 pe-2">
            <label htmlFor="first-name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="first-name" name="first-name"
              value={user.firstName} onChange={(e) => setUser(pre => ({ ...pre, firstName: e.target.value }))} />
          </div>
          <div className="col-6 ps-2">
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="last-name" name="last-name"
              value={user.lastName} onChange={(e) => setUser(pre => ({ ...pre, lastName: e.target.value }))} />
          </div>
        </div>

        <div className="mb-4 row">
          <div className="col-6 pe-2">
            <label htmlFor="country" className="form-label">Country of Residence</label>
            <select className="form-select" id="country" name="country"
              value={user.country} onChange={(e) => setUser(pre => ({ ...pre, country: e.target.value }))}>
              {selectCountry.map((country: any) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 ps-2">
            <label htmlFor="zip-code" className="form-label">Zip/Postal code</label>
            <input type="text" className="form-control" id="zip-code" name="zipCode"
              value={user.zipCode} onChange={(e) => setUser(pre => ({ ...pre, zipCode: e.target.value }))} />
          </div>
        </div>

        <div className="mb-3">
          <p>
            By continuing past this page, you agree to the <a href="#" className='text-primary fw-semibold text-decoration-none'>Terms of Use</a> and understand that information will be used as described in our <a href="#" className='text-primary fw-semibold text-decoration-none'>Privacy Policy</a>.
          </p>
        </div>

        <div className='text-end mt-3'>
          <button type="submit" className="btn btn-primary">Next</button>
        </div>
      </form>
    </div>
  )
}
