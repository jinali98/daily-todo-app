import React from "react";
import { connect } from "react-redux";
import useTextFieldValidate from "../../effects/useTextFieldValidate";
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
  const {
    value: title,
    reset: titleReset,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    isValid: titleIsValid,
    onBlur: titleBlurHandler,
  } = useTextFieldValidate();
  const {
    value: description,
    reset: descriptionReset,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    isValid: descriptionIsValid,
    onBlur: descriptionBlurHandler,
  } = useTextFieldValidate();
  const {
    value: importance,
    reset: importanceReset,
    hasError: importanceHasError,
    valueChangeHandler: importanceChangeHandler,
    isValid: importanceIsValid,
    onBlur: importanceBlurHandler,
  } = useTextFieldValidate();
  const {
    value: date,
    reset: dateReset,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    isValid: dateIsValid,
    onBlur: dateBlurHandler,
  } = useTextFieldValidate();
  const {
    value: duration,
    reset: durationReset,
    hasError: durationHasError,
    valueChangeHandler: durationChangeHandler,
    isValid: durationIsValid,
    onBlur: durationBlurHandler,
  } = useTextFieldValidate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !titleIsValid ||
      !descriptionIsValid ||
      !importanceIsValid ||
      !durationIsValid ||
      !dateIsValid
    )
      return;
    addTodo({
      id: Math.trunc(Math.random() * 500),
      title,
      description,
      importance,
      date,
      duration,
      status: "inprogress",
    });

    titleReset();
    descriptionReset();
    importanceReset();
    dateReset();
    durationReset();
  };

  return (
    <form onSubmit={formSubmitHandler} className="add-task-form">
      <TitleField
        value={title}
        onChange={titleChangeHandler}
        error={titleHasError}
        onBlur={titleBlurHandler}
      />
      <DescriptionField
        value={description}
        onChange={descriptionChangeHandler}
        error={descriptionHasError}
        onBlur={descriptionBlurHandler}
      />
      <TaskPriorTypesField
        value={importance}
        onChange={importanceChangeHandler}
        error={importanceHasError}
        onBlur={importanceBlurHandler}
      />
      <DateField
        value={date}
        onChange={dateChangeHandler}
        error={dateHasError}
        onBlur={dateBlurHandler}
      />
      <DurationField
        value={duration}
        onChange={durationChangeHandler}
        error={durationHasError}
        onBlur={durationBlurHandler}
      />

      <AddTaskButton type="submit">Add Task</AddTaskButton>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (item) => dispatch(addNewTask(item)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
