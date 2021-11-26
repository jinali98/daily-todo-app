import React from "react";
import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import { ReactComponent as HomePageImage } from "../../assets/images/wfh_1.svg";
import { ReactComponent as AllTaskPageImage } from "../../assets/images/wfh_9.svg";
import { ReactComponent as CompletedTaskPageImage } from "../../assets/images/wfh_10.svg";
import { ReactComponent as PendingTaskPageImage } from "../../assets/images/wfh_4.svg";
import { ReactComponent as TodayTaskPageImage } from "../../assets/images/wfh_5.svg";
import { ReactComponent as TomorrowTaskPageImage } from "../../assets/images/wfh_7.svg";
import { ReactComponent as ThisMonthPageImage } from "../../assets/images/wfh_6.svg";

import { AddTaskButton } from "../buttons/buttons.component";

import "./landing-content-no-tasks.styles.scss";

const LandingContentNoTasks = ({
  history,
  message,
  buttonText,
  urlParam,
  home,
  all,
  completed,
  pending,
  today,
  tomorrow,
  month,
}) => {
  return (
    <div className="landing-content-empty-wrapper">
      <Typography variant="body1" component="p" color="textPrimary">
        {message}
      </Typography>
      <div className="landing-content-empty-wrapper_image">
        {home && <HomePageImage />}
        {all && <AllTaskPageImage />}
        {completed && <CompletedTaskPageImage />}
        {pending && <PendingTaskPageImage />}
        {today && <TodayTaskPageImage />}
        {tomorrow && <TomorrowTaskPageImage />}
        {month && <ThisMonthPageImage />}
        <AddTaskButton onClick={() => history.push(urlParam)}>
          {buttonText}
        </AddTaskButton>
      </div>
    </div>
  );
};

export default withRouter(LandingContentNoTasks);
