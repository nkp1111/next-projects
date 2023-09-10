import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineLeaderboard } from "react-icons/md";
import styles from "@/app/utils.module.css";
import GuessBox from "@/components/guessBox";
import Keyboard from "@/components/keyboard";

export default function Home() {
  return (
    <main className={`vh-100 vw-100 text-white bg-dark pt-5`}>
      <h1 className="text-center">Custom Wordle</h1>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <AiOutlineInfoCircle className={`text-white fs-3 fw-semibold ${styles.cursor_pointer}`} />
        <p className={`p-1 px-2 text-primary bg-dark shadow-sm border rounded-1 border-primary mx-3 my-0 ${styles.cursor_pointer}`}>
          Make your own worlde
        </p>
        <MdOutlineLeaderboard className={`text-white fs-3 fw-semibold ${styles.cursor_pointer}`} />
      </div>

      <div className={`d-flex justify-content-center align-items-center flex-column fs-4 ${styles.font_mono}`}>
        <GuessBox />
        <Keyboard />
      </div>
    </main>
  )
}
