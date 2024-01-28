import React from 'react'
import { countryName, footerEdu, footerNav } from './footer-data'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './footer-icons'
import Logo from '../general/logo'




const iconMap = {
  "facebook": FacebookIcon,
  "twitter": TwitterIcon,
  "youtube": YoutubeIcon,
  "instagram": InstagramIcon,
}

export default function Footer() {
  return (
    <footer className='md:mt-36 mt-20 border-t-2 border-gray-200 md:py-32 py-10 md:px-24 sm:px-16 px-4'>
      <div className='font-medium md:text-6xl text-4xl md:mb-16 mb-4'>Ableton</div>
      <div className="flex md:gap-20 gap-10 flex-wrap justify-between">
        <div>
          <ul>
            {footerNav.map(item => (
              <li key={item.id} className='mb-2'>
                <a href={item.link} className='text-black font-medium'>{item.title} &#8250;</a>
              </li>
            ))}
          </ul>
          <div className='flex gap-2 mt-3 cursor-pointer'>
            {Object.keys(iconMap).map(item => (
              <div key={item} className={`w-10 h-10 ${item === "facebook" ? "bg-blue-500" : item === "youtube" ? "bg-red-500" : item === "instagram" ? "bg-orange-500" : "bg-sky-500"}`}>
                {item === "facebook" ? <FacebookIcon /> : item === "youtube" ? <YoutubeIcon /> : item === "instagram" ? <InstagramIcon /> : <TwitterIcon />}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className='font-semibold mb-3 text-lg'>Education</h3>
          <ul>
            {footerEdu.map(item => (
              <li key={item.id} className='mb-2'>
                <a href={item.link} className='text-black font-medium'>{item.title} &#8250;</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='lg:max-w-[40%]'>
          <h3 className='font-semibold mb-3 text-lg'>Sign up to our newsletter</h3>
          <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
          <form className='mt-3 flex w-full justify-between items-center'>
            <input type="text" name="email" title="email" placeholder='Email Address' className='h-auto py-2 px-3 flex-1 bg-stone-50' />
            <button className='bg-custom-blue text-white py-2 px-6'>Sign Up</button>
          </form>
        </div>

        <div>
          <h3 className='font-semibold mb-3 text-lg'>Community</h3>
          <ul>
            {footerEdu.map(item => (
              <li key={item.id} className='mb-2'>
                <a href={item.link} className='text-black font-medium'>{item.title} &#8250;</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='md:flex-1'>
          <h3 className='font-semibold mb-3 text-lg'>Language and Location</h3>
          <div className='flex gap-3'>
            <select name="language" id="language-chooser" defaultValue={"English"} title="Language"
              className='rounded-none bg-stone-50 px-3 py-1'>
              <option value="en" selected >English</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
              <option value="ja">日本語</option>
              <option value="zh-cn">简体中文</option>
              <option value="es">Español</option>
            </select>

            <select name="country" id="country-chooser" defaultValue={"India"} title="country"
              className='rounded-none bg-stone-50 px-3 py-1 w-44'>
              {countryName.map((item, ind) => (
                <option key={item} value={item} selected={item === "India"}>{item}</option>
              ))}
            </select>
          </div>

        </div>


        <div className='flex w-full justify-between md:flex-row flex-col gap-5 items-center'>
          <div className='flex gap-3 items-center flex-wrap justify-between'>
            {["Contact Us", "Press Resources", "Legal Info", "Privacy Policy", "Cookie Settings", "Imprint"].map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className='flex items-center gap-3'>
            <span>Made in Berlin</span>
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  )
}


