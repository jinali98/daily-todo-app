import CategorySummary from "../category-summary/category-summary.component";
import ImportanceLevelSummary from "../importance-level-summary/importance-level-summary.component";

const SummaryCardContainer = () => {
  return (
    <div>
      <ImportanceLevelSummary />
      <CategorySummary />
    </div>
  );
};

export default SummaryCardContainer;
