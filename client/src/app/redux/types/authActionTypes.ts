import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../constants/authConstants";

// Define Login Actions
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: { email: string; password: string };
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: { data: any; token: string };
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

// Define Register Actions
export interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
  payload: { email: string; password: string };
}

export interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: { data: any; token: string };
}

export interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: string;
}

// Define Logout Action
export interface LogoutAction {
  type: typeof LOGOUT;
}

// ✅ Export Individual Action Types
export type LoginAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction;
export type RegisterAction = RegisterRequestAction | RegisterSuccessAction | RegisterFailureAction;

// ✅ Combine All Actions
export type AuthActionTypes = LoginAction | RegisterAction | LogoutAction;
