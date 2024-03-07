import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        sidebar: 'var(--sidebar)',
        header: 'var(--header)',
      },
      boxShadow: {
        header: '0px 10px 30px 0px rgba(82, 63, 105, 0.05)',
      },
      colors: {
        background: 'hsl(var(--background))',
      },
    },
    animation: {
      'spin-quick': 'spin 0.5s ease-in-out infinite',
    },
  },
  plugins: [],
};
export default config;
