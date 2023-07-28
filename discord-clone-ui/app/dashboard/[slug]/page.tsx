import Sidebar from '@/components/dashboard/sidebar'
import React from 'react'
import { availableLinks } from '@/constant/sidebarData'
import { notFound } from 'next/navigation'
import ContentMain from '@/components/dashboard/contentMain'
import ContentSidebar from '@/components/dashboard/contentSidebar'

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  if (slug === "#" || !availableLinks.includes(slug)) {
    return { title: 'Not found' }
  }

  return { title: slug + "-Discord-clone-ui" }
}

export default async function Dashboard(
  { params: { slug } }:
    { params: { slug: string } }
) {

  if (!availableLinks.includes(slug)) {
    notFound();
  }

  return (
    <main className='d-flex vh-100'>
      <Sidebar />
      <ContentSidebar currentField={slug} />
      <ContentMain currentField={slug} />
    </main>
  )
}
