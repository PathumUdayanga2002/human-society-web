/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", ],
        alata: ["Alata", ],

      },
      margin: {
        '8p': '8%',
      }
    },
  },
  plugins: [],
};
