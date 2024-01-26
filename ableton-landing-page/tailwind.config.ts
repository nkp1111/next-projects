import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // custom colors for project
      colors: {
        'custom-cream': '#fbffa7',
        'custom-sky-blue': '#b1c5ff',
        'custom-blue': '#0000ff',
        'custom-indigo': '#d5b3ff',
        'custom-tomato-red': '#ff764d',
        'custom-green': '#b6ffc0',
      },
    },
  },
  plugins: [],
};
export default config;
