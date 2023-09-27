import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/assets/logo-with-text.svg"

export default function Logo() {
  return (
    <Link className="navbar-brand" href="/">
      <Image
        src={logo}
        alt={"likedIn logo"}
        width={"220"}
        height={"40"}
      />
    </Link>
  )
}
