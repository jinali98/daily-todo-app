import ALL_TASKS from "../../data/allTask";

import { markCompleted, removeTask } from "./tasks.utils";
import { taskActionsTypes } from "./tasks.types";

const INITIAL_STATE = {
  allTasks: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskActionsTypes.ADD_NEW_TASK:
      return {
        ...state,
        allTasks: [...state.allTasks, action.payload],
      };
    case taskActionsTypes.MARK_AS_COMPLETED:
      return {
        ...state,
        allTasks: markCompleted(state.allTasks, action.payload),
      };
    case taskActionsTypes.REMOVE_TASK:
      return {
        ...state,
        allTasks: removeTask(state.allTasks, action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
