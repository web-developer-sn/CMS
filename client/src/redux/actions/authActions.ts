import { LoginPayload, User } from "../../types/authTypes"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const LOGOUT = "LOGOUT"

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

export const logout = () => ({
  type: LOGOUT
})