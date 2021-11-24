import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectThisMonthTasks } from "../../redux/tasks/tasks.selectors";
import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";

const ThisMonthPage = ({ monthTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>This Month</TaskHeading>
      <TaskContainer tasks={monthTasks} />
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  monthTasks: selectThisMonthTasks,
});

export default connect(mapStateToProps)(ThisMonthPage);
