"use client";

import Image from "next/image";
import pic from "@/public/assets/pic.svg"
import FindUserForm from "@/components/findUserForm";
import ShowProfile from "@/components/showProfile";
import { useState } from "react";
import DetailModal from "@/components/detailModal";
import { MetaDataType, ProfileMetaDataType } from "@/type";
import styles from "@/app/page.module.css"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<{ state: boolean, id: string }>({ state: false, id: "" });
  const [profile, setProfile] = useState<any>(null);
  const [metadata, setMetadata] = useState<MetaDataType>({ repoData: [], gistData: [], starredData: [] });
  const [metaType, setMetaType] = useState<ProfileMetaDataType>("repos");

  return (
    <main className="text-center">
      <div className={`${isModalOpen.state && styles.overlay}`} />
      <div className="container">
        <Image
          src={pic}
          alt={"."}
          width={300}
          height={250}
        />
        <h1>GitHub Thinker</h1>
        <FindUserForm setProfile={setProfile} />

        <ShowProfile profile={profile}
          metaType={metaType} metadata={metadata}
          setMetaType={setMetaType} setMetadata={setMetadata}
          setIsModalOpen={setIsModalOpen} />

        <DetailModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}
          metaType={metaType} metadata={metadata} />
      </div>
    </main>
  )
}
