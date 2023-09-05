import Link from 'next/link'
import React from 'react'

export default function SignUpForm() {
  return (
    <form>
      Sign Up form
      <Link href="/signin">Sign In</Link>
    </form>
  )
}
