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
        "primary": "#e89912",
        "secondary": "#76ad1f",
        "accent": "#d7f95c",
        "neutral": "#352537",
        "base-100": "#fcfcfd",
        "info": "#84baf0",
        "success": "#3fe484",
        "warning": "#c26b14",
        "error": "#f33f2b",
        body: {
          "background-color": "#e3e6e6",
        }
      },
    }],
  },
}
export default config
