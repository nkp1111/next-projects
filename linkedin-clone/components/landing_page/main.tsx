import styles from "@/app/page.module.css"
import Image from "next/image"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"
import { mainData } from "./landingData"
import landingPageImage from "@/public/assets/Landing-Page-Stock-Image.svg"

export default function Main() {
  return (
    <main className='flex-grow-1'>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6 col-12">
            <h1 className={`${styles.landing_heading_text} my-5`}>Welcome to your professional community</h1>

            <div className="pe-5">
              {mainData.map(item => (
                <Link key={item.id}
                  href={item.link}
                  className="bg-white p-3 border rounded-3 d-flex align-items-center justify-content-between mt-2 text-dark text-decoration-none">
                  <span>{item.title}</span>
                  <span><FaChevronRight className="fs-4" /></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-md-6 col-12 align-items-center justify-content-center d-flex">
            <Image
              src={landingPageImage}
              alt="landing page background main using laptop"
              width={"500"}
              height={"500"}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
