import { Action } from '@ngrx/store';

import { User } from '../../../shared/models/user.model';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';
export const FETCH_ACTIVE_USER = 'FETCH_ACTIVE_USER';

export class SetUser implements Action {
  readonly type = SET_ACTIVE_USER;

  constructor(public payload: User) {}
}

export class FetchUser implements Action {
  readonly type = FETCH_ACTIVE_USER;
}

export type AuthActions = SetUser | FetchUser;
