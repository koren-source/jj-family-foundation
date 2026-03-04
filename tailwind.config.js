/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown-dark':  '#5C3D2E',
        'brown-mid':   '#8B5E3C',
        'terracotta':  '#C9956C',
        'cream':       '#F2E8D9',
        'cream-light': '#FAF5EE',
        'divider':     '#D4B896',
        'text-dark':   '#2C1A0E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
