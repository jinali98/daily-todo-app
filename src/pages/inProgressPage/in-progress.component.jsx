import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import LandingContentNoTasks from "../../components/landing-content-noTasks/landing-content-noTasks";

import { selectPendingTasks } from "../../redux/tasks/tasks.selectors";

const InProgress = ({ pendingTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>Inprogress Tasks</TaskHeading>
      {pendingTasks.length > 0 ? (
        <TaskContainer tasks={pendingTasks} />
      ) : (
        <LandingContentNoTasks
          message="WOW! you don't have anymore tasks to complete"
          buttonText="Add a new task"
          urlParam="/add-new-task"
          pending={true}
        />
      )}
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  pendingTasks: selectPendingTasks,
});

export default connect(mapStateToProps)(InProgress);
