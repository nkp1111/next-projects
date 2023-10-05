"use client";

import Image from "next/image";
import pic from "@/public/assets/pic.svg"
import FindUserForm from "@/components/findUserForm";
import ShowProfile from "@/components/showProfile";
import { useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState<any>(null);
  return (
    <main className="text-center">
      <div className="container">
        <Image
          src={pic}
          alt={"."}
          width={300}
          height={250}
        />
        <h1>GitHub Thinker</h1>
        <FindUserForm setProfile={setProfile} />

        <ShowProfile profile={profile} />
      </div>
    </main>
  )
}
