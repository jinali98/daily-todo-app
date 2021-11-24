import { takeLatest, call, all, put } from "redux-saga/effects";
import { taskActionsTypes } from "./tasks.types";
import { addDocuments, updateDocuments } from "../../firebase/firebase.utils";
import {
  setTaskFailure,
  setTaskSuccess,
  updateStatusFailure,
  updateStatusSuccess,
  updateTaskFailure,
  updateTaskSuccess,
} from "./tasks.actions";
import { markCompleted } from "./tasks.utils";

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
    const todoUpdateRef = yield call(updateDocuments, id, tasks);
    const snapshot = yield todoUpdateRef.get();
    yield put(updateTaskSuccess(snapshot.data().todo));
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}
export function* statusUpdate({ payload: { allTasks, task, id } }) {
  const updatedTasksList = markCompleted(allTasks, task);

  try {
    const todoUpdateRef = yield call(updateDocuments, id, updatedTasksList);
    const snapshot = yield todoUpdateRef.get();
    yield put(updateStatusSuccess(snapshot.data().todo));
  } catch (error) {
    yield put(updateStatusFailure(error));
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

export function* taskSagas() {
  yield all([call(onSetTasks), call(onUpdateTasks), call(onStatusUpdate)]);
}
