import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import ALL_TASKS from "../../data/allTask";
import { selectAllTasks } from "../../redux/tasks/tasks.selectors";

const AllTasks = ({ allTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>All Tasks</TaskHeading>
      <TaskContainer tasks={allTasks} />
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  allTasks: selectAllTasks,
});

export default connect(mapStateToProps)(AllTasks);
