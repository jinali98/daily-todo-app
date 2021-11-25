import { takeLatest, call, all, put } from "redux-saga/effects";
import { taskActionsTypes } from "./tasks.types";
import { addDocuments, updateDocuments } from "../../firebase/firebase.utils";
import {
  setTaskFailure,
  setTaskSuccess,
  updateTaskFailure,
  updateTaskSuccess,
} from "./tasks.actions";
import { markCompleted, removeTask } from "./tasks.utils";

// extracted common code from updateTasks, statusUpdate and deleteTask
export function* update(updateDocuments, id, tasks) {
  try {
    const todoUpdateRef = yield call(updateDocuments, id, tasks);
    const snapshot = yield todoUpdateRef.get();
    yield put(updateTaskSuccess(snapshot.data().todo));
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}

export function* setTasks({ payload }) {
  try {
    const todoRef = yield call(addDocuments, payload);
    const snapshot = yield todoRef.get();
    yield put(setTaskSuccess(snapshot.data().todo));
  } catch (error) {
    yield put(setTaskFailure(error));
  }
}
export function* updateTasks({ payload: { id, tasks } }) {
  try {
    yield update(updateDocuments, id, tasks);
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}
export function* statusUpdate({ payload: { allTasks, task, id } }) {
  const updatedTasksList = markCompleted(allTasks, task);
  try {
    yield update(updateDocuments, id, updatedTasksList);
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}

export function* deleteTask({ payload: { allTasks, task, id } }) {
  const updatedTasksList = removeTask(allTasks, task);
  try {
    yield update(updateDocuments, id, updatedTasksList);
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}

export function* onSetTasks() {
  yield takeLatest(taskActionsTypes.SET_TASKS_START, setTasks);
}
export function* onUpdateTasks() {
  yield takeLatest(taskActionsTypes.UPDATE_TASK_START, updateTasks);
}
export function* onStatusUpdate() {
  yield takeLatest(taskActionsTypes.UPDATE_STATUS_START, statusUpdate);
}
export function* onTaskRemove() {
  yield takeLatest(taskActionsTypes.REMOVE_TASK_START, deleteTask);
}

export function* taskSagas() {
  yield all([
    call(onSetTasks),
    call(onUpdateTasks),
    call(onStatusUpdate),
    call(onTaskRemove),
  ]);
}
