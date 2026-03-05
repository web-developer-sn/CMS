import { call, put, takeLatest } from "redux-saga/effects"
import api from "../../services/api"
import { LOGIN_REQUEST, loginSuccess, loginFailure, LOGOUT } from "../actions/authActions"
import { LoginPayload } from "../../types/authTypes"

interface LoginAction {
  type: typeof LOGIN_REQUEST
  payload: LoginPayload
}


function* loginSaga(action: LoginAction): Generator {
  try {
    const response = yield call(api.post, "/auth/login", action.payload)

    const token = response.data.token

    localStorage.setItem("token", token)

    yield put(loginSuccess(response.data.user))
  } catch {
    yield put(loginFailure())
  }
}

function* logoutSaga(): Generator {
  localStorage.removeItem("token")
  yield call(api.post, "/logout")
}

export default function* authSaga(): Generator {
  yield takeLatest(LOGIN_REQUEST, loginSaga)
  yield takeLatest(LOGOUT, logoutSaga)
}