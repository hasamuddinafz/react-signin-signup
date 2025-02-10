/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        // Define custom sizes for h1 through h6.
        // Format: [fontSize, { lineHeight, fontWeight, ... }]
        h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],   // 36px
        h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],  // 30px
        h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],       // 24px
        h4: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],    // 20px
        h5: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],    // 18px
        h6: ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }],        // 16px
      },
    },
  },
  plugins: [],
}

