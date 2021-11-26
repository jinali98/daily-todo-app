import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AllTasks from "./pages/allTasksPage/all-tasks.component";
import CompletedTasks from "./pages/completedTaskPage/completed-tasks.component";
import InProgress from "./pages/inProgressPage/in-progress.component";
import Signin from "./pages/signinSignupPage/sign-in.component";
import NewTask from "./pages/newTaskPage/new-task.component";
import TodayPage from "./pages/todayPage/today-page.component";
import TomorowPage from "./pages/tomorowPage/tomorow-page.component";
import ThisMonthPage from "./pages/thisMonthPage/this-month-page.component";
import HomePage from "./pages/homePage/home-page.component";

import { setCurrentUser, signinStarted } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setTaskStart } from "./redux/tasks/tasks.actions";
import {
  selectErrorState,
  selectLoadingState,
} from "./redux/tasks/tasks.selectors";

import HeaderNavigation from "./components/header-navigation/header-navigation";
import SnackBarAlert from "./components/snack-bar/snack-bar.component";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const App = ({ loading, error, currentUser, setTasksStart }) => {
  useEffect(() => {
    if (currentUser) {
      setTasksStart(currentUser.id);
    }
  }, [currentUser, setTasksStart]);

  return (
    <ThemeProvider theme={theme}>
      {loading && <SnackBarAlert message="working on it..." severity="info" />}
      {error && <SnackBarAlert message={error} severity="error" />}
      <div className="dashboard-wrapper">
        {currentUser && <HeaderNavigation />}
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !currentUser ? <Redirect to="/signin" /> : <HomePage />
            }
          />
          <Route
            path="/all-tasks"
            render={() =>
              !currentUser ? <Redirect to="/signin" /> : <AllTasks />
            }
          />
          <Route
            path="/completed-tasks"
            render={() =>
              !currentUser ? <Redirect to="/signin" /> : <CompletedTasks />
            }
          />
          <Route
            path="/inprogress-tasks"
            render={() =>
              !currentUser ? <Redirect to="/signin" /> : <InProgress />
            }
          />
          <Route
            path="/add-new-task"
            render={() =>
              !currentUser ? <Redirect to="/signin" /> : <NewTask />
            }
          />
          <Route
            path="/today-task"
            render={() =>
              !currentUser ? <Redirect to="/signin" /> : <TodayPage />
            }
          />
          <Route
            path="/tomorow-task"
            render={() =>
              !currentUser ? <Redirect to="/signin" /> : <TomorowPage />
            }
          />
          <Route
            path="/this-month-task"
            component={ThisMonthPage}
            render={() =>
              !currentUser ? <Redirect to="/signin" /> : <ThisMonthPage />
            }
          />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Signin />)}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loading: selectLoadingState,
  error: selectErrorState,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setTasksStart: (uid) => dispatch(setTaskStart(uid)),
  signinStart: () => dispatch(signinStarted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
