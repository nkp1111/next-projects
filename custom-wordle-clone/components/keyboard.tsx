import styles from "@/app/utils.module.css"

const KEYS: { readonly [key: string]: string[] } = {
  topKeys: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  midKeys: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  bottomKeys: ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Delete"],
}

const keyStyles = 'd-flex flex-row gap-2 mt-1 rounded-1 bg-secondary flex-grow p-2 px-3' + styles.key_hover
export default function Keyboard() {
  return (
    <div className='mt-3'>
      {Object.keys(KEYS).map(key => (
        <div key={key} className={`d-flex align-items-center justify-content-center gap-1 ${key === "midKeys" && "px-2"}`}>
          {KEYS[key].map((key, index) => (
            <div className={keyStyles} key={index} role="button" title={key}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
