import React from "react";
import { createStructuredSelector } from "reselect";
import SummaryCard from "../summary-card/summary-card";
import {
  selectCriticalTasks,
  selectImportantTasks,
  selectLowTasks,
  selectNormaltasks,
} from "../../redux/tasks/tasks.selectors";
import { connect } from "react-redux";
import "./importance-level-summary.styles.css";
const ImportanceLevelSummary = ({
  normalTasks,
  lowTasks,
  importantTasks,
  criticalTasks,
}) => {
  return (
    <div className="importance-level-summary-container">
      <SummaryCard title="Critical Level Tasks" number={criticalTasks.length} />
      <SummaryCard
        title="Important Level Tasks"
        number={importantTasks.length}
      />
      <SummaryCard title="Normal Level Tasks" number={normalTasks.length} />
      <SummaryCard title="Low Level Tasks" number={lowTasks.length} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  normalTasks: selectNormaltasks,
  lowTasks: selectLowTasks,
  importantTasks: selectImportantTasks,
  criticalTasks: selectCriticalTasks,
});
export default connect(mapStateToProps)(ImportanceLevelSummary);
