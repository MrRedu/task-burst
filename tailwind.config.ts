import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#ff4155",
        black: "#150001",
        "bg-primary": "#050505",
        "bg-secondary": "#131417",
        "color-disabled": "#8f8f8f",
      },
    },
  },
  plugins: [],
};
export default config;
