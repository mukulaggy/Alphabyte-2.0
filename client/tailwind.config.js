export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        'spin-slow': 'spin 3s linear infinite',
        'sparkle-fade': 'sparkle 700ms forwards',
        
      },
      keyframes: {
        
        sparkle: {
          marquee: {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-50%)" },
          },
         

        }
        
      }
    }
  },
  plugins: [],
};
