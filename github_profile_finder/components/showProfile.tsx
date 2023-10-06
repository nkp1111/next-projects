import { formatProfileData } from '@/lib/formatProfileData';
import getMetaData from '@/lib/getMetaData';
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import styles from "@/app/page.module.css"
import GeneralProfile from './generalProfile';
import MetadataProfile from './metadataProfile';
import { MetaDataType, ProfileMetaDataType } from '@/type';

export default function ShowProfile(
  { profile, metadata, metaType, setMetadata, setMetaType, setIsModalOpen }
    : {
      profile: any,
      metadata: MetaDataType,
      metaType: ProfileMetaDataType,
      setMetadata: Dispatch<SetStateAction<MetaDataType>>,
      setMetaType: Dispatch<SetStateAction<ProfileMetaDataType>>,
      setIsModalOpen: Dispatch<SetStateAction<{ state: boolean, id: string }>>
    }
) {

  // get repo, starred, gist data of user
  useEffect(() => {
    if (!profile) return;
    let { repos_url, starred_url, gists_url } = profile;
    if (repos_url) {
      getMetaData("repos", repos_url, setMetadata);
    }

    if (gists_url) {
      getMetaData("gists", gists_url.split("{")[0], setMetadata);
    }

    if (starred_url) {
      getMetaData("starred", starred_url.split("{")[0], setMetadata);
    }
  }, [profile, setMetadata]);


  if (profile && typeof profile === "object" && Object.keys(profile).length > 0) {
    const profileData: { [key: string]: string } = formatProfileData(profile);
    return (
      <div className={`d-flex gap-3 mt-5 ${styles.profile_container}`}>
        <GeneralProfile profileData={profileData} />
        <MetadataProfile metaType={metaType}
          setMetaType={setMetaType}
          metadata={metadata}
          setIsModalOpen={setIsModalOpen}
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
