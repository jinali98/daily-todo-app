import React from "react";
import { connect } from "react-redux";

import TaskHeading from "../../components/task-heading/task-heading.component";
import { GoogleButton } from "../../components/buttons/buttons.component";
import { signinStarted } from "../../redux/user/user.actions";

import { ReactComponent as SignInImage } from "../../assets/images/wfh_8.svg";
import "./sign-in.styles.scss";

const Signin = ({ signinStart }) => {
  return (
    <div className="sign-in-page">
      <TaskHeading>DAILY</TaskHeading>
      <div className="sign-in-page_image-container">
        <SignInImage />
      </div>
      <GoogleButton onClick={signinStart}>Sign in with Google</GoogleButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signinStart: () => dispatch(signinStarted()),
});
export default connect(null, mapDispatchToProps)(Signin);
