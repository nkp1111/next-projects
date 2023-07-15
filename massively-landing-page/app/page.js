import FrontPage from "@/components/FrontPage";
import Navbar from "@/components/Navbar";
import style from "./utils.module.css"
import FirstSection from "@/components/FirstSection";

export default function Home() {
  return (
    <main>
      <FrontPage />
      <div className={`${style.man_container} bg-white`} >
        <div className="shadow-lg">
          <Navbar />
          <FirstSection />
        </div>
      </div>
    </main>
  )
}
