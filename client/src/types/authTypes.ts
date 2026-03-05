export interface User {
  password?: string
  name?: string
  email?: string
  role?:string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
}

export interface LoginPayload {
  email?: string
  password?: string
  role?:string
}