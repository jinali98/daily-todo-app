import React from "react";
import { NavLink } from "react-router-dom";

import { lengthCalculate } from "../../utils/lengthCalculate";

import "./custom-navLink.styles.scss";

const CustomNavLink = ({ taskType, linkUrl, navCategory, color }) => {
  return (
    <NavLink activeClassName="active" className="navlink-item" to={linkUrl}>
      <p>{navCategory}</p>
      <p className="taskcount-color" style={{ backgroundColor: color }}>
        {lengthCalculate(taskType)}
      </p>
    </NavLink>
  );
};

export default CustomNavLink;
