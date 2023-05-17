import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    font-family: inherit;
  }

  html,
  body {
    min-height: 100%;
  }
  
  body {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-bottom: 1.875rem;
    ${({ theme }) => `
    font-family: ${theme.font.family};
    background: ${theme.colors.neutral.extraLightGrey};
    color: ${theme.colors.neutral.darkGrey};
    `}
  }

  html,
  body {
    min-height: 100%;
  }
  
  button:not(:disabled) {
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }
`
