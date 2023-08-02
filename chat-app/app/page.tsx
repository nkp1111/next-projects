"use client";

import Heading from '@/components/heading'
import SignUpForm from '@/components/signUpForm'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch("/api/config")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }, []);
  return (
    <main className="vh-100 bg-light">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Heading />
          <SignUpForm />
        </div>
      </div>
    </main>
  )
}
