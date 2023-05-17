export const theme = {
  borderRadius: {
    button: '0.25rem',
    card: '0.8rem'
  },
  border: {
    solid: (color: string) => `0.1rem solid ${color}`
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: {
      orange: '#f58031'
    },
    secondary: {
      green: '#008014',
      lightGreen: '#94d376',
      red: '#e74c3c',
      darkBlue: '#1d2236',
      blue: '#3498db'
    },
    neutral: {
      black: '#111820',
      darkGrey: '#696969',
      grey: '#ccc',
      lightGrey: '#efefef',
      extraLightGrey: '#f8f8f8',
      white: '#fff'
    },
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '1s ease-in-out'
  }
}
