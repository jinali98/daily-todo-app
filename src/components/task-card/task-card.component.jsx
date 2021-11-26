import React from "react";
import { CardActions, CardContent, Chip, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  updateStatusStart,
  removeTaskStart,
} from "../../redux/tasks/tasks.actions";
import CustomCard from "../custom-card/custom-card.component";
import { DeleteButton, UpdateStatusButton } from "../buttons/buttons.component";
import { taskPriorLevels } from "../../constants/taskPriorityLevels";
import { taskTypes } from "../../constants/taskTypes";
import { selectAllTasks } from "../../redux/tasks/tasks.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { useStyles } from "./task-card.styles";

const TaskCard = ({
  task,
  updateStatus,
  removeTask,
  allTasks,
  currentUser,
}) => {
  const { title, description, date, duration, importance, status } = task;

  const classess = useStyles();

  const updateTaskStatus = () => {
    updateStatus(allTasks, task, currentUser.id);
  };

  const removeTaskHandler = () => {
    removeTask(allTasks, task, currentUser.id);
  };

  return (
    <CustomCard>
      <CardContent>
        <div className={classess.chipsGroup}>
          <Chip
            label={importance}
            style={{ backgroundColor: `${taskPriorLevels[importance].color}` }}
            color="primary"
          />
          <Chip
            label={status}
            color="primary"
            style={{ backgroundColor: `${taskTypes[status].color}` }}
          />
        </div>
        <Typography variant="h5" component="h2" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="body2" component="p" color="textPrimary">
          {description}
        </Typography>
        <div className={classess.additionalInfo}>
          <Typography variant="body2" component="p" color="textPrimary">
            {date}
          </Typography>
          <Typography variant="body2" component="p">
            {` ${duration} hr`}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classess.buttonGrp}>
        <UpdateStatusButton onClick={updateTaskStatus}>
          Mark as{status === "completed" ? " Pending" : " Completed"}
        </UpdateStatusButton>
        <DeleteButton onClick={removeTaskHandler}>remove</DeleteButton>
      </CardActions>
    </CustomCard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateStatus: (allTasks, task, id) =>
    dispatch(updateStatusStart({ allTasks, task, id })),
  removeTask: (allTasks, task, id) =>
    dispatch(removeTaskStart({ allTasks, task, id })),
});

const mapStateToProps = createStructuredSelector({
  allTasks: selectAllTasks,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);
