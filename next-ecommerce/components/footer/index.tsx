import React from 'react'

const footerData: { [key: string]: any[] } = {
  Services: [
    { id: 1, link: "#", title: "Branding" },
    { id: 2, link: "#", title: "Advertising" },
    { id: 3, link: "#", title: "Design" },
    { id: 4, link: "#", title: "Marketing" },
  ],
  Company: [
    { id: 1, link: "#", title: "About Us" },
    { id: 2, link: "#", title: "Contact" },
    { id: 3, link: "#", title: "Jobs" },
    { id: 4, link: "#", title: "Press Kit" },
  ],
  Legal: [
    { id: 1, link: "#", title: "Terms of use" },
    { id: 2, link: "#", title: "Privacy Policy" },
    { id: 3, link: "#", title: "Cookie Policy" },
  ],
}

export default function Footer() {
  return (
    <footer className='bg-neutral p-10 text-neutral-content'>
      <div className="footer max-w-7xl m-auto">
        {Object.keys(footerData).map(key => {
          const items = footerData[key];
          return <div key={key}>
            <span className='footer-title'>{key}</span>

            {items.map(item => {
              const { id, link, title } = item;
              return <a key={id} href={link} className='link link-hover'>{title}</a>
            })}
          </div>
        })}
      </div>
    </footer>
  )
}
