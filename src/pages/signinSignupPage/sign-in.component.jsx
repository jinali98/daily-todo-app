import React from "react";
import TaskHeading from "../../components/task-heading/task-heading.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { ReactComponent as SignInImage } from "../../assets/images/wfh_8.svg";
import "./sign-in.styles.css";
import { GoogleButton } from "../../components/buttons/buttons.component";

const Signin = () => {
  return (
    <div className="sign-in-page">
      <TaskHeading>DAILY-TO-DO</TaskHeading>
      <div className="sign-in-page_image-container">
        <SignInImage />
      </div>
      <GoogleButton onClick={signInWithGoogle}>
        Sign in with Google
      </GoogleButton>
    </div>
  );
};

export default Signin;
