/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Banner_Image': "url('/public/banner_image.png')",
      }
    },
    
  },
  plugins: [],
}

