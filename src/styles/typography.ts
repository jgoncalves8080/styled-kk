import { css } from 'styled-components'

export const typography = {
  Buttons: {
    Button1: css`
      text-decoration: none;
      background-color: transparent;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: ${({ theme }) => theme.font.sizes.small};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: ${({ theme }) => theme.spacings.small};
      transition: ease-in 0.3s;
      cursor: pointer;
    `
  }
}
