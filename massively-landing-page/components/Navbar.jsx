import { navData, navIcons } from "@/constant/navdata"

export default function Navbar() {
  return (
    <nav className="navbar bg-dark text-white p-0" >
      <div className="container-fluid d-flex justify-content-between p-0">
        <ul className="navbar-nav flex-row p-0">
          {navData.map(item => (
            <li key={item.id} className={`${item.id === 1 && "text-dark bg-white"} p-2 px-3`}>
              <a href={item.link} className="nav-link text-uppercase">{item.name}</a>
            </li>
          ))}
        </ul>

        <ul className="navbar-nav flex-row gap-2">
          {navIcons.map(item => (
            <li key={item.id} className={`nav-item p-2 ${item.id === 4 && "pe-4"}`}>
              <a href={item.link} className="nav-link">
                {<item.icon className="text-white" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
