import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.interface";

//para obtener el usuario
export const setUser = createAction(
    '[User] Set User',
    props<{ user: User }>()
);

//para obtener el rol
export const setRole = createAction(
    '[User] Set Role',
    props<{ role: string }>()
);