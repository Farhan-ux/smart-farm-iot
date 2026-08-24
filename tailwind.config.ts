import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          bg: '#0d1b0e',
          card: '#142316',
          panel: '#1a2e1e',
          border: '#1f3322',
        },
        crop: {
          green: '#4ade80',
          yellow: '#facc15',
          orange: '#f59e0b',
          brown: '#a16207',
          blue: '#38bdf8',
          red: '#ef4444',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
