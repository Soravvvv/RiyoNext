import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '4.7xl': '4.7rem',
      },
      height: {
        '49vh': '49vh',
      },
      colors: {
        blue: {
          600: '#0033ff', // Replace with your color
        },
        orange: {
          500: '#ff6600', // Replace with your color
        },
      },
      spacing: {
        '4%': '4%',
        '7%': '7%',
      },
    },
    colors: {
      primary: {
        DEFAULT: "#000000",
        liteWhite: "#ff2fff",
        darkblue: "#0c4c78",
        grey: "#505050",
        orange: "#ee6c4d",
        white: "#FCFCFC",
        black: "#505050",
        lightblue: "#95cff6",
        bluefade: "rgb(211, 208, 249)",
        orangefade: "rgb(249, 211, 211)",
        blue: "#0c4c78",
        blue_tranparent: "rgba(230, 239, 251, 1)",
        blue_tranparentGetintouch: "rgb(12, 44, 120)",
        blue_tranparent_25: "rgba(230, 239, 251, 1)",
        orange_tranparent: "rgba(238, 108, 77, 0.25)",
        orange_second_tranparent: "rgba(238, 108, 77, 0.50)",
        white_transparent: "rgba(252, 252, 252, 0.25)",
        clr_qr: "rgba(80, 80, 80, 0.199)",
        text_clr: "#505050"
      },
      clipPath: {
        'custom-1': 'polygon(0 0, 100% 16%, 100% 86%, 0% 100%)',
        'custom-2': 'polygon(0 16%, 100% 0, 100% 100%, 0 88%)',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'scale(0.6) rotate(0deg)' },
          '50%': { transform: 'scale(1) rotate(460deg)' },
          '100%': { transform: 'scale(0.6) rotate(360deg)' },
        },
      },
      animation: {
        rotate: 'rotate 3s infinite',
      },
    }
    
  },
  plugins: [
 // You might need to install this plugin
  ],
};
export default config;
