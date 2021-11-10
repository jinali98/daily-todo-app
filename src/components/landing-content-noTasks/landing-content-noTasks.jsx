import React from "react";
import { ReactComponent as LandingContentImage } from "../../assets/images/wfh_1.svg";
import { AddTaskButton } from "../buttons/buttons.component";

import "./landing-content-no-tasks.styles.css";
const LandingContentNoTasks = () => {
  return (
    <div className="landing-content-empty-wrapper">
      <p>Seems like you have not added any tasks</p>
      <div className="landing-content-empty-wrapper_image">
        <LandingContentImage />
        <AddTaskButton>Add a new task</AddTaskButton>
      </div>
    </div>
  );
};

export default LandingContentNoTasks;
