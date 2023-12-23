import DisplayHeader from '@/components/display/header'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function page() {
  const session = await getServerSession(authOptions)
  console.log(session);

  if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <section className='bg-zinc-900 text-white flex-1 h-full px-8 py-2 overflow-y-auto'>
      <DisplayHeader />
      <div className='mt-4 h-full'>
        <h2 className="text-center w-full text-xl lg:text-2xl font-bold ">Account</h2>


      </div>
    </section>
  )
}

