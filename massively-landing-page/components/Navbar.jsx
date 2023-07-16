import { navData, navIcons } from "@/constant/navdata"
import styles from "@/app/utils.module.css"

export default function Navbar() {
  return (
    <nav className={`p-0 ${styles.navbar}`} >
      <div className="container-fluid d-flex justify-content-between p-0">
        <ul className="navbar-nav flex-row p-0 h-100">
          {navData.map(item => (
            <li key={item.id} className={`${item.id === 1 && "text-dark bg-white"} p-2 px-3`}>
              <h4 className={`${item.id !== 1 ? "text-white" : "text-black"} `}>
                <a href={item.link} className={`nav-link text-uppercase`}>{item.name}</a>
              </h4>
            </li>
          ))}
        </ul>

        <ul className="navbar-nav flex-row gap-2">
          {navIcons.map(item => (
            <li key={item.id} className={`nav-item p-2 ${item.id === 4 && "pe-4"}`}>
              <h4 className="m-0">
                <a href={item.link} className="nav-link">
                  {<item.icon className={`text-white fs-5 ${styles.icon}`} />}
                </a>
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
