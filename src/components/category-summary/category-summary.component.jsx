import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import SummaryCard from "../summary-card/summary-card";
import {
  selectAllTasks,
  selectCompletedTasks,
  selectPendingTasks,
  selectThisMonthTasks,
  selectTodayTasks,
  selectTomorowTasks,
} from "../../redux/tasks/tasks.selectors";

import "./category-summary.styles.scss";

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
      <SummaryCard title="All Tasks" number={allTasks.length} type="all" />
      <SummaryCard
        title="Completed Tasks"
        number={completedtasks.length}
        type="completed"
      />
      <SummaryCard
        title="Pending Tasks"
        number={inprogressTasks.length}
        type="inprogress"
      />
      <SummaryCard title="Today" number={todayTasks.length} type="today" />
      <SummaryCard
        title="Tomorrow"
        number={tomorowTasks.length}
        type="tomorrow"
      />
      <SummaryCard
        title="This Month"
        number={thisMonthTask.length}
        type="month"
      />
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
