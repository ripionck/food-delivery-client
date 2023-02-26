/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF7629',
          secondary: '#EF9FBC',
          accent: '#CCCCCC',
          neutral: '#D9D4D4',
          'base-100': '#FFFFFF',
          info: '#FFF9F3',
          success: '#36D399',
          warning: '#FFD38A',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
