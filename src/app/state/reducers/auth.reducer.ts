import { createReducer, on }                from '@ngrx/store';
import * as AuthActions                     from '../actions/auth.actions';
import { Login }                            from 'src/app/models/login.interface';
import { User } from 'src/app/models/user.interface';


// AUTH STATE
export interface AuthState {
    credentials     : Login | null,
    loading         : boolean,
    token           : string,
    isAuthenticated : boolean,
    error           : any | null,
}

// INITIAL STATE
export const authInitialState: AuthState = {
    credentials     : null,
    loading         : false,
    token           : '',
    isAuthenticated : false,
    error           : null,  
} 

// AUTH REDUCER
export const authReducer = createReducer(
    authInitialState,
    on(AuthActions.setToken,        (state, { token })          : AuthState => ({...state, token, loading: true })),
    on(AuthActions.removeToken,     (state)                     : AuthState => ({...state, token: ''})),
    on(AuthActions.loginSuccess,    (state)                     : AuthState => ({...state, isAuthenticated: true })),
    on(AuthActions.getCredentials,  (state, {credentials})      : AuthState => ({...state, credentials})),
    on(AuthActions.loginError,      (state, {error})            : AuthState => ({...state, error })),
)



// export const userReducer = createReducer(
//     userInitialState,
//     on(getCredentials, (authState, {credentials}) => ({...authState, credentials: credentials})),
//     on(loginUser, (authState, {isAuthenticated, user, errorMessage, credentials}) => ({
//         ...authState, 
//         isAuthenticated: isAuthenticated, 
//         user: user, 
//         errorMessage: errorMessage, 
//         credentials: credentials
//     })),
//     on(loginSuccess, (authState, {data}) => ({
//         ...authState,
//         user: data.result[0],
//         isAuthenticated: true,
//     })),
//     on(loginFailure, (authState, {error}) => ({
//         ...authState, 
//         isAuthenticated: false, 
//         errorMessage: error
//     }))
// )

