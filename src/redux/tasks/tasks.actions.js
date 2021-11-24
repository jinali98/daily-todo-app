import { taskActionsTypes } from "./tasks.types";

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

export const updateStatusStart = (item) => ({
  type: taskActionsTypes.UPDATE_STATUS_START,
  payload: item,
});
export const updateStatusSuccess = (item) => ({
  type: taskActionsTypes.UPDATE_STATUS_SUCCESS,
  payload: item,
});
export const updateStatusFailure = (error) => ({
  type: taskActionsTypes.UPDATE_STATUS_FAILURE,
  payload: error,
});

export const removeTask = (item) => ({
  type: taskActionsTypes.REMOVE_TASK,
  payload: item,
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
