import UserIcon from "../general/userIcon";
import { addPostLinks } from "./dashboardData";
import styles from "@/app/page.module.css"

export default function AddPostMain() {
  return (
    <div className="card shadow-sm rounded-2">
      <div className="card-body">
        <div className="d-flex gap-1 align-items-center">
          <div>
            <UserIcon />
          </div>
          <div className="flex-grow-1">
            <input type="text" placeholder="Start a post" className="w-100 rounded-pill p-2 px-3 shadow-sm" />
          </div>
        </div>

        <div className="d-flex justify-content-around flex-wrap align-items-center">
          {addPostLinks.map(link => (
            <div key={link.id} className={`d-flex align-items-center gap-1 ${styles.cursor_pointer}`}>
              <div >{<link.icon className={`fs-4 ${link.spClass}`} />}</div>
              <div>{link.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
