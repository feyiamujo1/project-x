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
        'custom-blue-dark': '#00D3FF',
        'custom-ash': '#ACACAC',
        'custom-black': 'rgba(0, 0, 0, 0.5)',
        'custom-white': 'rgba(255, 255, 255, 0.5)',
        'notification-white': '#BABABA',
        'notification-green': '#52FF00',
        'notification-red': '#FF0000',
        'dark-bg':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6))',
      },
      boxShadow:{
        // 'custom': '0px 0px 5px 5px #e4e4e4',
        'custom-dark':'0px 2px 15px 5px rgba(0, 0, 0, 0.4)'
      },
      backgroundImage:{
        'hero-image':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/3.jpg")',
        'intro-image' : 'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/kate-trysh-Dnkr_lmdKi8-unsplash1.jpg")',
        'blog-image': 'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/pexels-luke-barky-2899737.jpg")',
        'contact-image': 'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/petr-machacek-BeVGrXEktIk-unsplash.jpg")',
        'login-image': 'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/chris-johnson-9HD_xuvymWo-unsplash.jpg")'
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
