"use client";

import useGlobalContext from '@/lib/useGlobalContext'
import Link from 'next/link'
import React from 'react'

export default function SignUpForm() {
  const { selectCountry } = useGlobalContext();
  return (
    <div className='px-3 pt-5'>
      <h1>Sign Up</h1>
      <p>Already have a Ticketmaster Account?
        <Link href="/signin" className='text-primary ms-1 fw-semibold text-decoration-none'>Sign In</Link>
      </p>

      <form className='mt-5'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <div className="mb-3 row">
          <div className="col-6 pe-2">
            <label htmlFor="first-name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="first-name" />
          </div>
          <div className="col-6 ps-2">
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="last-name" />
          </div>
        </div>

        <div className="mb-4 row">
          <div className="col-6 pe-2">
            <label htmlFor="country" className="form-label">Country of Residence</label>
            <select className="form-select" id="country" defaultValue={"India"}>
              {selectCountry.map((country: any) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 ps-2">
            <label htmlFor="zip-code" className="form-label">Zip/Postal code</label>
            <input type="text" className="form-control" id="zip-code" />
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
