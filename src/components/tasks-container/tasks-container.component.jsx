import React from "react";
import TaskCard from "../task-card/task-card.component";

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
