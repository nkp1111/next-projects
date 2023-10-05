import styles from "@/app/page.module.css"
import { Dispatch, SetStateAction, useState } from "react";

export default function FindUserForm(
  { setProfile }
    : { setProfile: Dispatch<any> }
) {

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const username = e.currentTarget.querySelector("input")?.value;
      if (!username) return;
      const githubUrl = `https://api.github.com/users/${username}`
      fetch(githubUrl)
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(err => console.log(err))
    }}>
      <input type="text" placeholder='nkp1111'
        className={`p-2 px-3 rounded-pill text-dark text-center ${styles.input_width}`} />
    </form>
  )
}
