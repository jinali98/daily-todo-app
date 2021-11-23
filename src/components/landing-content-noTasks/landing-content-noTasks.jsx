import { Typography } from "@material-ui/core";
import React from "react";
import { ReactComponent as LandingContentImage } from "../../assets/images/wfh_1.svg";
import { AddTaskButton } from "../buttons/buttons.component";

import "./landing-content-no-tasks.styles.css";
const LandingContentNoTasks = () => {
  return (
    <div className="landing-content-empty-wrapper">
      <Typography variant="body1" component="p" color="textPrimary">
        Seems like you haven't added any tasks
      </Typography>
      <div className="landing-content-empty-wrapper_image">
        <LandingContentImage />
        <AddTaskButton>Add a new task</AddTaskButton>
      </div>
    </div>
  );
};

export default LandingContentNoTasks;
