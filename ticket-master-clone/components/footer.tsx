import { footerIcons, footerLinks } from '@/constants/footerData'
import React from 'react'
import logo from "@/public/ticketmaster.svg"
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-dark py-5 mt-auto text-white'>
      <div className="container">
        <div className="row">
          {footerLinks.map(links => {
            return (<article key={links.id} className='col-md-3 col-6'>
              <h3 className='fw-bold mt-5'>
                {links.title}
              </h3>
              {links.sublinks.map(sublink => (<p className='mt-3' key={sublink.id}>
                <a href={sublink.link}>
                  {sublink.title}
                </a>
              </p>))}
            </article>)
          })}
        </div>

        <hr className='border-white mt-5 mb-3' />

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <Image
            src={logo}
            alt={'ticketmaster logo'}
            width={143}
            height={20}
            loading="lazy"
          />

          <p>By continuing post this page, you agree to our <a href="" target='_blank' className='fw-semibold'>Terms of Use.</a></p>

          <p>@ Ticketmaster {new Date().getFullYear()}</p>

          <p>
            {footerIcons.map(icon => (
              <a href={icon.link} key={icon.id}
                title={icon.title}>
                <icon.image className="fs-4" />
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
