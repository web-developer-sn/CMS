import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/authConstants";
import { loginUserAPI, registerUserAPI } from "../services/authService";
import { LoginAction, RegisterAction } from "../types/authActionTypes";

// Define the expected structure of payload
interface AuthPayload {
  role?: string,
  name?: string,
  email: string;
  password: string;
}

// Define the response structure
interface AuthResponse {
  role?: string,
  name?: string,
  token: string;
  user: any;
}

// Login Saga
function* loginSaga(action: LoginAction) {
  try {
    const { email, password, role }: AuthPayload = action.payload as AuthPayload; // ✅ Ensure payload structure
    const response: AuthResponse = yield call(loginUserAPI, email, password, role);

    if (response?.token) {
      console.log("role", response)
      localStorage.setItem("role", response.data?.role)
      localStorage.setItem("user", response.data?.name)
      localStorage.setItem("token", response.token); // ✅ Store token safely
    }

    yield put({ type: LOGIN_SUCCESS, payload: response });
  } catch (error: any) {
    yield put({
      type: LOGIN_FAILURE,
      payload: error?.response?.data?.message || error.message || "Login failed",
    });
  }
}

// Register Saga
function* registerSaga(action: RegisterAction) {
  try {
    const { name, email, password, role }: AuthPayload = action.payload as AuthPayload; // Ensure payload structure

    // Modify to pass the function and arguments as one object
    const response: AuthResponse = yield call(() => registerUserAPI(name as string, email, password, role as string));

    if (response?.token) {
      localStorage.setItem("token", JSON.stringify(response.token)); // Safely store token
    }

    yield put({ type: REGISTER_SUCCESS, payload: response });
  } catch (error: any) {
    yield put({
      type: REGISTER_FAILURE,
      payload: error?.response?.data?.message || error.message || "Registration failed",
    });
  }
}

// Watcher Saga
export function* watchAuthSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
