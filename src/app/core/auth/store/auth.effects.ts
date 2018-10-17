import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { User } from '../../../shared/models/user.model';
import * as UserActions from './auth.actions';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthEffects {
  @Effect()
  userFetch = this.actions$
    .pipe(
      ofType(UserActions.FETCH_ACTIVE_USER),
      switchMap((action: UserActions.FetchUser) => {
        return this.httpClient.get<User>(environment.apiUrl + '/users/current', {
          observe: 'body',
          responseType: 'json'
        });
      }),
      map(
        (activeUser) => {
          return {
            type: UserActions.SET_ACTIVE_USER,
            payload: activeUser
          };
        }
      )
    );

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
