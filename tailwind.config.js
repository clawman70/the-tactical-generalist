/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1E1E1E',
        gunmetal: '#2A2A2A',
        slate: '#3D3D3D',
        'bronze-dark': '#8B6914',
        bronze: '#B8860B',
        'bronze-light': '#D4A84B',
        gold: '#C9A227',
        'gold-light': '#E8D5A3',
        copper: '#B87333',
        'copper-light': '#CD8C52',
        'warm-white': '#F5F3EF',
        cream: '#EDE8E0',
        stone: '#9A9590',
        ash: '#6B6B6B',
        success: '#5C7C5C',
        warning: '#B8860B',
        error: '#A85454',
        info: '#5A7A8A',
        // keep old aliases for quick fallback while we transition App.jsx, but point to new colors
        background: '#F5F3EF',
        primary: '#EDE8E0',
        accent: '#B8860B',
        dark: '#1E1E1E',
      },
      fontFamily: {
        display: ['"Libre Baskerville"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        // Old aliases
        heading: ['"Libre Baskerville"', 'Georgia', 'serif'],
        drama: ['"Libre Baskerville"', 'Georgia', 'serif'],
        data: ['"JetBrains Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
