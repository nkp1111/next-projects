"use client";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  useEffect(() => {
    toast.success("Its working");
  }, [])
  return (
    <main className="">
      Landing Page
    </main>
  )
}
