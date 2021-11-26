import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAllTasks } from "../../redux/tasks/tasks.selectors";
import { selectCurrentUserDisplayName } from "../../redux/user/user.selector";

import LandingContentNoTasks from "../landing-content-noTasks/landing-content-noTasks";
import LandingContent from "../landing-content/landing-content";
import TaskHeading from "../task-heading/task-heading.component";

import "./landing.styles.scss";

const Landing = ({ allTasks, displayName }) => {
  return (
    <div className="landing-wrapper" style={{ margin: "45px" }}>
      <TaskHeading>{`Hey, ${displayName}`} </TaskHeading>
      {allTasks.length > 0 ? (
        <LandingContent />
      ) : (
        <LandingContentNoTasks
          message="seems like you haven't added any tasks"
          buttonText="Add a new task"
          urlParam="/add-new-task"
          home={true}
        />
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  allTasks: selectAllTasks,
  displayName: selectCurrentUserDisplayName,
});
export default connect(mapStateToProps)(Landing);
