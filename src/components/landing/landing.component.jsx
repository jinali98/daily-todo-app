import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllTasks } from "../../redux/tasks/tasks.selectors";
import { selectCurrentUserDisplayName } from "../../redux/user/user.selector";
import LandingContentNoTasks from "../landing-content-noTasks/landing-content-noTasks";
import LandingContent from "../landing-content/landing-content";

const Landing = ({ allTasks, displayName }) => {
  return (
    <div style={{ margin: "45px" }}>
      <h1>{`Hey, ${displayName}`} </h1>
      {allTasks.length > 0 ? <LandingContent /> : <LandingContentNoTasks />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  allTasks: selectAllTasks,
  displayName: selectCurrentUserDisplayName,
});
export default connect(mapStateToProps)(Landing);
