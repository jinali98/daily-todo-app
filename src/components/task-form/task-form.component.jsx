import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { v4 } from "uuid";

import useTextFieldValidate from "../../effects/useTextFieldValidate";
import { updateTaskStart } from "../../redux/tasks/tasks.actions";
import { selectAllTasks } from "../../redux/tasks/tasks.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { formatDate } from "../../utils/formatDate";
import { AddTaskButton } from "../buttons/buttons.component";
import {
  DateField,
  DescriptionField,
  DurationField,
  TaskPriorTypesField,
  TitleField,
} from "../custom-input/custom-input.component";

import "./task-form.styles.scss";

const TaskForm = ({ currentUser, updateTaskStart, tasks }) => {
  const { id } = currentUser;

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

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (
      !titleIsValid ||
      !descriptionIsValid ||
      !importanceIsValid ||
      !durationIsValid ||
      !dateIsValid
    )
      return;

    const newTodo = {
      id: v4(),
      title,
      description,
      importance,
      date: formatDate(date),
      duration,
      status: "inprogress",
    };

    //to update the tasks
    updateTaskStart(id, [newTodo, ...tasks]);

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  tasks: selectAllTasks,
});

const mapDispatchToProps = (dispatch) => ({
  updateTaskStart: (id, tasks) => dispatch(updateTaskStart({ id, tasks })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
