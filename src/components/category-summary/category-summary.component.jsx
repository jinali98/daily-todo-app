import React from "react";
import { createStructuredSelector } from "reselect";
import SummaryCard from "../summary-card/summary-card";
import {
  selectAllTasks,
  selectCompletedTasks,
  selectPendingTasks,
  selectThisMonthTasks,
  selectTodayTasks,
  selectTomorowTasks,
} from "../../redux/tasks/tasks.selectors";
import { connect } from "react-redux";
import "./category-summary.styles.css";
const CategorySummary = ({
  allTasks,
  completedtasks,
  inprogressTasks,
  todayTasks,
  tomorowTasks,
  thisMonthTask,
}) => {
  return (
    <div className="category-summary-container">
      <SummaryCard title="All Tasks" number={allTasks.length} />
      <SummaryCard title="Completed Tasks" number={completedtasks.length} />
      <SummaryCard title="Pending Tasks" number={inprogressTasks.length} />
      <SummaryCard title="Today" number={todayTasks.length} />
      <SummaryCard title="Tomorrow" number={tomorowTasks.length} />
      <SummaryCard title="This Month" number={thisMonthTask.length} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  allTasks: selectAllTasks,
  completedtasks: selectCompletedTasks,
  inprogressTasks: selectPendingTasks,
  todayTasks: selectTodayTasks,
  tomorowTasks: selectTomorowTasks,
  thisMonthTask: selectThisMonthTasks,
});
export default connect(mapStateToProps)(CategorySummary);
