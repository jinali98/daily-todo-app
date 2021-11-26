import React from "react";

import Landing from "../../components/landing/landing.component";
import TaskContainerWrapper from "../../components/task-container-wrapper/task-container-wrapper.component";

const HomePage = () => {
  return (
    <TaskContainerWrapper>
      <Landing />
    </TaskContainerWrapper>
  );
};

export default HomePage;
