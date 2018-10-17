import { User } from '../../../shared/models/user.model';
import * as AuthActions from './auth.actions';

export interface State {
  activeUser: User;
}

const initialState: State = {
  activeUser: new User(1, 'Test User', 'GUEST')
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload
      };
    default:
      return state;
  }
}
