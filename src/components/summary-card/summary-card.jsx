import React from "react";

const SummaryCard = ({ title, number }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h3>{number}</h3>
    </div>
  );
};

export default SummaryCard;
