import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import { selectPendingTasks } from "../../redux/tasks/tasks.selectors";

const InProgress = ({ pendingTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>Inprogress Tasks</TaskHeading>
      <TaskContainer tasks={pendingTasks} />
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  pendingTasks: selectPendingTasks,
});

export default connect(mapStateToProps)(InProgress);
