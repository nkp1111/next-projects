import { FiSearch } from "react-icons/fi"
import { FaUserAlt } from "react-icons/fa"
import { RiMessage2Fill } from "react-icons/ri"
import { HiBellAlert } from "react-icons/hi2"

export default function Header() {
  return (
    <header className='bg-primary px-3 py-1 text-white'>
      <nav className='w-100 navbar navbar-expand-sm'>
        <div className="d-flex align-items-center justify-content-between flex-wrap w-100 gap-3">

          <div className="navbar-brand text-white fw-bolder fs-3">LamaSocial</div>

          <div className='d-flex rounded-pill overflow-hidden flex-grow-1'>
            <span className="input-group-text rounded-0" id="basic-addon1">
              <FiSearch className="fs-5" />
            </span>
            <input type="text" className="form-control rounded-0" placeholder="Search for friend, post or video" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div>
            <ul className='navbar-nav gap-1'>
              <li className='navbar-item'>
                <a className="navbar-link" href="#">Homepage</a>
              </li>
              <li className='navbar-item'>
                <a className="navbar-link" href="#">Timeline</a>
              </li>
            </ul>
          </div>

          <div className="d-flex gap-1">
            <div className="user cursor-pointer">
              <FaUserAlt />
            </div>
            <div className="message cursor-pointer">
              <RiMessage2Fill />
            </div>
            <div className="notification cursor-pointer">
              <HiBellAlert />
            </div>
          </div>

          <div className="profile rounded-circle overflow-hidden">
            Profile
          </div>
        </div>
      </nav>
    </header>
  )
}
