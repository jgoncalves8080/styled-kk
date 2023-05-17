import React, { forwardRef, useRef  } from "react";
import { ButtonProps, WrapperProps } from "./types";

import * as S from "./styles";

const Button = forwardRef<WrapperProps, ButtonProps>(
  (
    {
      children,
      icon,
      shape,
      size = "small",
      fullWidth = false,
      disabled = false,
      loading = false,
      circle = false,
      variant = "primary",
      outlined = true,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    return (
      <S.Wrapper
        size={size}
        fullWidth={fullWidth}
        hasIcon={!!icon}
        shape={shape}
        disabled={disabled || loading}
        outlined={outlined}
        variant={variant}
        circle={circle}
        {...props}
      >
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        {!!children && <>{children}</>}
      </S.Wrapper>
    );
  }
);

Button.displayName = "Button";

export { Button };
