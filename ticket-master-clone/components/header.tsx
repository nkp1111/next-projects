import Image from "next/image";
import logo from "@/public/ticketmaster.svg"
import { navData, navSideData } from "@/constants/navData";

export default function Header(
  { bgBlack = false }:
    { bgBlack?: boolean }
) {
  return (
    <header className={`${bgBlack && 'bg-dark'}`}>
      <nav className="navbar w-100 d-flex justify-content-between px-3">
        <div className="d-flex align-items-center">
          <Image
            src={logo}
            alt={'ticketmaster logo'}
            width={143}
            height={20}
            loading="lazy"
          />
          <ul className="navbar-nav flex-row gap-3 ms-3">
            {navData.map(data => (
              <li key={data.id} className="nav-item ">
                <a href={data.link} className="nav-link text-white">{data.title}</a>
              </li>
            ))}
            <li className="nav-item">
              <a href="#" className="nav-link text-white">More</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="navbar-nav flex-row gap-3 ms-2 p-0">
            {navSideData.map(data => (
              <li key={data.id} className="nav-item p-0">
                <a href={data.link} className="nav-link text-white">{data.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

