"use client";

import { ShoppingCart } from '@/lib/db/cart'
import formatPrice from '@/lib/general/formatPrice'
import { BsThreeDots } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import Link from "next/link";
import { Session } from 'next-auth';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';

interface UserMenuButtonProps {
  session: Session | null
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        {user ? (
          <Image
            src={user.image || FaUserCircle}
            alt={"user profile"}
            width={40}
            height={40}
            className='rounded-full w-10'
          />
        ) : (
          <BsThreeDots />
        )}
      </label>

      <div
        tabIndex={0}
        className='dropdown-content menu menu-sm rounded-box mt-3 w-52 bg-blue-100 shadow z-30 p-2'
      >
        {user ? (
          <button type="button" className='btn btn-error' onClick={(e) => signOut({ callbackUrl: "/" })}>Sign Out</button>
        ) : (
          <button type="button" className='btn btn-primary' onClick={(e) => signIn()} >Sign In</button>
        )}
      </div>
    </div>
  )
}
