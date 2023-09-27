import RegisterForm from '@/components/auth/registerForm'
import Logo from '@/components/general/logo'
import Link from 'next/link'


export default function Register() {
  return (
    <main className='bg-white text-center vh-100'>
      <div className="container pt-5">
        <Logo />
        <h1 className='mt-3'>Join LinkedIn now - it&apos;s free!</h1>

        {/* register form */}
        <RegisterForm />

        <p className='mt-5'>Already on LikedIn?
          <Link href="/auth/signin" className='ms-1 text-primary text-decoration-underline fw-semibold'>Sign in</Link>
        </p>
      </div>
    </main>
  )
}
