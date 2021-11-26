import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import TaskContainer from "../../components/tasks-container/tasks-container.component";
import LandingContentNoTasks from "../../components/landing-content-noTasks/landing-content-noTasks";

import { selectAllTasks } from "../../redux/tasks/tasks.selectors";

const AllTasks = ({ allTasks }) => {
  return (
    <TaskContainerWrapper>
      <TaskHeading>All Tasks</TaskHeading>
      {allTasks.length > 0 ? (
        <TaskContainer tasks={allTasks} />
      ) : (
        <LandingContentNoTasks
          message="Opps! you haven't added any task"
          buttonText="Add a new task"
          urlParam="/add-new-task"
          all={true}
        />
      )}
    </TaskContainerWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  allTasks: selectAllTasks,
});

export default connect(mapStateToProps)(AllTasks);
