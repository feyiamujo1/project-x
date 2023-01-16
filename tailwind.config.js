/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3ADDFF',
        'custom-black': 'rgba(0, 0, 0, 0.5)',
        'custom-white': 'rgba(255, 255, 255, 0.5)',
        'notification-white': '#BABABA',
        'notification-green': '#52FF00',
        'notification-red': '#FF0000',
        'dark-bg':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6))',
      },
      backgroundImage:{
        'hero-image':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/3.jpg")',
        // 'intro-image' : 'url("../src/assets/images/intro-pexels-rodnae-productions-5915208.jpg")'
      },
      transitionProperty: {
        'multiple': 'width, opacity',
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [require('flowbite/plugin')],
}
