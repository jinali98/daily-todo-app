import React from "react";

import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskForm from "../../components/task-form/task-form.component";
import TaskHeading from "../../components/task-heading/task-heading.component";

const NewTask = () => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>Add a new Task</TaskHeading>
      <TaskForm />
    </TaskContainerWrapper>
  );
};

export default NewTask;
