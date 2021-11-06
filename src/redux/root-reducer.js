import { combineReducers } from "redux";
import taskReducer from "./tasks/tasks.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  allTasks: taskReducer,
});
