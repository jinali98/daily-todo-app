import React from "react";
import { Card } from "@material-ui/core";
import { useStyles } from "./custom-card.styles";
import "./custom-card.styles.css";
const CustomCard = ({ children, style }) => {
  const classes = useStyles();
  return (
    <Card className="custom-card" style={style}>
      {children}
    </Card>
  );
};

export default CustomCard;
