import React from "react";
import { NavLink } from "react-router-dom";
import { lengthCalculate } from "../../utils/lengthCalculate";

const CustomNavLink = ({ taskType, linkUrl, navCategory }) => {
  return (
    <NavLink activeClassName="active" className="navlink-item" to={linkUrl}>
      {`${navCategory} ${lengthCalculate(taskType)}`}
    </NavLink>
  );
};

export default CustomNavLink;
