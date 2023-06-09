/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
        satisfy: ['var(--font-satisfy)'],
        berkshireSwash: ['var(--font-berkshire-swash)'],
        sofia: ['var(--font-sofia)'],
        rancho: ['var(--font-rancho)']
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
