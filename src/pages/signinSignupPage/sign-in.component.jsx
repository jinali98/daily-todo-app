import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import TaskHeading from "../../components/task-heading/task-heading.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { ReactComponent as SignInImage } from "../../assets/images/wfh_8.svg";

const Signin = () => {
  return (
    <div>
      <TaskHeading>Sign In</TaskHeading>
      <div style={{ width: "550px" }}>
        <SignInImage />
      </div>
      <CustomButton onClick={signInWithGoogle}>
        Sign in with Google
      </CustomButton>
    </div>
  );
};

export default Signin;
