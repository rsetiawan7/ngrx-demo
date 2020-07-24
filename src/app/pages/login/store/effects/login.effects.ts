import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, tap, exhaustMap } from 'rxjs/operators';
import { LoginAction } from '../actions';
import { LoginApiService } from '../../services';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects {
    loginRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginAction.Request),
            map(({ username, password }) => ({ username, password })),
            exhaustMap(({ username, password }) =>
              this.loginService.login(username, password).pipe(
                map(token => LoginAction.Success(token)),
                catchError((err) => of(LoginAction.Failure(JSON.stringify(err))))
              )
            ),
        )
    );

    loginFailure$ = createEffect(() =>
      this.actions$.pipe(
        ofType(LoginAction.Failure),
        tap(({ message }) => alert(`Login gagal. Received error: <br/>${ message }`))
      ), { dispatch: false }
    );

    loginSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(LoginAction.Success),
        tap(() => this.router.navigate(['/dashboard']))
      ), { dispatch: false }
    );
    // !SECTION

    constructor(
        private actions$: Actions,
        private router: Router,
        private loginService: LoginApiService,
    ) {}
}
