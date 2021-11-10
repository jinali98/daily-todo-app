import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { addNewTask } from "../../redux/tasks/tasks.actions";
import { AddTaskButton } from "../buttons/buttons.component";
import {
  DateField,
  DescriptionField,
  DurationField,
  TaskPriorTypesField,
  TitleField,
} from "../custom-input/custom-input.component";
import "./task-form.styles.css";

const TaskForm = ({ addTodo }) => {
  const [userInputs, setUserInput] = useState({
    title: "",
    description: "",
    date: "",
    importance: "",
    duration: "1",
  });

  const inputChangeHandler = (props) => (e) => {
    console.log(e.target.value);
    setUserInput({ ...userInputs, [props]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    console.log("submitted");
    e.preventDefault();
    console.log(userInputs);
    addTodo({
      id: Math.trunc(Math.random() * 500),
      ...userInputs,
      status: "inprogress",
    });
  };

  return (
    <form onSubmit={formSubmitHandler} className="add-task-form">
      <TitleField
        value={userInputs.title}
        onChange={inputChangeHandler("title")}
      />
      <DescriptionField
        value={userInputs.description}
        onChange={inputChangeHandler("description")}
      />
      <TaskPriorTypesField
        value={userInputs.importance}
        onChange={inputChangeHandler("importance")}
      />
      <DateField
        value={userInputs.date}
        onChange={inputChangeHandler("date")}
      />
      <DurationField
        value={userInputs.duration}
        onChange={inputChangeHandler("duration")}
      />

      <AddTaskButton type="submit">Add Task</AddTaskButton>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (item) => dispatch(addNewTask(item)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
