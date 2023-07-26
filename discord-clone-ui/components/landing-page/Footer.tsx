import Image from 'next/image'
import React from 'react'
import flag from "@/public/assets/usa_flag.png"
import discordLogo from "@/public/assets/discord_main_logo.svg"
import { footerIcons, footerLinks } from '@/constant/footerData'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='text-white'>
      <div className="container">
        <div className="row">
          <div className="col col-3 flex-col">
            <h3 className='text-uppercase fw-bold'>imagine a place</h3>
            <p>
              <Image
                src={flag}
                alt="flag"
                width={20}
                height={12}
                className='me-2'
              />
              English, USA
            </p>
            <div>
              {footerIcons.map(item => (
                <Link
                  href={item.link}
                  key={item.id}
                  className='me-2'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="col col-9 text-white d-flex flex-wrap justify-content-between">
            {Object.keys(footerLinks).map(item => (
              <div key={item} className='d-flex flex-column'>
                <p className='text-head'>{item}</p>
                {footerLinks[item].map(subitem => (
                  <p key={subitem.id}>
                    <a href={subitem.link} className='text-white'>{subitem.title}</a>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <hr className="my-4" />
          <div className="col d-flex justify-content-between align-items-center">
            <Image
              src={discordLogo}
              alt="discord logo"
              width={150}
              height={50} />

            <button type="button" className='rounded-pill p-2 px-3'>Sign up</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
