import { taskActionsTypes } from "./tasks.types";

const INITIAL_STATE = {
  allTasks: [],
  loading: false,
  errorMessage: "",
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskActionsTypes.SET_TASKS_START:
    case taskActionsTypes.UPDATE_TASK_START:
    case taskActionsTypes.UPDATE_STATUS_START:
    case taskActionsTypes.REMOVE_TASK_START:
      return {
        ...state,
        loading: true,
        errorMessage: "",
      };
    case taskActionsTypes.SET_TASKS_SUCCESS:
    case taskActionsTypes.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: "",
        allTasks: action.payload,
      };
    case taskActionsTypes.SET_TASKS_FAILURE:
    case taskActionsTypes.UPDATE_TASK_FAILURE:
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
