import { AuthState, User } from "../../types/authTypes"
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from "../actions/authActions"

export interface ActionType {
  type: string
  payload?:User
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false
}

export default function authReducer(
  state: AuthState = initialState,
  action: ActionType
): AuthState {

  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }

    case LOGIN_SUCCESS:
    case LOGIN_SUCCESS:
  return {
    ...state,
    user: action.payload??null,
    isAuthenticated: true,
    loading: false
  }

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false
      }

 case LOGOUT_SUCCESS:
  return {
    user: null,
    isAuthenticated: false,
    loading: false
  }
    default:
      return state
  }

}