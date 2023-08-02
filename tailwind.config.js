/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      small: '360px',
      mobile: '480px',
      tablet: '768px',
      desktop: '1280px',
      onlyMobile: { max: '767.8px' },
      onlyTablet: { min: '768px', max: '1279.8px' },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        tablet: '32px',
      },
    },
    fontSize: {
      tiny: '12px',
      xs: '14px',
      base: '16px',
      sm: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '52px',
    },
    boxShadow: {
      primary:
        '2px -2px 10px 0px rgba(92, 46, 145, 0.05), 4px 4px 10px 0px rgba(92, 46, 145, 0.08)',
      secondary:
        '2px -2px 10px 0px rgba(255, 231, 0, 1), 4px 4px 10px 0px rgba(255, 231, 0, 1)',
      error: '2px -2px 10px 0px #d92d46, 4px 4px 10px 0px #d92d46',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        body: '#212428',
        primary: '#8e95a0',
        accent: '#ffe700',
        text: '#d0d5db',
        card: '#32363c',
        error: '#d92d46',
      },
    },
  },
  plugins: [],
};
