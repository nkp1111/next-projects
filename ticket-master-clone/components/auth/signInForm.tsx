import Link from 'next/link'
import React from 'react'

export default function SignInForm() {
  return (
    <form>
      Sign In form
      <Link href="/signup">Sign Up</Link>
    </form>
  )
}
