import React from "react";
import "./task-container.styles.css";
const TaskContainerWrapper = ({ children }) => {
  return <div className="main-task-container">{children}</div>;
};

export default TaskContainerWrapper;
