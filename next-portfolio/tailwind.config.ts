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
          "primary": "#0284c7",
          "primary-content": "#ffffff",
          "secondary": "#64748b",
          "secondary-content": "#ffffff",
          "accent": "#0d9488",
          "neutral": "#1e293b",
          "neutral-content": "#f8fafc",
          "base-100": "#ffffff",
          "base-200": "#f1f5f9",
          "base-300": "#e2e8f0",
          "base-content": "#0f172a",
          "info": "#0284c7",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
          body: {
            "background-color": "#f8fafc",
          }
        },
      },
      {
        darkTheme: {
          "primary": "#38bdf8",
          "primary-content": "#0f172a",
          "secondary": "#94a3b8",
          "secondary-content": "#0f172a",
          "accent": "#2dd4bf",
          "neutral": "#0f172a",
          "neutral-content": "#f8fafc",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "base-content": "#f8fafc",
          "info": "#38bdf8",
          "success": "#34d399",
          "warning": "#fbbf24",
          "error": "#f87171",
          body: {
            "background-color": "#090d16",
          },
        },
      },
    ],
  },
}
export default config
