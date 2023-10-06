import { formatProfileData } from '@/lib/formatProfileData';
import setMetaData from '@/lib/setMetaData';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from "@/app/page.module.css"

import GeneralProfile from './generalProfile';
import MetadataProfile from './metadataProfile';
import { ProfileMetaDataType } from '@/type';

export default function ShowProfile(
  { profile }
    : { profile: any }
) {
  console.log(profile)
  const [repoData, setRepoData] = useState<any>(null);
  const [gistData, setGistData] = useState<any>(null);
  const [starredData, setStarredData] = useState<any>(null);
  const [metaType, setMetaType] = useState<ProfileMetaDataType>("repos");

  // get repo, starred, gist data of user
  useEffect(() => {
    if (!profile) return;
    let { repos_url, starred_url, gists_url } = profile;
    if (repos_url) {
      setMetaData(repos_url, setRepoData);
    }

    if (gists_url) {
      setMetaData(gists_url.split("{")[0], setGistData);
    }

    if (starred_url) {
      setMetaData(starred_url.split("{")[0], setStarredData);
    }
  }, [profile]);


  if (profile && typeof profile === "object" && Object.keys(profile).length > 0) {
    const profileData: { [key: string]: string } = formatProfileData(profile);
    return (
      <div className={`d-flex gap-3 mt-5 ${styles.profile_container}`}>
        <GeneralProfile profileData={profileData} />
        <MetadataProfile metaType={metaType}
          setMetaType={setMetaType}
          metadata={metaType === "repos" ? repoData
            : metaType === "starred" ? starredData
              : metaType === "gists" ? gistData : null}
        />
      </div>
    )
  }
  else {
    return <div className='mt-5'>
      <h2>Please enter a valid username...</h2>
    </div>
  }
}
