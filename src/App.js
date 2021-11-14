import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import AllTasks from "./pages/allTasksPage/all-tasks.component";
import CompletedTasks from "./pages/completedTaskPage/completed-tasks.component";
import InProgress from "./pages/inProgressPage/in-progress.component";
import Signin from "./pages/signinSignupPage/sign-in.component";
import NewTask from "./pages/newTaskPage/new-task.component";
import Landing from "./components/landing/landing.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import TodayPage from "./pages/todayPage/today-page.component";
import TomorowPage from "./pages/tomorowPage/tomorow-page.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import "./App.css";
import ThisMonthPage from "./pages/thisMonthPage/this-month-page.component";
import HomePage from "./pages/homePage/home-page.component";
import HeaderNavigation from "./components/header-navigation/header-navigation";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        {this.props.currentUser && <HeaderNavigation />}
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !this.props.currentUser ? <Redirect to="/signin" /> : <HomePage />
            }
          />
          <Route
            path="/all-tasks"
            render={() =>
              !this.props.currentUser ? <Redirect to="/signin" /> : <AllTasks />
            }
          />
          <Route
            path="/completed-tasks"
            render={() =>
              !this.props.currentUser ? (
                <Redirect to="/signin" />
              ) : (
                <CompletedTasks />
              )
            }
          />
          <Route
            path="/inprogress-tasks"
            render={() =>
              !this.props.currentUser ? (
                <Redirect to="/signin" />
              ) : (
                <InProgress />
              )
            }
          />
          <Route
            path="/add-new-task"
            render={() =>
              !this.props.currentUser ? <Redirect to="/signin" /> : <NewTask />
            }
          />
          <Route
            path="/today-task"
            render={() =>
              !this.props.currentUser ? (
                <Redirect to="/signin" />
              ) : (
                <TodayPage />
              )
            }
          />
          <Route
            path="/tomorow-task"
            render={() =>
              !this.props.currentUser ? (
                <Redirect to="/signin" />
              ) : (
                <TomorowPage />
              )
            }
          />
          <Route
            path="/this-month-task"
            component={ThisMonthPage}
            render={() =>
              !this.props.currentUser ? (
                <Redirect to="/signin" />
              ) : (
                <ThisMonthPage />
              )
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Signin />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
