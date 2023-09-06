"use client";

import { usePathname } from "next/navigation";
import styles from "@/app/utils.module.css"

const signInHeading = "Welcome Back";
const signUpHeading = "Your All- Access Pass";
const signInParagraph = "Discover millions of events, get alerts about your favorite artists, teams, plays and more - plus always- secure, effortless ticketing.";
const signUpParagraph = "This is it - millions of live events, up to the minute alerts for your favorite artists and teams and, of course, always safe, secure ticketing.";

export default function AuthBackground() {
  const pathname = usePathname();
  const isSignInPage = pathname === "/signin";
  const headingText = isSignInPage ? signInHeading : signUpHeading;
  const paraText = isSignInPage ? signInParagraph : signUpParagraph;

  return (
    <div className={`position-relative w-100 h-100 pt-5 pb-2 px-4 shadow-md ${styles.auth_background}`}>
      <h1 className={`fw-bolder text-primary ${styles.auth_heading}`}>
        {headingText}
      </h1>
      <p className='text-dark fw-semibold my-4'>
        {paraText}
      </p>
      <div className='w-25 border-1 border-primary rounded-1'></div>
    </div>
  )
}
