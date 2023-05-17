import styled, { css, DefaultTheme } from "styled-components";
import { wrapperModifiers } from "@/styles/utils";
import { IconProps, WrapperProps } from "./types";
import { typography } from "@/styles";

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme, size, fullWidth, hasIcon, disabled, variant, circle, outlined, shape
  }) => css`
    ${typography.Buttons.Button1}

    ${!!size && wrapperModifiers[size](theme)};
    ${!!variant && wrapperModifiers[variant](theme, outlined as boolean)};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${circle ? wrapperModifiers.circle(theme) : `border-radius: ${theme.spacings.xxxsmall};`};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled()};
    ${!!shape && wrapperModifiers[shape](theme)};
  `}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled.div<IconProps>`
  display: flex;
  order: ${({ iconPosition }) => (iconPosition === "right" ? 1 : 0)};
`;
