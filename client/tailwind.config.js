import daisyUIThemes from 'daisyui/src/theming/themes'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    thrmes: [
      "dark",
      {
        black: {
          ...daisyUIThemes["black"],
          primary: "rgb(29,155,240)",
          secondary: "rgb(24,24,24)"
        }
      }
    ]
  }
}