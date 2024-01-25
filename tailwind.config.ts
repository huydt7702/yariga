import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grayf4: '#f4f4f4',
        grayfc: '#fcfcfc',
        primaryText: '#11142d',
        primary: '#475be8',
        gray80: '#808191',
      },
      spacing: {
        c10: '10px',
      },
    },
  },
  plugins: [],
};
export default config;
