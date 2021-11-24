import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useStyles } from "./snack-bar.styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBarAlert = ({ severity, message }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={true}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBarAlert;
