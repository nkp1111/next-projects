import DarkButton from "./DarkButton";

export default function ContactForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-5">NAME</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fs-5">EMAIL</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label fs-5">MESSAGE</label>
        <textarea className="form-control" id="message" ></textarea>
      </div>

      <DarkButton text={"send message"} />
    </form>
  )
}
