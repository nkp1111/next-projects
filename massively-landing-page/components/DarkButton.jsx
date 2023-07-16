import styles from "@/app/utils.module.css"

export default function DarkButton({ text }) {
  return (
    <button className={`border border-2 border-dark text-dark bg-white text-uppercase py-2 px-5 my-3 mx-auto ${styles.dark_btn}`}>
      {text}
    </button>
  )
}
