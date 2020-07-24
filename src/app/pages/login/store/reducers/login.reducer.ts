import { createReducer, on, Action } from '@ngrx/store';
import { Login } from '../../models/login.model';
import { LoginAction } from '../actions';

// Set reducer's feature key
export const FEATURE_KEY = 'login';

export interface LoginState extends Login {
  errorMessage: string;
  isLoading: boolean;
}

const initialState: LoginState = {
  username: null,
  token: null,
  errorMessage: null,
  isLoading: false
};

const featureReducer = createReducer(
  initialState,
  //
  on(LoginAction.Request, (state, { username }) =>
    ({ ...state, username, isLoading: true })
  ),
  on(LoginAction.Failure, (state, { message: errorMessage }) =>
    ({ ...state, errorMessage, isLoading: false })
  ),
  on(LoginAction.Success, (state, { token }) =>
    ({ ...state, isLoading: false, token })
  )
);

export function reducer(state: LoginState | undefined, action: Action) {
  return featureReducer(state, action);
}
