import { BsFillTrashFill, BsHandThumbsUpFill, BsThreeDots } from "react-icons/bs"
import UserIcon from "../general/userIcon"
import styles from "@/app/page.module.css"
import { showPostLinks } from "./dashboardData"

export default function ShowPostMain() {
  const posts = [{}, {}]
  return (
    <div>
      {posts.map((post, ind) => (
        <div key={ind} className="card shadow-sm rounded-2 mt-3">
          <div className="card-body">
            <div className="d-flex gap-3 align-items-center mb-2">
              <div>
                <UserIcon />
              </div>
              <div className="d-flex flex-column">
                <p className="m-0"><strong>Neeraj P</strong></p>
                <p className="m-0">neerajp4321@gmail.com</p>
                <p className="m-0">11 minutes ago</p>
              </div>
              <div className={`ms-auto ${styles.cursor_pointer}`}>
                <BsThreeDots className="fs-4 fw-semibold" />
              </div>
            </div>

            <div className="mb-2">
              <p>The cool post is the third one</p>
            </div>

            <div className="d-flex justify-content-around gap-3">
              {showPostLinks.map(link => (
                <div key={link.id} className={`d-flex align-items-center gap-1 ${styles.cursor_pointer}`}>
                  <div >{<link.icon className={`fs-6 ${link.spClass}`} />}</div>
                  <div>{link.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
