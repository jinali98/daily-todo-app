import React from "react";

import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

export const CustomButton = ({
  children,
  type,
  variant,
  color,
  endIcon,
  size,
  onClick,
  ...otherProps
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      endIcon={endIcon}
      type={type}
      {...otherProps}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const CustomIconButton = ({
  children,
  type,
  variant,
  color,
  ariaLabel,
  onClick,
  ...otherProps
}) => {
  return (
    <IconButton
      aria-label={ariaLabel}
      variant={variant}
      color={color}
      type={type}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </IconButton>
  );
};
