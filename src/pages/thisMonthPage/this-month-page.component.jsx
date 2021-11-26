import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import LandingContentNoTasks from "../../components/landing-content-noTasks/landing-content-noTasks";

import { selectThisMonthTasks } from "../../redux/tasks/tasks.selectors";

const ThisMonthPage = ({ monthTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>This Month</TaskHeading>
      {monthTasks.length > 0 ? (
        <TaskContainer tasks={monthTasks} />
      ) : (
        <LandingContentNoTasks
          message="No more tasks for this month!"
          buttonText="Add a new task"
          urlParam="/add-new-task"
          month={true}
        />
      )}
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  monthTasks: selectThisMonthTasks,
});

export default connect(mapStateToProps)(ThisMonthPage);
