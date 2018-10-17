import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../core/auth/store/auth.reducers';

export interface AppState {
  activeUser: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  activeUser: fromAuth.authReducer
};
