import { createSelector, createFeatureSelector } from '@ngrx/store';
import { fromLogin } from '../reducers';

export const getLoginCoreState = createFeatureSelector<fromLogin.LoginState>(fromLogin.FEATURE_KEY);

export const getUsername = createSelector(
  getLoginCoreState,
  state => state.username
);
