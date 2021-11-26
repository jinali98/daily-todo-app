import { InputAdornment, MenuItem, TextField } from "@material-ui/core";
import { taskPriorLevels } from "../../constants/taskPriorityLevels";
import { convertToArray } from "../../utils/convertToAnArray";

export const DateField = ({ error, onChange, value, onBlur }) => {
  return (
    <TextField
      type="date"
      id="date"
      color="primary"
      variant="filled"
      onChange={onChange}
      error={error}
      value={value}
      onBlur={onBlur}
    />
  );
};
export const TitleField = ({ error, onChange, value, onBlur }) => {
  return (
    <TextField
      label="Task Title"
      type="text"
      id="task-title"
      color="primary"
      variant="filled"
      onChange={onChange}
      error={error}
      value={value}
      onBlur={onBlur}
    />
  );
};
export const DescriptionField = ({ error, onChange, value, onBlur }) => {
  return (
    <TextField
      label="Description"
      type="text"
      id="description"
      color="primary"
      variant="filled"
      onChange={onChange}
      error={error}
      value={value}
      onBlur={onBlur}
    />
  );
};
export const DurationField = ({ error, onChange, value, onBlur }) => {
  return (
    <TextField
      label="Duration"
      type="number"
      id="duration"
      color="primary"
      variant="filled"
      onChange={onChange}
      error={error}
      value={value}
      onBlur={onBlur}
      InputProps={
        ({ inputProps: { min: 1 } },
        {
          endAdornment: <InputAdornment position="end">Hr</InputAdornment>,
        })
      }
    />
  );
};

export const TaskPriorTypesField = ({ error, onChange, value, onBlur }) => {
  return (
    <TextField
      id="task-type"
      select
      label="Priority Level"
      value={value}
      onChange={onChange}
      variant="filled"
      error={error}
      onBlur={onBlur}
      color="primary"
    >
      {convertToArray(taskPriorLevels).map((option) => (
        <MenuItem key={option.type} value={option.type}>
          {option.type}
        </MenuItem>
      ))}
    </TextField>
  );
};
