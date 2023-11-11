import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          "primary": "#f9d72f",
          "secondary": "#e0a82e",
          "accent": "#dc8850",
          "neutral": "#18182f",
          "base-100": "#eef1f7",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
          body: {
            "background-color": "#eef1f7",
          }
        },
      },

      {
        darkTheme: {
          // "primary": "#d6a34a",
          // "secondary": "#dadd2e",
          // "accent": "#8fd7e8",
          // "neutral": "#271e34",
          // "base-100": "#362d4e",
          // "info": "#87a0d9",
          // "success": "#176454",
          // "warning": "#c39a04",
          // "error": "#fb523c",
          // body: {
          //   "background-color": "#362d4e",
          // },
          "primary": "#007BFF",
          "secondary": "#6C757D",
          "accent": "#28A745",
          "neutral": "#F8F9FA",
          "base-100": "#343A40",
          "info": "#17A2B8",
          "success": "#28A745",
          "warning": "#FFC107",
          "error": "#DC3545",
          body: {
            "background-color": "#343A40",
          },
        },
      },
    ],
  },
}
export default config
