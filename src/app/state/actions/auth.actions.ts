import { createAction, props } from "@ngrx/store";
import { Login } from "src/app/models/login.interface";
import { User } from "src/app/models/user.interface";

// ACCIONES

// para obtener las credenciales
export const getCredentials =  createAction(
    '[Login Page] Get Credentials',
    props<{credentials: Login}>()
)

// para obtener el token
export const setToken = createAction(
    '[Auth] Set Token',
    props<{ token: string }>()
);


// para eliminar el token
export const removeToken = createAction('[Auth] Remove Token');

// para el login
export const login = createAction(
    "[Auth] Login",
    props<{ credentials: Login }>()
  );

export const loginSuccess = createAction(
    "[Auth] LoginSuccess",
    props<{ user: User}>()
)

// si hay un error de autenticacion  
export const loginError = createAction(
"[Auth] Login",
props<{ error: any}>()
);

// para el logout
export const logout = createAction("[Auth] Log Out");

//LOADING ACTIONS
export const loading = createAction(
    '[Auth] Loading',
    
);












