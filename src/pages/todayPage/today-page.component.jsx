import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import LandingContentNoTasks from "../../components/landing-content-noTasks/landing-content-noTasks";

import { selectTodayTasks } from "../../redux/tasks/tasks.selectors";

const TodayPage = ({ todayTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>Today</TaskHeading>
      {todayTasks.length > 0 ? (
        <TaskContainer tasks={todayTasks} />
      ) : (
        <LandingContentNoTasks
          message="No Tasks for today!"
          buttonText="Check tomorrow"
          urlParam="/tomorow-task"
          today={true}
        />
      )}
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  todayTasks: selectTodayTasks,
});

export default connect(mapStateToProps)(TodayPage);
