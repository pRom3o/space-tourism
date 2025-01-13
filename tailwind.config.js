/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('home/background-home-desktop.jpg')",
        'home-mobile': "url('home/background-home-mobile.jpg')",
        destination: "url('destination/background-destination-desktop.jpg')",
        'destination-mobile': "url('destination/background-destination-mobile.jpg')",
        technology: "url('technology/background-technology-desktop.jpg')",
        'technology-mobile': "url('technology/background-technology-mobile.jpg')",
        crew: "url('crew/background-crew-desktop.jpg')",
        'crew-mobile': "url('crew/background-crew-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
