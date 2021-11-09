import CustomButton from "../custom-button/custom-button.component";

export const generalButton = ({
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
    <CustomButton
      variant="outlined"
      color="primary"
      endIcon={endIcon}
      type={type}
      {...otherProps}
      size={size}
      onClick={onClick}
    ></CustomButton>
  );
};
