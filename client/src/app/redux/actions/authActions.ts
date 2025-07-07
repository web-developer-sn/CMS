import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from "../constants/authConstants";
export const loginRequest = (email: string, password: string, role: string) => ({
  type: LOGIN_REQUEST,
  payload: { email, password, role },
});

// Register Request
export const registerRequest = (name: string, email: string, password: string, role: string) => ({
  type: REGISTER_REQUEST,
  payload: { name, email, password, role },
});

// Success for both Login & Register
export const authSuccess = (user: any) => {
  localStorage.setItem("token", user.token); // Token store in LocalStorage
  return {
    type: user.isNewUser ? REGISTER_SUCCESS : LOGIN_SUCCESS, // Check if new user
    payload: user,
  };
};

// Failure for both Login & Register
export const authFailure = (error: string, isRegister: boolean) => ({
  type: isRegister ? REGISTER_FAILURE : LOGIN_FAILURE,
  payload: error,
});

// Logout
export const logout = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("role")
  localStorage.removeItem("token"); // Remove token on logout
  return { type: LOGOUT };
};
