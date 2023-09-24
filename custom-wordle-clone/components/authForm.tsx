import handleAuth from '@/lib/auth/handleAuth';
import { useState } from 'react'

export default function AuthForm(
  { setUserData }
    : { setUserData: any }
) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <>
      <h3 className='fw-bold'>{isSignUp ? "Sign Up" : "Sign In"}</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          await handleAuth(
            isSignUp, user, setUserData
          )
        }}>
        {isSignUp && (
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name="username"
              value={user.username} onChange={(e) => setUser(pre => ({ ...pre, username: e.target.value }))}
              required />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email"
            value={user.email} onChange={(e) => setUser(pre => ({ ...pre, email: e.target.value }))}
            required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password"
            value={user.password} onChange={(e) => setUser(pre => ({ ...pre, password: e.target.value }))}
            required />
        </div>

        <button type="submit" className="btn btn-primary"
          disabled={isSignUp
            ? (!user.username || !user.email || !user.password)
            : (!user.email && !user.password)}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <p className='mt-3'>
        <span>{isSignUp ? "Already a User?" : " Welcome New User."}</span>
        <span role="button" className='text-primary' onClick={() => setIsSignUp(pre => !pre)}>{isSignUp ? " Sign In" : " Sign Up"}</span>
      </p>
    </>
  )
}
