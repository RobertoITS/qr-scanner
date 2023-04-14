import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, mergeMap, tap, of, switchMap, exhaustMap } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service'
import * as AuthActions from "../actions/auth.actions";
import * as UserActions from "../actions/user.actions"
import { Login } from "src/app/models/login.interface";



@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AuthActions.login),
        map((action) => action.credentials),
        exhaustMap((auth: Login) => this.authService.login(auth).pipe(
            tap(({token}) => this.cookieService.set('x-token', token, 0.010416667)),
            switchMap( (res) => of(
                AuthActions.getCredentials({credentials: auth}),
                AuthActions.setToken({token: res.token}),
                AuthActions.loginSuccess({user: res.result[0]}),
            ),
            ),
            catchError((error) => of(AuthActions.loginError({error})))
        ))
    ), 
    );

    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router,
        private readonly cookieService: CookieService,
        ) {}
    
}



