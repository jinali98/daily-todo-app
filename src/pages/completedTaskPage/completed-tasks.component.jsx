import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import { selectCompletedTasks } from "../../redux/tasks/tasks.selectors";

const CompletedTasks = ({ completedTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>Completed Tasks</TaskHeading>
      <TaskContainer tasks={completedTasks} />
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  completedTasks: selectCompletedTasks,
});

export default connect(mapStateToProps)(CompletedTasks);
