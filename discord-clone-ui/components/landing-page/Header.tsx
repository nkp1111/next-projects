import logo from '@/public/assets/discord_main_logo.svg'
import Image from 'next/image'
import { navData, NavDataType } from '@/constant/navData'

export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <Image
        src={logo}
        alt="logo"
        width={200}
        height={50}
        className='navbar-brand'
      />

      <ul className='navbar-nav flex-row gap-2'>
        {navData.map((item: NavDataType) => (
          <li key={item.id} className='nav-item'>
            <a href={item.link} className='nav-link'>{item.title}</a>
          </li>
        ))}
      </ul>

      <button type='button' className='btn bg-white rounded-pill'>Login</button>
    </header>
  )
}
