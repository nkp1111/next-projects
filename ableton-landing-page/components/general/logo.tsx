import Link from 'next/link'
import React from 'react'

interface SizeParam {
  size?: "sm" | "lg"
}

interface LogoBlockParams extends SizeParam {
  rotate?: boolean
}


export default function Logo({ size = "sm" }: SizeParam) {
  return (
    <Link href="/" className={`flex ${size === "sm" ? "gap-1" : "gap-2"}`}>
      <LogoBlock size={size} rotate />
      <LogoBlock size={size} />
    </Link>
  )
}

export function LogoBlock({ rotate = false, size }: LogoBlockParams) {
  const sizeWithRotate = size === "sm" ? "w-1 h-7" : "w-2 h-14"
  const sizeWithoutRotate = size === "sm" ? "w-7 h-1" : "w-14 h-2"
  return (
    <div className={`flex 
      ${size === "sm" ? "gap-1" : "gap-2"}
      ${rotate ? "flex-row" : "flex-col"}`}
    >
      {Array(4).fill(0).map((_, index) => (
        <span key={index} className={`bg-black ${rotate ? sizeWithRotate : sizeWithoutRotate}`} />
      ))}
    </div>
  )
}