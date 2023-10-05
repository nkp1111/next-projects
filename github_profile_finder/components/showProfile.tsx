import { formatProfileData } from '@/lib/formatProfileData';
import setMetaData from '@/lib/setMetaData';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "@/app/page.module.css"
import { FaArrowRight } from 'react-icons/fa';

export default function ShowProfile(
  { profile }
    : { profile: any }
) {
  console.log(profile)
  const [repoData, setRepoData] = useState<any>(null);
  const [gistData, setGistData] = useState<any>(null);
  const [starredData, setStarredData] = useState<any>(null);
  const [metaType, setMetaType] = useState<string>("repos");

  // get repo data of user
  useEffect(() => {
    if (!profile) return;
    let { repos_url, starred_url, gists_url } = profile;
    if (repos_url) {
      setMetaData(repos_url, setRepoData);
    }
    console.log(gists_url, gists_url.split("{"), starred_url)
    if (gists_url) {
      setMetaData(gists_url.split("{")[0], setGistData);
    }

    if (starred_url) {
      setMetaData(starred_url.split("{")[0], setStarredData);
    }

  }, [profile]);
  console.log(repoData)
  console.log(gistData)
  console.log(starredData)


  if (profile && typeof profile === "object" && Object.keys(profile).length > 0) {
    const profileData: { [key: string]: string } = formatProfileData(profile);
    return (
      <div className={`d-flex gap-3 mt-5 ${styles.profile_container}`}>
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

        <div className={`flex-grow-1 shadow-sm ${styles.metadata_container}`}>
          {metaType === "repos" && repoData && repoData.length > 0 && (
            <>
              {repoData.reverse().map((repo: any, ind: number) => (
                <div key={repo.id} className={`${ind !== 0 && "mt-3"} border border-white rounded-1 p-3 d-flex justify-content-between ${styles.cursor_pointer}`}>
                  <h3 className='text-white fs-6 fw-normal text-start'>{repo.name}</h3>
                  <span>
                    <FaArrowRight />
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    )
  }
  else {
    return <div>
      <h2>Please enter a valid username...</h2>
    </div>
  }
}
