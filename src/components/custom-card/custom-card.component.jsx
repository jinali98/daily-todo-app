import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    width: "350px",
  },
});

const CustomCard = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.root}>{children}</Card>;
};

export default CustomCard;
