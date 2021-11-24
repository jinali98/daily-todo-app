import { removeTask } from "./tasks.utils";
import { taskActionsTypes } from "./tasks.types";

const INITIAL_STATE = {
  allTasks: [],
  loading: false,
  errorMessage: "",
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskActionsTypes.REMOVE_TASK:
      return {
        ...state,
        allTasks: removeTask(state.allTasks, action.payload),
      };
    case taskActionsTypes.SET_TASKS_START:
    case taskActionsTypes.UPDATE_TASK_START:
    case taskActionsTypes.UPDATE_STATUS_START:
      return {
        ...state,
        loading: true,
      };
    case taskActionsTypes.SET_TASKS_SUCCESS:
    case taskActionsTypes.UPDATE_TASK_SUCCESS:
    case taskActionsTypes.UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        allTasks: action.payload,
      };
    case taskActionsTypes.SET_TASKS_FAILURE:
    case taskActionsTypes.UPDATE_TASK_FAILURE:
    case taskActionsTypes.UPDATE_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
