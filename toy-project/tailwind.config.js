module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {  colors: {
      main01: '#FCF9F2',
      sub01: '#b6bbc4',
      sub02: '#31304D',
      red: '#E66375',
      green: '#2B8D6A',
      grey01: '#CAC5CA',
      grey02: '#82868D',
      black: '#000000',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },},
  },
  plugins: [],
}