import { Typography } from "@material-ui/core";
import React from "react";
import SummaryCardContainer from "../summaryCard-container/summaryCard-container";
import "./landing-content.styles.scss";
const LandingContent = () => {
  return (
    <div className="landing-content-container">
      <Typography
        className="summary-msg"
        variant="h6"
        component="p"
        color="textPrimary"
      >
        Here is a summary of all your tasks
      </Typography>
      <SummaryCardContainer />
    </div>
  );
};

export default LandingContent;
