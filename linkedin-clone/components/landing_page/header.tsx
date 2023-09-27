import Link from 'next/link'
import { navData } from './landingData'
import Logo from '../general/logo'

export default function Header() {
  return (
    <header className='bg-white'>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-around align-items-center">
          {/* logo  */}
          <Logo />

          <div className='d-flex align-items-center flex-wrap justify-content-center'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row gap-4">
              {navData.map(item => {
                const { icon: Icon } = item;
                return (
                  <li className="nav-item" key={item.id}>
                    <Link className="nav-link d-flex flex-column align-items-center justify-content-center"
                      href={item.link}>
                      <span>
                        <Icon className="fs-4" />
                      </span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link type="button" className='btn btn-outline-primary rounded-pill fw-bold ms-3'
              href="/auth/signin">Sign in</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
