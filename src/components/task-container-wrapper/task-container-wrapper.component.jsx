import React from "react";

import "./task-container.styles.scss";

const TaskContainerWrapper = ({ children }) => {
  return <div className="main-task-container">{children}</div>;
};

export default TaskContainerWrapper;
