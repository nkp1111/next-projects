import Heading from '@/components/heading'
import LoginForm from '@/components/login'
import React from 'react'

export default function Login() {
  return (
    <main className="vh-100 bg-light">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Heading />
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
