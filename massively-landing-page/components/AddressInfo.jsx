import contact from "@/constant/contact"

export default function AddressInfo() {
  return (
    <div className="container-fluid">
      {contact.map(item => (
        <>
          <div className="row" key={item.id}>
            <div className="col-3 fw-bold text-dark text-uppercase">{item.title}</div>
            <div className="col-9">
              {item.title !== "social"
                ? item.value
                : <SocialIcons icons={item.value} />}
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  )
}


export function SocialIcons({ icons }) {
  return (
    <>
      {icons.map(icon => (
        <icon.icon key={icon.id} />
      ))}
    </>
  )
}