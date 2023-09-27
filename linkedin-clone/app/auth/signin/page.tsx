import SignInForm from '@/components/auth/signInForm'
import Logo from '@/components/general/logo'
import Link from 'next/link'


export default function SignIn() {
  return (
    <main className='bg-white vh-100'>
      <div className="container pt-4">
        <Logo />

        {/* SignIn form */}
        <SignInForm />

        <p className='mt-5 text-center'>New to LikedIn?
          <Link href="/auth/register" className='ms-1 text-primary text-decoration-none fw-semibold'>Join now</Link>
        </p>
      </div>
    </main>
  )
}
