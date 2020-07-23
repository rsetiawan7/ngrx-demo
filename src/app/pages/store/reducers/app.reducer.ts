import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
  router: RouterReducerState;
}

export const reducers = new InjectionToken<ActionReducerMap<State>>('Root Reducer', {
  factory: () => ({
      router: routerReducer,
  }),
});
