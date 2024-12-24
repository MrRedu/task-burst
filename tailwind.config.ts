import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // red: "#ff4155",
        'c-black': '#150001',
        'c-snow': '#F2F6FC',
        'c-dark': '#050505',
        'c-woodsmoke': '#131417',
        'c-disabled': '#8f8f8f',
        'c-space': '#2b3135',
        'c-silver': '#b1b1b1',
      },
    },
  },
  plugins: [],
}
export default config
