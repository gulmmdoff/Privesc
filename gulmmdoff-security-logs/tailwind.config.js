/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0a0a',
        'cyber-darker': '#050505',
        'cyber-gray': '#1a1a1a',
        'cyber-light': '#2a2a2a',
        'cyber-green': '#00ff41',
        'cyber-blue': '#00d9ff',
        'cyber-red': '#ff073a',
        'cyber-yellow': '#ffea00',
        'cyber-purple': '#8b5cf6'
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out',
        'fadeIn': 'fadeIn 0.8s ease-in-out',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
        'terminal-cursor': 'blink 1s infinite'
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 255, 65, 0.3)',
        'cyber-blue': '0 0 20px rgba(0, 217, 255, 0.3)',
        'terminal': 'inset 0 0 0 1px rgba(0, 255, 65, 0.3)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}