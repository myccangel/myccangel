import { AppInitialState } from "../AppInitialState";
import { Action, createReducer, on } from '@ngrx/store';
import { RegisterState } from './RegisterState';
import { register, registerFail, registerSuccess } from "./register.actions";

const initialState = AppInitialState.register;

const reducer = createReducer(initialState,
  on(register, state => {
    return {
      ...state,
      error: null,
      isRegistered: false,
      isRegistering: true
    }
  }),
  on(registerSuccess, state => {
    return {
      ...state,
      error: null,
      isRegistered: true,
      isRegistering: false
    }
  }),
  on(registerFail, (state, action) => {
    return {
      ...state,
      error: action.error,
      isRegistered: false, // Updated to false
      isRegistering: false
    }
  }),
);

export function registerReducer(state: RegisterState | undefined, action: Action) {
  return reducer(state, action);
}
