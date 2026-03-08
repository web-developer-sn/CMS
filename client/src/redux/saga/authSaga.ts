import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../services/api";
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  loginSuccess,
  loginFailure,
  logoutSuccess
} from "../actions/authActions";
import { LoginPayload } from "../../types/authTypes";

interface LoginAction {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
}

function* loginSaga(action: LoginAction): Generator {
  try {

    const response: any = yield call(api.post, "/auth/login", action.payload);

    const token = response.data.token;
    const user = response.data.user;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    yield put(loginSuccess(user));

  } catch (error) {
    yield put(loginFailure());
  }
}

function* logoutSaga(): Generator {
  try {

    // optional API logout
    yield call(api.post, "/auth/logout");

    // clear storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // reset redux state
    yield put(logoutSuccess());

    // redirect login
    window.location.href = "/login";

  } catch (error) {
    console.error("Logout failed", error);
  }
}

export default function* authSaga(): Generator {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}