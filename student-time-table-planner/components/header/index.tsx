import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-primary text-white px-5 py-2'>
      <nav className='navbar '>
        <div className="navbar-brand fw-bolder text-uppercase text-white">
          <Link href="/timetable" className="nav-link text-white">timeTable</Link>
        </div>
        <div className="ms-auto">
          <ul className="navbar-nav flex-row gap-3 text-underline">
            <li className="nav-item">
              <Link href="/timetable" className="nav-link text-white">My timeTable</Link>
            </li>
            <li className="nav-item">
              <Link href="/course" className="nav-link text-white">All Courses</Link>
            </li>
            <li className="nav-item">
              <Link href="/course/me" className="nav-link text-white">My Courses</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
