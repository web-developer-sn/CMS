import { all, fork } from "redux-saga/effects";
import { watchAuthSaga } from "../sagas/authSaga"; // ✅ Ensure correct path

export function* rootSaga() {
  yield all([fork(watchAuthSaga)]); // ✅ Correct usage
}
