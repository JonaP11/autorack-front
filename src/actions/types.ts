export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_SUCCESS = 'SET_SUCCESS';

export type User = {
  firstName?: string;
  email: string | null;
  id: string;
  createdAt?: any;
}

export type AuthState = {
  user: User | null;
  authenticated: boolean;
  loading: boolean;
  error: string;
  success: string;
}

export type SignUpData = {
  firstName: string;
  email: string;
  password: string;
}

export type SignInData = {
  email: string;
  password: string;
}

// Actions
export type SetUserAction = {
  type: typeof SET_USER;
  payload: User;
}

export type SetLoadingAction = {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type SignOutAction = {
  type: typeof SIGN_OUT;
}

export type SetErrorAction = {
  type: typeof SET_ERROR;
  payload: string;
}

export type SetSuccessAction = {
  type: typeof SET_SUCCESS;
  payload: string;
}

export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | SetSuccessAction;
