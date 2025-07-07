import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../constants/authConstants";
import { AuthActionTypes } from "../types/authActionTypes"; // ✅ Correct Import

// Auth State Type
interface AuthState {
  type?: string,
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}
const getToken = (): string | null => {
  if (typeof window !== "undefined") { // ✅ Ensure it's client-side
    try {
      const token = localStorage.getItem("token");
      return token && token !== "null" ? token : null; // ✅ Prevent parsing errors
    } catch (error) {
      console.error("Error reading token from localStorage:", error);
      return null;
    }
  }
  return null;
};

const initialState: AuthState = {
  user: null,
  token: getToken(),
  loading: false,
  error: null,
};
// Reducer
const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {

  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null, type: action.type };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload.data.name, token: action.payload.token, type: action.type };

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload, type: action.type };

    case LOGOUT:
      return { ...state, token: null, user: null, type: action.type };

    default:
      return state;
  }
};

export default authReducer;
