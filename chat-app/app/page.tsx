import Heading from '@/components/heading'
import SignUpForm from '@/components/signUpForm'

export default function Home() {
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
