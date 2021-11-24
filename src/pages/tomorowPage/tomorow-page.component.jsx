import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import { selectTomorowTasks } from "../../redux/tasks/tasks.selectors";

const TomorowPage = ({ tomorowTasks }) => {
  console.log(tomorowTasks);
  return (
    <TaskContainerWrapper>
      <TaskHeading>Tomorrow</TaskHeading>
      <TaskContainer tasks={tomorowTasks} />
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  tomorowTasks: selectTomorowTasks,
});

export default connect(mapStateToProps)(TomorowPage);
