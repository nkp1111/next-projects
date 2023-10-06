import { MetaDataType, ProfileMetaDataType } from '@/type'
import React, { Dispatch, SetStateAction } from 'react'
import styles from "@/app/page.module.css"
import { AiOutlineCloseCircle, AiOutlineVerticalAlignMiddle } from "react-icons/ai"

const modalOpenStyles = "d-block bg-dark position-absolute";
const modalCloseStyles = "d-none";

export default function DetailModal(
  { isOpen, setIsOpen, metaType, metadata }
    : {
      isOpen: {
        state: boolean;
        id: string;
      },
      setIsOpen: Dispatch<SetStateAction<{
        state: boolean;
        id: string;
      }>>,
      metaType: ProfileMetaDataType,
      metadata: MetaDataType,
    }
) {
  const targetMetaData = metaType === "repos" ? metadata["repoData"]
    : metaType === "gists" ? metadata["gistData"]
      : metaType === "starred" ? metadata["starredData"] : [];

  const data: any = targetMetaData.filter(data => data.id === isOpen.id)[0];
  console.log(data)

  return (
    <div className={`text-white bg-dark card text-start ${isOpen.state ? modalOpenStyles : modalCloseStyles} ${styles.modal_body}`}>
      {/* close button  */}
      <div role="button" title="close button" className="text-end ms-auto fw-semibold"
        onClick={() => {
          setIsOpen(() => ({ state: false, id: "" }))
        }}>
        <AiOutlineCloseCircle className="fs-2" />
      </div>

      {data && ["repos", "starred"].includes(metaType) ? (
        // repo modal 
        <div>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
            <span>{metaType === "starred" && "Starred"} Repo Id: {data.id}</span>
            <span>- By {data.owner.login}</span>
          </div>
          <small>Created At: {data.created_at}</small>
          <hr className='mt-2' />

          <div className="d-flex flex-wrap justify-content-between gap-2 mb-2 align-items-center">
            <h3 className=''>{data.name}</h3>
            <button type="button"
              className='btn btn-outline-success'
              onClick={(e) => {
                navigator.clipboard.writeText(data.clone_url)
                alert(`Copied to clipboard,\n${data.clone_url}`)
              }}>Clone Repo</button>
          </div>

          <p className="m-0">Language: {data.language}</p>
          <p className="m-0">License: {data.license}</p>
          <p className="m-0">Size: {data.size}</p>

          <p className="m-0">Stars: {data.stargazers_count}</p>
          <p className="m-0">Forks: {data.forks}</p>
          <p className="m-0">Issues: {data.open_issues}</p>
          <p className="m-0">Visibility: {data.visibility}</p>
          <hr className='mt-2' />

          <p className="m-0">View Code: <a href={data.html_url} target='_blank'>{data.html_url}</a></p>
          <p className="m-0">View live app: <a href={data.homepage} target='_blank'>{data.homepage}</a></p>

        </div>
      ) : data && metaType === "gists" ? (
        // gist modal 
        <div>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
            <span>Gist Id: {data.id}</span>
            <span>- By {data.owner.login}</span>
          </div>
          <small>Created At: {data.created_at}</small>
          <hr className='mt-2' />
          <h3 className=''>{data.description}</h3>
          <p className="m-0">Public: {`${data.public}`}</p>
          <p className="m-0">Comments count: {data.comments}</p>
          <p className="m-0">View Gist: <a href={data.url} target='_blank'>{data.url}</a></p>

          <hr className="mt-2" />
          <p className="m-0"><strong>Files: </strong></p>
          <div className='d-flex flex-wrap gap-2 mt-2'>
            {Object.keys(data.files)?.slice(0, 10).map(file => (
              <button type="button" key={file} className='flex-grow-1 border p-2 btn btn-outline-primary'
                onClick={() => {
                  navigator.clipboard.writeText(data["files"][file].raw_url)
                  alert(`Copied to clipboard, File raw data url:\n${data["files"][file].raw_url}`)
                }}>
                {file}
              </button>
            ))}
          </div>
        </div>
      ) : <h2 className='text-danger'>Error... , Data Not Found</h2>}
    </div>
  )
}
