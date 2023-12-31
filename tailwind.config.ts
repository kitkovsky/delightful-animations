import type { Config } from 'tailwindcss'

export const tailwindColors = {
  white: '#d1d0c5',
  gray40: '#646669',
  gray60: '#323437',
  gray80: '#2c2e31',
  black: '#232427',
  orange: '#e2b514',
  'dark-orange': '#bc9710',
  green: '#98971a',
  aqua: '#689d6a',
  red: '#cc241d',
} as const

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: tailwindColors,
    fontFamily: {
      mono: ['var(--font-geist-mono)'],
    },
  },
  plugins: [],
}

export default config
