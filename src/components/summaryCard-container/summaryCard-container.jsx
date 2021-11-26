import CategorySummary from "../category-summary/category-summary.component";
import ImportanceLevelSummary from "../importance-level-summary/importance-level-summary.component";

import "./summaryCard-container.styles.scss";

const SummaryCardContainer = () => {
  return (
    <div className="summary-card-container">
      <ImportanceLevelSummary />
      <CategorySummary />
    </div>
  );
};

export default SummaryCardContainer;
