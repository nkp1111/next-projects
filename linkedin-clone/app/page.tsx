"use client";

import { useState, useEffect } from "react";
import LandingPage from "@/components/landing_page";
import handleFetch from "@/lib/handleFetch";
import { DB_CONNECT_URL } from "@/constant";

export default function Home() {
  const [dbConnected, setDbConnected] = useState(false);
  // connect to postgres database
  useEffect(() => {
    handleFetch({ url: DB_CONNECT_URL, method: "POST" })
      .then(data => {
        if (data) {
          setDbConnected(true);
        }
      })
  }, [])

  return <LandingPage />
}
