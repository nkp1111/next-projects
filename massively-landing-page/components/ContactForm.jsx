import DarkButton from "./DarkButton";

export default function ContactForm() {
  return (
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">NAME</label>
        <input type="text" class="form-control" id="name" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">EMAIL</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">MESSAGE</label>
        <textarea type="text" class="form-control" id="message" ></textarea>
      </div>

      <DarkButton text={"send message"} />
    </form>
  )
}
