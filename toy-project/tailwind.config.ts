import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
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
        default: ['SF_HailSnow'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        title01: '1.5rem',
        subTitle01: '1.2rem',
        subTitle02: '1.0rem',
      },
    },
  },
  plugins: [],
};
export default config;
