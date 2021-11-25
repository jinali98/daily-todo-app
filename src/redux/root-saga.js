import { all, call } from "redux-saga/effects";
import { taskSagas } from "./tasks/tasks.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(taskSagas), call(userSagas)]);
}
