import { createSelector, createFeatureSelector } from '@ngrx/store';
import { fromDashboard } from '../reducers';

export const getTodoCoreState = createFeatureSelector<fromDashboard.TodoState>(fromDashboard.FEATURE_KEY);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = fromDashboard.adapterTodo.getSelectors(getTodoCoreState);
