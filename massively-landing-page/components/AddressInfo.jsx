import contact from "@/constant/contact"
import styles from "@/app/utils.module.css"

export default function AddressInfo() {
  return (
    <div className="container-fluid ps-0 h-100 d-flex flex-column justify-content-between">
      {contact.map((item, ind) => (
        <>
          <div className={`${ind === 3 && "pb-5"} row px-4`} key={item.id}>
            <div className="col-4 fw-bold text-dark text-uppercase ">
              <h3 className="fs-5">{item.title}</h3>
            </div>
            <div className="col-8">
              {item.title !== "social"
                ? item.value
                : <SocialIcons icons={item.value} />}
            </div>
          </div>
          <hr className={`${ind === 3 && "d-none"}`} />
        </>
      ))}
    </div>
  )
}


export function SocialIcons({ icons }) {
  return (
    <>
      {icons.map(icon => (
        <icon.icon key={icon.id} className={`fs-5 me-3 shadow-lg rounded-circle ${styles.icon}`} />
      ))}
    </>
  )
}