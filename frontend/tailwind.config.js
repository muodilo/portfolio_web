import daisyui from "daisyui";
import tailwindcssAnimate from "tailwindcss-animate";
import flowbitePlugin from 'flowbite/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui, tailwindcssAnimate,flowbitePlugin],
}

