"use client";

import handleThemeSwitch from '@/lib/handleThemeSwitch';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<string>("darkTheme");

  useEffect(() => {
    const localTheme = localStorage.getItem("portfolio-theme");
    const activeTheme = localTheme === "lightTheme" ? "lightTheme" : "darkTheme";
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', activeTheme);
    }
    setCurrentTheme(activeTheme);
  }, []);

  return (
    <button
      type="button"
      title="Toggle Theme"
      className="btn btn-ghost btn-circle btn-sm ml-2 text-base-content/80 hover:text-base-content"
      onClick={() => {
        handleThemeSwitch();
        setCurrentTheme((prev) => (prev === "darkTheme" ? "lightTheme" : "darkTheme"));
      }}
    >
      {currentTheme === "darkTheme" ? (
        <SunIcon className="w-5 h-5 text-amber-400" />
      ) : (
        <MoonIcon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  )
}
