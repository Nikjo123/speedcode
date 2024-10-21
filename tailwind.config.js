/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace']
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: {
          600: '#dc2626', // Default Tailwind red-600
        },
      },
      borderRadius: {
        'full': '9999px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '2px white',
          color: 'black',
        },
        '.text-shadow-white': {
          'text-shadow': '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
        },
      };
      addUtilities(newUtilities);
    }
  ],
};
