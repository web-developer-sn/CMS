import { AuthState, User } from "../../types/authTypes"
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
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
      return {
        ...state,
        loading: false,
        user: action.payload??null,
        isAuthenticated: true
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false
      }

    case LOGOUT:
      return {
        ...initialState
      }

    default:
      return state
  }

}