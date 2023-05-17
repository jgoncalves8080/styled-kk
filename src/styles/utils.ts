import { DefaultTheme, css } from "styled-components";

export const wrapperModifiers = {
  mini: (theme: DefaultTheme) => css`
    height: ${theme.spacings.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    height: ${theme.spacings.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  big: (theme: DefaultTheme) => css`
    height: ${theme.spacings.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: #f15a24;
    color: ${theme.colors.neutral.white};
    border: 0;
    &:hover {
      background-color: #ff7b39;
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: #1967d2;
    color: ${theme.colors.neutral.white};
    border: 0;
  `,
  marketplace: (theme: DefaultTheme) => css`
    background-color: #06c167;
    color: ${theme.colors.neutral.white};
    border: 0;
    &:hover {
      background-color: #34d286;
    }
  `,
  duo: (theme: DefaultTheme) => css`
    background-color: #e8f0fe;
    color: #1967d2;
    border: 0;
    &:hover {
      color: ${theme.colors.neutral.white};
      background-color: #1967d2;
    }
  `,
  default: (theme: DefaultTheme, outlined: boolean) => css`
    color: #414141;
    border: 1px solid #000;
    &:hover {
      border: 1px solid #1967d2;
    }
  `,
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.neutral.white};
    background-color: #ff3b39;
    border: 0;
    &:hover {
      background-color: #ff786a;
    }
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      & + span {
        margin-left: ${theme.spacings.xxxsmall};
      }
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  square: (theme: DefaultTheme) => css`
    width: 3.6rem;
    height: 3.6rem;
    padding: ${theme.spacings.xxsmall};

    &:hover {
      filter: brightness(90%);
      transition: filter 0.2s;
    }
  `,
  circle: (theme: DefaultTheme) => css`
    border-radius: 50%;
    padding: ${theme.spacings.xxsmall};
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  `,
  pill: (theme: DefaultTheme) => css`
    border-radius: 9999px;
  `,
  tile: (theme: DefaultTheme) => css`
    border-radius: 0;
  `,
};
