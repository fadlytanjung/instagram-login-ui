import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "logo": "url('/logo.png')",
        "get-it": "url('/get-it.png')",
        "fb-logo": "url('/facebook.png')",
      },
      colors: {
        "stroke": "rgb(219, 219, 219)",
        "secondary": "rgb(250, 250, 250)",
        "primary-button": "rgb(0, 149, 246)",
        "secondary-text": "rgb(115, 115, 115)",
        "link": "rgb(0, 55, 107)",
      }
    },
  },
  plugins: [],
};
export default config;
