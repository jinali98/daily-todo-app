import { Typography } from "@material-ui/core";
import React from "react";
import SummaryCardContainer from "../summaryCard-container/summaryCard-container";

const LandingContent = () => {
  return (
    <div>
      <Typography variant="h6" component="p" color="textPrimary">
        Here is a summary of all your tasks
      </Typography>
      <SummaryCardContainer />
    </div>
  );
};

export default LandingContent;
