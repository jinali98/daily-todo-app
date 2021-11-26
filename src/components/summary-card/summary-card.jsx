import React from "react";
import { CardContent, Typography } from "@material-ui/core";

import { taskPriorLevels } from "../../constants/taskPriorityLevels";
import { taskTypes } from "../../constants/taskTypes.js";
import CustomCard from "../custom-card/custom-card.component";

import { useStyles } from "./summary-card.styles";
import "./summary-card.styles.scss";

const SummaryCard = ({ title, number, type, importaceLevel }) => {
  const classess = useStyles();
  let style = importaceLevel
    ? {
        border: `5px solid ${taskPriorLevels[type].color}`,
      }
    : {
        border: `5px solid ${taskTypes[type].color}`,
      };
  // style = category &&

  return (
    <CustomCard className={classess.summaryCardWrapper} style={style}>
      <CardContent className={classess.root}>
        <Typography variant="h6" component="h2" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="h4" component="h2" color="textPrimary">
          {number}
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

export default SummaryCard;
