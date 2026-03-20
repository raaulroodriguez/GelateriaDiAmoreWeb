/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    // Badge clases dinámicas en ProductCard [ngClass]="badgeClase"
    'clasico', 'sorbete', 'fruta', 'cremoso', 'especial',
    'cafe', 'granizado', 'batido', 'smoothie', 'frappe', 'agua',
    // Hamburger animation classes usadas con [class.x]="signal()"
    'rotate-45', '-rotate-45', 'translate-y-2', '-translate-y-2',
    'opacity-0', 'rotate-180',
    // Scroll-top show class
    'show',
    // Filter active
    'active',
  ],
  theme: {
    extend: {
      colors: {
        vino: {
          DEFAULT: '#a3405b',
          dark: '#8a3450',
          light: '#b85572',
        },
        rosa: {
          DEFAULT: '#d3718b',
          light: '#e8b4cb',
        },
        dorado: {
          DEFAULT: '#cf991b',
          light: '#d4af37',
        },
        cream: {
          DEFAULT: '#fff9f5',
          2: '#f5f0e8',
          3: '#fff0e7',
          pure: '#f5fffa',
        },
        marron: '#6f4e37',
        gris: '#333333',
      },
      fontFamily: {
        display: ['Pacifico', 'cursive'],
        body: ['Comfortaa', 'sans-serif'],
      },
      boxShadow: {
        vino: '0 4px 20px rgba(163, 64, 91, 0.2)',
        'vino-md': '0 8px 25px rgba(163, 64, 91, 0.25)',
        'vino-lg': '0 12px 35px rgba(163, 64, 91, 0.3)',
        'vino-xl': '0 20px 50px rgba(163, 64, 91, 0.35)',
        'card': '0 5px 20px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        card: '1.25rem',
        'card-lg': '1.5rem',
        pill: '3rem',
      },
      backgroundImage: {
        'gradient-vino': 'linear-gradient(135deg, #a3405b, #d3718b)',
        'gradient-cream': 'linear-gradient(135deg, #fff9f5, #f5f0e8)',
      },
      minHeight: {
        hero: '60vh',
        'hero-lg': '100vh',
      },
    },
  },
  plugins: [],
};
