import React from "react";
import { connect } from "react-redux";
import { markAsCompleted, removeTask } from "../../redux/tasks/tasks.actions";

const TaskCard = ({ task, updateStatus, removeTask }) => {
  const { title, description, date, duration, importance, status } = task;

  const updateTaskStatus = () => {
    updateStatus(task);
  };

  const removeTaskHandler = () => {
    removeTask(task);
  };

  return (
    <div className="task-card">
      <button onClick={removeTaskHandler}>remove</button>
      <button onClick={updateTaskStatus}>
        Mark as{status === "completed" ? " Pending" : " Completed"}
      </button>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="additional-information">
        <p>{date}</p>
        <p>{duration}</p>
        <p>{importance}</p>
        <p>{status}</p>
      </div>
      <hr />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateStatus: (item) => dispatch(markAsCompleted(item)),
  removeTask: (item) => dispatch(removeTask(item)),
});

export default connect(null, mapDispatchToProps)(TaskCard);
