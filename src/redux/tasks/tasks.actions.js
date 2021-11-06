import { taskActionsTypes } from "./tasks.types";

export const addNewTask = (item) => ({
  type: taskActionsTypes.ADD_NEW_TASK,
  payload: item,
});

export const markAsCompleted = (item) => ({
  type: taskActionsTypes.MARK_AS_COMPLETED,
  payload: item,
});

export const removeTask = (item) => ({
  type: taskActionsTypes.REMOVE_TASK,
  payload: item,
});
