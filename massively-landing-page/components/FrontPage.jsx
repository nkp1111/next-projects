import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "@/app/utils.module.css"

export default function FrontPage() {
  return (
    <div className={`text-center text-white px-2 ${styles.front_page}`}>
      <h1 className="text-uppercase">this is <br />massively</h1>
      <p className={`my-4 ${styles.front_text}`}>
        A free, fully responsive HTML5+CSS# site template designed by @ajlkn for HTML5 UP and released for free under the Creative Commons license.
      </p>
      <button className="btn border border-3 rounded-circle border-white text-white">
        <AiOutlineArrowDown className="fs-5" />
      </button>
    </div>
  )
}
