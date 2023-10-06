import { FaArrowRight } from 'react-icons/fa';
import styles from "@/app/page.module.css"
import { Dispatch, SetStateAction } from "react";
import { MetaDataType, ProfileMetaDataType } from '@/type';

export default function MetadataProfile(
  { metaType, metadata, setMetaType, setIsModalOpen }
    : {
      metaType: ProfileMetaDataType,
      metadata: MetaDataType,
      setMetaType: Dispatch<SetStateAction<ProfileMetaDataType>>,
      setIsModalOpen: Dispatch<SetStateAction<{ state: boolean, id: string }>>,
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
      {metaType === "repos" && metadata?.repoData && metadata.repoData?.length > 0 && (
        <>
          {metadata.repoData?.reverse().map((data: any, ind: number) => (
            <div key={data.id} className={`${ind !== 0 && "mt-3"} border border-white rounded-1 p-3 d-flex justify-content-between ${styles.cursor_pointer}`}
              onClick={() => setIsModalOpen(() => ({ state: true, id: data.id }))}>
              <h3 className='text-white fs-6 fw-normal text-start'>{data.name}</h3>
              <span>
                <FaArrowRight />
              </span>
            </div>
          ))}
        </>
      )}

      {metaType === "gists" && metadata?.gistData && metadata.gistData?.length > 0 && (
        <>
          {metadata.gistData?.reverse().map((data: any, ind: number) => (
            <div key={data.id} className={`${ind !== 0 && "mt-3"} border border-white rounded-1 p-3 d-flex justify-content-between ${styles.cursor_pointer}`}
              onClick={() => setIsModalOpen(() => ({ state: true, id: data.id }))}>
              <p className='text-white m-0 text-start'>{data.description}</p>
              <span>
                <FaArrowRight />
              </span>
            </div>
          ))}
        </>
      )}

      {metaType === "starred" && metadata?.starredData && metadata.starredData?.length > 0 && (
        <>
          {metadata.starredData?.reverse().map((data: any, ind: number) => (
            <div key={data.id} className={`${ind !== 0 && "mt-3"} border border-white rounded-1 p-3 d-flex justify-content-between align-items-center ${styles.cursor_pointer}`}
              onClick={() => setIsModalOpen(() => ({ state: true, id: data.id }))}>
              <div className="d-flex flex-column">
                <h3 className='text-white fs-6 fw-normal text-start'>{data.name}</h3>
                <p className='m-0 text-start'>{data.url}</p>
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
