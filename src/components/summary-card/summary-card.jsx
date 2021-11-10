import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import CustomCard from "../custom-card/custom-card.component";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
const SummaryCard = ({ title, number }) => {
  const classess = useStyles();
  return (
    <CustomCard>
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
