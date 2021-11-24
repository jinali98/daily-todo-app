import { taskActionsTypes } from "./tasks.types";

export const updateStatusStart = (item) => ({
  type: taskActionsTypes.UPDATE_STATUS_START,
  payload: item,
});
export const removeTaskStart = (item) => ({
  type: taskActionsTypes.REMOVE_TASK_START,
  payload: item,
});

export const updateTaskStart = (data) => ({
  type: taskActionsTypes.UPDATE_TASK_START,
  payload: data,
});
export const updateTaskSuccess = (item) => ({
  type: taskActionsTypes.SET_TASKS_SUCCESS,
  payload: item,
});
export const updateTaskFailure = (error) => ({
  type: taskActionsTypes.UPDATE_TASK_FAILURE,
  payload: error,
});

export const setTaskStart = (items) => ({
  type: taskActionsTypes.SET_TASKS_START,
  payload: items,
});
export const setTaskSuccess = (items) => ({
  type: taskActionsTypes.SET_TASKS_SUCCESS,
  payload: items,
});
export const setTaskFailure = (error) => ({
  type: taskActionsTypes.SET_TASKS_FAILURE,
  payload: error,
});
