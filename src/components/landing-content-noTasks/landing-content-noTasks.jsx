import React from "react";
import { ReactComponent as LandingContentImage } from "../../assets/images/wfh_1.svg";
import CustomButton from "../custom-button/custom-button.component";
import "./landing-content-no-tasks.styles.css";
const LandingContentNoTasks = () => {
  return (
    <div className="landing-content-empty-wrapper">
      <p>Seems like you have not added any tasks</p>
      <div className="landing-content-empty-wrapper_image">
        <LandingContentImage />
        <CustomButton>Add a new task</CustomButton>
      </div>
    </div>
  );
};

export default LandingContentNoTasks;
