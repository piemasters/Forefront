import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromAuth from '../core/auth/store/auth.reducers';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {
  router: any;
  activeUser: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  activeUser: fromAuth.authReducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
