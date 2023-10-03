import Image from 'next/image'
import icon from "@/public/assets/user_icon.png"

export default function UserIcon() {
  return (
    <Image
      src={icon}
      alt={"user icon"}
      width={80}
      height={80}
      className='rounded-circle'
    />
  )
}
