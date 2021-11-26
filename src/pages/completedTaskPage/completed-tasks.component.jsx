import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import LandingContentNoTasks from "../../components/landing-content-noTasks/landing-content-noTasks";

import { selectCompletedTasks } from "../../redux/tasks/tasks.selectors";

const CompletedTasks = ({ completedTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>Completed Tasks</TaskHeading>
      {completedTasks.length > 0 ? (
        <TaskContainer tasks={completedTasks} />
      ) : (
        <LandingContentNoTasks
          message="Opps! you haven't completed any task"
          buttonText="View pending tasks"
          urlParam="/inprogress-tasks"
          completed={true}
        />
      )}
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  completedTasks: selectCompletedTasks,
});

export default connect(mapStateToProps)(CompletedTasks);
