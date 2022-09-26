module.exports = {
  content: ['./public/**/*.{html,js}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        // 15: '3.75rem'
      },
      spacing: {
        13: '3.25rem'
      },
      fontFamily: {
        inter:['Inter']
      },
      colors: {
        wpu: '#bada55',
        wpudua: '#c0ffee'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%' : { transform: 'rotate (-3deg)' },
          '50%': { transform: 'rotate(3deg)'}
        }
      }
    },
  },
  plugins: [],
}
