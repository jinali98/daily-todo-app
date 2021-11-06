import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTodayTasks } from "../../redux/tasks/tasks.selectors";
import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";

const TodayPage = ({ todayTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>Today</TaskHeading>
      <TaskContainer tasks={todayTasks} />
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  todayTasks: selectTodayTasks,
});

export default connect(mapStateToProps)(TodayPage);
