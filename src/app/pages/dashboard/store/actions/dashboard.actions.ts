import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Dashboard] Add Todo', props<{ todo: string }>());
export const removeTodo = createAction('[Dashboard] Remove Todo', props<{ todoId: number }>());
