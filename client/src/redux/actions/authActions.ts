import { LoginPayload, User } from "../../types/authTypes"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

export const loginRequest = (data: LoginPayload) => ({
  type: LOGIN_REQUEST,
  payload: data
})

export const loginSuccess = (user: User) => ({
  type: LOGIN_SUCCESS,
  payload: user
})

export const loginFailure = () => ({
  type: LOGIN_FAILURE
})

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})