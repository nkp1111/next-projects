import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      lightTheme: {
        "primary": "#edaad9",
        "secondary": "#dbd402",
        "accent": "#8a9cd8",
        "neutral": "#2b2136",
        "base-100": "#e7eaf4",
        "info": "#4070f2",
        "success": "#51d692",
        "warning": "#f6d16a",
        "error": "#f4392f",
        body: {
          "background-color": "#e3e6e6",
        }
      },
    }],
  },
}
export default config
