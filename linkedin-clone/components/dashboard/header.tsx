import { navData } from './dashboardData'
import Logo from '../general/logo'
import NavLinkBar from '../general/navLinkBar'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Header({ currentWidth }: { currentWidth: number }) {
  return (
    <header className='bg-white'>
      <nav className="navbar navbar-light bg-light">
        <div className="container d-flex align-items-center gap-3 justify-content-center">
          {/* logo icon only */}
          <Logo iconOnly />

          {/* search bar  */}
          <div className='rounded-pill bg-white shadow-sm py-1 ps-2 flex-grow-1 d-flex align-items-center'>
            <AiOutlineSearch className="px-1 fs-2" />
            {currentWidth > 876 && (
              <input type="text" placeholder="Search" className='rounded-pill flex-grow-1 h-100 p-2 px-3 border-0' />
            )}
          </div>

          <div className='d-flex align-items-center flex-wrap justify-content-center'>
            <NavLinkBar navData={navData} currentWidth={currentWidth} />
          </div>
        </div>
      </nav>
    </header>
  )
}
