/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:["./**/*{"],
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        back:"hsl(30, 38%, 92%)",
        cyan:"hsl(158, 36%, 37%)"
      },
      fontFamily:{
        heading:["Montserrat",'san-serif'],
        price:["Fraunces",'sans-serif']
      }

    },
  },
  plugins: [],
}
