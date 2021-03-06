module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#212a2f',
      white: '#fff',
      grey: '#d3d4d5',
      black: '#000',
      lightGrey: '#f8f7f5',
      red: '#dc2626',
    },
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '0.875rem',
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '3rem',
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontFamily: {},
    extend: {
      spacing: {
        4.5: '1.125rem',
        7.5: '1.875rem',
        16.5: '4.5rem',
      },
    },
  },
  plugins: [],
}
