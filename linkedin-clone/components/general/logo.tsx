import Image from 'next/image'
import Link from 'next/link'
import logoWithText from "@/public/assets/logo-with-text.svg"
import logoIcon from "@/public/assets/linkedin-icon.svg"

export default function Logo(
  { iconOnly = false }
    : { iconOnly?: boolean }
) {
  return (
    <Link className="navbar-brand" href="/">
      <Image
        src={!iconOnly ? logoWithText : logoIcon}
        alt={"likedIn logo"}
        width={!iconOnly ? "220" : "50"}
        height={!iconOnly ? "40" : "50"}
      />
    </Link>
  )
}
