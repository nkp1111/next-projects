import styles from "@/app/page.module.css"

export default function RegisterForm() {
  return (
    <form className={`${styles.auth_form} mx-auto text-start my-5 bg-white shadow-lg rounded-2`}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email or phone number</label>
        <input type="text" className="form-control" id="email" />
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input type="text" className="form-control" id="name" />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password(6 or more characters)</label>
        <input type="password" className="form-control" id="password" />
      </div>

      <button type="submit" className="btn btn-primary rounded-pill w-100 mt-2">Continue</button>
    </form>
  )
}
