import React from "react";
import { Card } from "@material-ui/core";
import { useStyles } from "./custom-card.styles";

const CustomCard = ({ children }) => {
  const classes = useStyles();
  return <Card className={classes.root}>{children}</Card>;
};

export default CustomCard;
