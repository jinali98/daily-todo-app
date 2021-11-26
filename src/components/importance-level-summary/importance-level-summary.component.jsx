import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import SummaryCard from "../summary-card/summary-card";
import {
  selectCriticalTasks,
  selectImportantTasks,
  selectLowTasks,
  selectNormaltasks,
} from "../../redux/tasks/tasks.selectors";

import "./importance-level-summary.styles.scss";

const ImportanceLevelSummary = ({
  normalTasks,
  lowTasks,
  importantTasks,
  criticalTasks,
}) => {
  return (
    <div className="importance-level-summary-container">
      <SummaryCard
        title="Critical Level Tasks"
        number={criticalTasks.length}
        type="Critical"
        importaceLevel={true}
      />
      <SummaryCard
        title="Important Level Tasks"
        number={importantTasks.length}
        type="Important"
        importaceLevel={true}
      />
      <SummaryCard
        title="Normal Level Tasks"
        number={normalTasks.length}
        type="Normal"
        importaceLevel={true}
      />
      <SummaryCard
        title="Low Level Tasks"
        number={lowTasks.length}
        type="Low"
        importaceLevel={true}
      />
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
