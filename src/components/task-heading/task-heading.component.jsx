import React from "react";
import { Typography } from "@material-ui/core";

const TaskHeading = ({ children }) => {
  return (
    <Typography variant="h4" component="h1" color="primary">
      {children}
    </Typography>
  );
};

export default TaskHeading;
