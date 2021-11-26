import React from "react";

import TaskCard from "../task-card/task-card.component";

import "./tasks-container.styles.scss";

const TaskContainer = ({ tasks }) => {
  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskContainer;
