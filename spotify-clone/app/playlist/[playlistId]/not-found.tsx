import DisplayHeader from '@/components/display/header'
import React from 'react'

export default function NotFound() {
  return (
    <section className='bg-zinc-900 text-white flex-1 h-full px-8 py-2 overflow-y-auto w-full'>
      <h2 className="text-center w-full invisible -top-96">Playlist</h2>
      <DisplayHeader />
      <div className='mt-10 h-full'>
        <h3 className='text-2xl font-bold text-error text-center'>Playlist not found</h3>
      </div>
    </section>
  )
}
