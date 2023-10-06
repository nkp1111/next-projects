import { FaArrowRight } from 'react-icons/fa';
import styles from "@/app/page.module.css"
import { Dispatch, SetStateAction } from "react";
import { ProfileMetaDataType } from '@/type';

export default function MetadataProfile(
  { metaType, metadata, setMetaType }
    : {
      metaType: ProfileMetaDataType,
      metadata: { [key: string]: string }[],
      setMetaType: Dispatch<SetStateAction<ProfileMetaDataType>>
    }
) {
  const profileMetadata: Array<ProfileMetaDataType> = ["repos", "gists", "starred"];
  return (
    <div className={`flex-grow-1 shadow-sm pb-2 pe-2 ${styles.metadata_container}`}>
      <div className="d-flex gap-3 justify-content-center mb-3">
        {profileMetadata.map(item => <span key={item}
          className={`border btn p-2 flex-grow-1 fw-bold text-uppercase fs-5 ${item === metaType ? "btn-primary" : "btn-outline-primary"}`}
          onClick={(e) => {
            setMetaType(() => item);
          }}>{item}</span>)}
      </div>
      {metaType === "repos" && metadata && metadata.length > 0 && (
        <>
          {metadata.reverse().map((data: any, ind: number) => (
            <div key={data.id} className={`${ind !== 0 && "mt-3"} border border-white rounded-1 p-3 d-flex justify-content-between ${styles.cursor_pointer}`}>
              <h3 className='text-white fs-6 fw-normal text-start'>{data.name}</h3>
              <span>
                <FaArrowRight />
              </span>
            </div>
          ))}
        </>
      )}

      {metaType === "gists" && metadata && metadata.length > 0 && (
        <>
          {metadata.reverse().map((data: any, ind: number) => (
            <div key={data.id} className={`${ind !== 0 && "mt-3"} border border-white rounded-1 p-3 d-flex justify-content-between ${styles.cursor_pointer}`}>
              <p className='text-white m-0 text-start'>{data.description}</p>
              <span>
                <FaArrowRight />
              </span>
            </div>
          ))}
        </>
      )}

      {metaType === "starred" && metadata && metadata.length > 0 && (
        <>
          {metadata.reverse().map((data: any, ind: number) => (
            <div key={data.id} className={`${ind !== 0 && "mt-3"} border border-white rounded-1 p-3 d-flex justify-content-between align-items-center ${styles.cursor_pointer}`}>
              <div className="d-flex flex-column">
                <h3 className='text-white fs-6 fw-normal text-start'>{data.name}</h3>
                <p className='m-0'>{data.url}</p>
              </div>
              <span>
                <FaArrowRight />
              </span>
            </div>
          ))}
        </>
      )}

      {!metaType && (
        <div className='text-danger'>
          Metadata for that type not available...
        </div>
      )}
    </div>
  )
}
