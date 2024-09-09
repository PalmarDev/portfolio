/** @type {import('tailwindcss').Config} */
import * as plugin from "tailwindcss-animated";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Solid-Mono"],
      },
    },
  },
  plugins: [plugin.default],
};
