export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'sparkle-fade': 'sparkle 700ms forwards',
      },
      keyframes: {
        sparkle: {
          '0%': {
            opacity: 1,
            transform: 'scale(0) rotate(0deg)',
          },
          '50%': {
            opacity: 0.7,
            transform: 'scale(1) rotate(180deg)',
          },
          '100%': {
            opacity: 0,
            transform: 'scale(0) rotate(360deg)',
          },
        }
      }
    }
  },
  plugins: [],
};
