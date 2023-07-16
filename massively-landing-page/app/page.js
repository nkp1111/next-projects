import style from "./utils.module.css"
import {
  FirstSection,
  FrontPage,
  Navbar,
  SecondSection,
  ThirdSection,
  Footer,
} from "@/components"

export default function Home() {
  return (
    <main>
      <FrontPage />
      <div className={`${style.man_container} bg-white`} >
        <div className="shadow-lg">
          <Navbar />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </div>
      </div>
      <Footer />
    </main>
  )
}
