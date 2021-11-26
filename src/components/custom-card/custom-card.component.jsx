import React from "react";

import { Card } from "@material-ui/core";
import "./custom-card.styles.scss";

const CustomCard = ({ children, style }) => {
  return (
    <Card className="custom-card" style={style}>
      {children}
    </Card>
  );
};

export default CustomCard;
