import { createReducer, on }                from '@ngrx/store';
import * as UserActions                     from '../actions/user.actions';
import { User }                             from 'src/app/models/user.interface';

// USER STATE
export interface UserState {
    user: User | null,
    role: string | null,
}

// USER INITIAL STATE
export const userInitialState: UserState  = {
    user: null,
    role: null
}

// USER REDUCER
export const userReducer = createReducer(
    userInitialState,
    on(UserActions.setUser, (state, { user })   : UserState =>({ ...state, user })),
    on(UserActions.setRole, (state, { role })   : UserState =>({ ...state, role }))
)