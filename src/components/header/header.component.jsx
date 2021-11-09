import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import {
  selectAllTasks,
  selectCompletedTasks,
  selectPendingTasks,
  selectThisMonthTasks,
  selectTodayTasks,
  selectTomorowTasks,
} from "../../redux/tasks/tasks.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import CustomNavLink from "../custom-navLink/custom-navLink.component";

import "./header.styles.css";

const Header = ({
  currentUser,
  allTasks,
  completedTasks,
  inprogressTasks,
  todayTasks,
  tmrwTasks,
  thisMonthTasks,
}) => {
  return (
    <div className="header-container">
      <Link to="/">
        <p className="logo">DAILY</p>
      </Link>
      {currentUser ? (
        <div className="sub-header-container">
          <CustomNavLink
            taskType={allTasks}
            linkUrl="/all-tasks"
            navCategory="All Tasks"
            color="#ff6b6b"
          />

          <CustomNavLink
            taskType={completedTasks}
            navCategory="Completed Tasks"
            linkUrl="/completed-tasks"
            color="#cc5de8"
          />

          <CustomNavLink
            taskType={inprogressTasks}
            navCategory="Inprogress Tasks"
            linkUrl="/inprogress-tasks"
            color="#94d82d"
          />
          <CustomNavLink
            taskType={todayTasks}
            navCategory="Today"
            linkUrl="/today-task"
            color="#f06595"
          />
          <CustomNavLink
            taskType={tmrwTasks}
            navCategory="Tomorrow"
            linkUrl="/tomorow-task"
            color="#22b8cf"
          />
          <CustomNavLink
            taskType={thisMonthTasks}
            navCategory="This Month"
            linkUrl="/this-month-task"
            color="#fcc419"
          />

          <NavLink
            activeClassName="active"
            className="navlink-item"
            to="/add-new-task"
          >
            Add New Task
          </NavLink>
        </div>
      ) : (
        <Redirect to="/" />
      )}
      {currentUser ? (
        <p onClick={() => auth.signOut()} className="navlink-item">
          Sign out
        </p>
      ) : (
        <NavLink activeClassName="active" className="navlink-item" to="/signin">
          Sign In
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  allTasks: selectAllTasks,
  completedTasks: selectCompletedTasks,
  inprogressTasks: selectPendingTasks,
  todayTasks: selectTodayTasks,
  tmrwTasks: selectTomorowTasks,
  thisMonthTasks: selectThisMonthTasks,
});

export default connect(mapStateToProps)(Header);
