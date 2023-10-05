"use client";
import styles from "@/app/page.module.css"

export default function FindUserForm() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('hello there')
    }}>
      <input type="text" placeholder='nkp1111'
        className={`p-2 px-3 rounded-pill ${styles.input_width}`} />
    </form>
  )
}
