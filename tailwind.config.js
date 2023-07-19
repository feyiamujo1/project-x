/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3ADDFF',
        'custom-blue-dark': '#00D3FF',
        'custom-blue-light': '#e8edfb',
        'custom-ash': '#ACACAC',
        'custom-black': 'rgba(0, 0, 0, 0.5)',
        'custom-white': 'rgba(255, 255, 255, 0.5)',
        'notification-white': '#BABABA',
        'notification-green': '#52FF00',
        'notification-red': '#FF0000',
        'dashboard-blue': '#3460dc',
        'custom-brown': '#6B7280',
        'custom-darker-blue': '#0c1f56',
        'dark-bg':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6))','dark-bg':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6))',
        "custom-dark": "rgba(0, 13, 26, 0.2)",
        "custom-dark-image": "rgba(0, 84, 102, 0.4)"
      },
      boxShadow:{
        // 'custom': '0 0 15px -9px rgb(0 0 0 / 75%)',
        'custom-dark':'0px 2px 15px 5px rgba(0, 0, 0, 0.4)'
      },
      backgroundImage:{
        'hero-image':'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/3.jpg")',
        'intro-image' : 'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/kate-trysh-Dnkr_lmdKi8-unsplash1.jpg")',
        'blog-image': 'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/pexels-luke-barky-2899737.jpg")',
        'contact-image': 'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.6)), url("../src/assets/images/petr-machacek-BeVGrXEktIk-unsplash.jpg")',
        'login-image': 'linear-gradient(rgba(0, 13, 26, 0.6),rgba(0, 13, 26, 0.8)), url("../src/assets/images/bg-login.jpg")',
        'holdings-image': 'linear-gradient(rgba(0, 13, 26, 0.65),rgba(0, 13, 26, 0.65)), url("../src/assets/images/marc-olivier-jodoin-eowVIQ2dIns-unsplash.jpg")',
      },
      transitionProperty: {
        'multiple': 'width, opacity',
      }
    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
