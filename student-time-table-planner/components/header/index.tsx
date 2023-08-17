import React from 'react'

export default function Header() {
  return (
    <header className='bg-primary text-white px-5 py-2'>
      <nav className='navbar '>
        <div className="navbar-brand fw-bolder text-uppercase text-white">
          <a href="/timetable" className="nav-link text-white">timeTable</a>
        </div>
        <div className="ms-auto">
          <ul className="navbar-nav flex-row gap-3 text-underline">
            <li className="nav-item">
              <a href="/timetable" className="nav-link text-white">My timeTable</a>
            </li>
            <li className="nav-item">
              <a href="/courses" className="nav-link text-white">All Courses</a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link text-white">My Courses</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
