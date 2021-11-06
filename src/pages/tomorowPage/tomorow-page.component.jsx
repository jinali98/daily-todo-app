import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectTomorowTasks } from "../../redux/tasks/tasks.selectors";

const TomorowPage = ({ tomorowTasks }) => {
  console.log(tomorowTasks);
  return <div>tomorow</div>;
};

const mapStateToProps = createStructuredSelector({
  tomorowTasks: selectTomorowTasks,
});

export default connect(mapStateToProps)(TomorowPage);
