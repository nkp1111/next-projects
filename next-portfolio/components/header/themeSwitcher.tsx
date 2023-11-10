"use client";

import handleThemeSwitch from '@/lib/handleThemeSwitch';
import { SunIcon } from '@heroicons/react/20/solid';
import { MoonIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("lightTheme");
  useEffect(() => {
    // set base theme according to theme if provided otherwise lightTheme
    const localTheme = localStorage.getItem("portfolio-theme");
    if (localTheme) {
      const html: HTMLHtmlElement | null = document.querySelector('html')
      if (!html) return;
      html.setAttribute('data-theme', localTheme === "darkTheme" ? "darkTheme" : "lightTheme");
    }
  }, [])
  return (
    <div>
      <button type="button"
        title={"Theme Switcher"}
        className='mx-5'
        onClick={() => {
          handleThemeSwitch()
          setCurrentTheme((pre) => pre === "light" ? "dark" : "light");
        }}>
        {/* different icon shown base on current theme  */}
        {currentTheme === "light" ? (
          <SunIcon className='w-12 h-12 text-yellow-600 rounded-full bg-orange-100' />
        ) : (
          <MoonIcon className='w-12 h-12 rounded-full shadow-sm shadow-black' />
        )}
      </button>
    </div>
  )
}
