import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";
import {
  signinFailed,
  signinSuccess,
  signOutFail,
  signOutSuccess,
} from "./user.actions";
import { userActionTypes } from "./user.types";
export function* getSnapShotfromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userRefSnapShot = yield userRef.get();
    yield put(
      signinSuccess({ id: userRefSnapShot.id, ...userRefSnapShot.data() })
    );
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* googleSignin() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotfromUserAuth(user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signout() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error));
  }
}

export function* onSignIn() {
  yield takeLatest(userActionTypes.SIGNIN_START, googleSignin);
}
export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signout);
}

export function* userSagas() {
  yield all([call(onSignOut), call(onSignIn)]);
}
