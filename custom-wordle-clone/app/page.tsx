"use client";

import useGlobalContext from "@/lib/context";
import { useEffect, useState } from "react";
import getCurrentUserData from "@/lib/user/getCurrentUserData";
import LandingPage from "@/components/landingPage";

export default function Home() {
  const { userData, setUserData } = useGlobalContext();
  const [dbConnected, setDbConnected] = useState(false);
  // connect to postgres database
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/dbConnect", {
        method: "POST"
      })
      const { success, error, message } = await res.json();
      if (success) {
        console.log(message)
        setDbConnected(true);
      }
      if (error) console.log(error);
    })();
  }, [])

  useEffect(() => {
    if (!userData.userId) {
      (async () => {
        await getCurrentUserData(setUserData)
      })();
    }
  }, [setUserData, userData])

  return <LandingPage dbConnected={dbConnected} />
}
