import { createAction } from '@ngrx/store';

export const Request = createAction('[Login Module] Login Request', (username: string, password: string) => ({ username, password }));
export const Success = createAction('[Login Module] Login Success', (token: string) => ({ token }));
export const Failure = createAction('[Login Module] Login Failure', (message: string) => ({ message }));
