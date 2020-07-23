import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DashboardAction } from '../actions';
import { Todo } from 'src/app/components/todo/models';

// Set reducer's feature key
export const FEATURE_KEY = 'todo';

export interface TodoState extends EntityState<Todo> {}

export const adapterTodo: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: todo => todo.id
});

const initialTodoState: TodoState = adapterTodo.getInitialState();

const featureReducer = createReducer(
  initialTodoState,
  //
  on(DashboardAction.addTodo, (state, { todo }) =>
    adapterTodo.upsertOne({ todo, id: 1000 * Math.random() }, { ...state })
  ),
  on(DashboardAction.removeTodo, (state, { todoId }) =>
    adapterTodo.removeOne(todoId, { ...state })
  ),
);

export function reducer(state: TodoState | undefined, action: Action) {
  return featureReducer(state, action);
}
