import { CardActions, CardContent, Chip, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { markAsCompleted, removeTask } from "../../redux/tasks/tasks.actions";
import CustomCard from "../custom-card/custom-card.component";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteButton, UpdateStatusButton } from "../buttons/buttons.component";

export const useStyles = makeStyles({
  chipsGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  additionalInfo: {
    marginTop: "20px",
  },
  buttonGrp: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const TaskCard = ({ task, updateStatus, removeTask }) => {
  const { title, description, date, duration, importance, status } = task;

  const classess = useStyles();

  const updateTaskStatus = () => {
    updateStatus(task);
  };

  const removeTaskHandler = () => {
    removeTask(task);
  };

  return (
    <CustomCard>
      <CardContent>
        <div className={classess.chipsGroup}>
          <Chip label={importance} color="secondary" />
          <Chip label={status} color="primary" variant="outlined" />
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
  updateStatus: (item) => dispatch(markAsCompleted(item)),
  removeTask: (item) => dispatch(removeTask(item)),
});

export default connect(null, mapDispatchToProps)(TaskCard);
