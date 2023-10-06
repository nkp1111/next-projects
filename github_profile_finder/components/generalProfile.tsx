import Image from 'next/image'
import styles from "@/app/page.module.css"

export default function GeneralProfile(
  { profileData }
    : { profileData: any }
) {
  return (
    <div className={`flex-grow-1 text-white text-center border border-dotted border-white p-3 ${styles.metadata_container}`}>
      {Object.keys(profileData).map(key => {
        if (key === "Image") {
          return <Image
            key={key}
            src={profileData[key]}
            alt={"avatar"}
            width={300}
            height={300}
            className='rounded-circle img-fluid'
          />
        } else {
          return <div key={key}>
            <hr />
            <div className='text-start container'>
              <div className="row">
                <div className="col-sm-3 col-12"><strong>{key}: </strong></div>
                <div className="col-sm-9 col-12">{profileData[key]}</div>
              </div>
            </div>
          </div>
        }
      })}
    </div>
  )
}
