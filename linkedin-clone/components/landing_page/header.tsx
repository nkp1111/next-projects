import Link from 'next/link'
import { navData } from './landingData'
import Logo from '../general/logo'
import NavLinkBar from '../general/navLinkBar'

export default function Header() {
  return (
    <header className='bg-white'>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-around align-items-center">
          {/* logo  */}
          <Logo />

          <div className='d-flex align-items-center flex-wrap justify-content-center'>
            <NavLinkBar navData={navData} />

            <Link type="button"
              className='btn btn-outline-primary rounded-pill fw-bold ms-3'
              href="/auth/signin">Sign in</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
