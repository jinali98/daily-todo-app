import { Typography } from "@material-ui/core";
import React from "react";

const TaskHeading = ({ children }) => {
  return (
    <Typography variant="h4" component="h1" color="primary">
      {children}
    </Typography>
  );
};

export default TaskHeading;
