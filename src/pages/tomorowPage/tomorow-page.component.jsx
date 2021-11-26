import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import LandingContentNoTasks from "../../components/landing-content-noTasks/landing-content-noTasks";

import { selectTomorowTasks } from "../../redux/tasks/tasks.selectors";

const TomorowPage = ({ tomorowTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>Tomorrow</TaskHeading>
      {tomorowTasks.length > 0 ? (
        <TaskContainer tasks={tomorowTasks} />
      ) : (
        <LandingContentNoTasks
          message="Seems like you are free tomorrow!"
          buttonText="view this month tasks"
          urlParam="/this-month-task"
          tomorrow={true}
        />
      )}
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  tomorowTasks: selectTomorowTasks,
});

export default connect(mapStateToProps)(TomorowPage);
