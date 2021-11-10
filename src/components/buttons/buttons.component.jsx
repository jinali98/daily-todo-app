import {
  CustomButton,
  CustomIconButton,
} from "../custom-button/custom-button.component";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import EditIcon from "@material-ui/icons/Edit";

export const GoogleButton = ({
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
      variant="contained"
      color="primary"
      endIcon={<PersonIcon />}
      type="button"
      size="large"
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};
export const AddTaskButton = ({
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
      variant="contained"
      color="primary"
      endIcon={<EditIcon />}
      type={type}
      size="large"
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export const DeleteButton = ({ onClick }) => {
  return (
    <CustomIconButton
      onClick={onClick}
      aria-label="remove"
      variant="contained"
      color="primary"
    >
      <DeleteIcon />
    </CustomIconButton>
  );
};
export const UpdateStatusButton = ({ children, onClick }) => {
  return (
    <CustomButton
      onClick={onClick}
      aria-label="edit"
      variant="contained"
      color="primary"
      size="small"
    >
      {children}
    </CustomButton>
  );
};
