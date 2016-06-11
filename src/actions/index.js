import { browserHistory } from 'react-router';

export function loginUser() {
  return function(dispatch) {
    dispatch({ type: 'AUTHORIZE_USER' });
    browserHistory.push('/welcome');
  }
}

export function signupUser({ email, username, password }) {
  return function(dispatch) {
    dispatch({ type: 'AUTHORIZE_USER' });
    browserHistory.push('/welcome');
  }
}

export function signoutUser() {
  return function(dispatch) {
    dispatch({ type: 'DEAUTHORIZE_USER' });
  }
}