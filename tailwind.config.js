/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'black': "#000000",
      'violet-light': "#5A189A",
      'gray-dark': '#5C5C5C'
    },
    screens: {
      xxl: { max: "1900px" },
      xl: { min: "1095px" },
			lg: { max: "1095px" },
			md: { max: "767px" },
			sm: { max: "639px" },
			xs: { max: "550px" },
		},
  },
  plugins: [],
}
