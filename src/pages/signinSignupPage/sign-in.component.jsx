import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { ReactComponent as SignInImage } from "../../assets/images/wfh_8.svg";
import "./sign-in.styles.css";
const Signin = () => {
  return (
    <div className="sign-in-page">
      <TaskHeading>DAILY-TO-DO</TaskHeading>
      <div className="sign-in-page_image-container">
        <SignInImage />
      </div>
      <CustomButton onClick={signInWithGoogle}>
        Sign in with Google
      </CustomButton>
    </div>
  );
};

export default Signin;
