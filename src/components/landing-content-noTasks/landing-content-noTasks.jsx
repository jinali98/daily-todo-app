import React from "react";
import { ReactComponent as LandingContentImage } from "../../assets/images/wfh_1.svg";
const LandingContentNoTasks = () => {
  return (
    <div>
      <p>Seems like you have not added any tasks</p>
      <button>Add a new task</button>
      <div style={{ width: "550px" }}>
        <LandingContentImage />
      </div>
    </div>
  );
};

export default LandingContentNoTasks;
