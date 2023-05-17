import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'big' | 'small' | 'mini'
  variant?: "primary" | "secondary" | "duo" | "marketplace" | "default" | "error"
  shape?: "pill" | "tile"
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  outlined?: boolean
  loading?: boolean
  disabled?: boolean
  circle?: boolean
  icon?: JSX.Element
} & ButtonTypes

export type IconProps = Pick<ButtonProps, 'iconPosition'>

export type WrapperProps = {
  hasIcon: boolean
} & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'variant' | 'circle' | 'outlined' | 'shape'
>
