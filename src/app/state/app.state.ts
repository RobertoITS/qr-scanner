import * as auth from './reducers/auth.reducer'
import * as user from './reducers/user.reducer'
import { createFeatureSelector, createSelector } from '@ngrx/store';

// ESTADO DE LA APLICACION
export interface AppState {
    authState: auth.AuthState,
    userState: user.UserState,

}


// SELECTORES
export const selectAuthFeature = createFeatureSelector<auth.AuthState>('auth')
export const selectUserFeature = (state: AppState) => state.userState


// para seleccionar el token del state
export const selectToken = createSelector(
    selectAuthFeature,
    (state: auth.AuthState) => state.token
)

// para seleccionar 
export const selectIsAuth = createSelector(
    selectAuthFeature,
    (state: auth.AuthState) => !!state.token
)

// para seleccionar si esta loggeado
export const selectIsLogged = createSelector(
    selectAuthFeature,
    (state: auth.AuthState) => state.isAuthenticated
)

// para seleccionar si esta cargando
export const selectIsLoading = createSelector(
    selectAuthFeature,
    (state: auth.AuthState) => state.loading
)

//para seleccionar el usuario
export const selectUser = createSelector(
    selectUserFeature,
    (state: user.UserState) => state.user
)

//para seleccionar el usuario
export const selectRole = createSelector(
    selectUserFeature,
    (state: user.UserState) => state.role
)

