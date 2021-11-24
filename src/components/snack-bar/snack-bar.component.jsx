import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { createStructuredSelector } from "reselect";
import {
  selectErrorState,
  selectLoadingState,
} from "../../redux/tasks/tasks.selectors";
import { connect } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // "& > * + *": {
    //   marginTop: theme.spacing(2),
    // },
  },
}));

const SnackBarAlert = ({ loading, error, severity, message }) => {
  console.log(loading, error);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  if (error) {
    setOpen(true);
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        {/* {loading && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="info">Loading....</Alert>
          </Snackbar>
        )}
        {error && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert onClose={handleClose} severity="error">
              {error}
            </Alert>
          </Snackbar>
        )} */}
        <Snackbar
          open={true}
          autoHideDuration={1000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity={severity}>{message}</Alert>
        </Snackbar>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  // loading: selectLoadingState,
  // error: selectErrorState,
});

export default connect(mapStateToProps)(SnackBarAlert);
