import logo from '@/public/assets/discord_main_logo.svg'
import Image from 'next/image'
import { navData, NavDataType } from '@/constant/navData'

export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <nav className='navbar navbar-expand-md w-100'>
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={50}
          className='navbar-brand'
        />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav flex-row gap-2'>
            {navData.map((item: NavDataType) => (
              <li key={item.id} className='nav-item'>
                <a href={item.link} className='nav-link text-white'>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <button type='button' className='btn bg-white rounded-pill'>Login</button>
      </nav>
    </header>
  )
}
