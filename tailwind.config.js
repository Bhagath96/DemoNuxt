module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@nuxtjs/tailwindcss'),
    require('@tailwindcss/forms'),
    ]
  }
