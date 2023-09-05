import styles from "@/app/utils.module.css"

export default function AuthBackground() {
  return (
    <div className={`position-relative w-100 h-100 pt-5 px-4 shadow-md ${styles.auth_background}`}>
      <h1 className={`fw-bolder text-primary ${styles.auth_heading}`}>Welcome Back</h1>
      <p className='text-dark fw-semibold my-4'>
        Discover millions of events, get alerts about your favorite artists, teams, plays and more - plus always- secure, effortless ticketing.
      </p>
      <div className='w-25 border-1 border-primary rounded-1'></div>
    </div>
  )
}
