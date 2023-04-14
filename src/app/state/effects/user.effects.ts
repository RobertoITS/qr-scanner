import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, mergeMap, tap, of, switchMap, exhaustMap } from "rxjs";
import { AuthService } from '../../services/auth.service'
import * as AuthActions from "../actions/auth.actions";
import * as UserActions from "../actions/user.actions"

@Injectable()
export class UserEffects {

    loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        switchMap((res) => of(
            UserActions.setUser({user: res.user}),
            UserActions.setRole({role: res.user.role})
        )),
        
    ), {dispatch: true})

    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router,
    
        ) {}
}