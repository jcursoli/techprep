import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
  AUTH_USER, 
  UNAUTH_USER,
  AUTH_ERROR,
} from './actionTypes';

const ROOT_URL = 'http://localhost:8080';

export function loginUser() {
  return function(dispatch) {
    dispatch({ type: AUTH_USER });
    browserHistory.push('/welcome');
  }
}

export function signupUser({ email, username, password }) {
  return function(dispatch) {
    dispatch({ type: AUTH_USER });
    browserHistory.push('/welcome');
  }
}

export function signoutUser() {
  return function(dispatch) {
    dispatch({ type: UNAUTH_USER });
  }
}

// export function signinUser({ email, password }) {
//   // Since we're using redux thunk, this action creator
//   // is going to return a function instead of an action.
//   // We're using redux thunk to get direct access to dispatch
//   // and dispatch multiple actions inside an action creator. 
//   console.log('email:', email, 'password:', password);
//   return function(dispatch) {
//     // Submit email/password to server
//     axios.post(`${ROOT_URL}/signin`, { email, password })
//       .then(response => {
//     // If request is good: 
//     // - Update state to indicate user is authenticated
//       console.log('inside response after axios post: response.data', response.data);
//       dispatch({ type: AUTH_USER })
//     // - Save JWT token 
//       localStorage.setItem('token', response.data.token);
//     // - Redirect to the route '/feature'
//       browserHistory.push('/feature');    
//       })
//     // If request is bad:
//     // - Show an error to the user
//       .catch(()=> {
//         console.log('inside catch');
//         dispatch(authError('Bad login info'));
//       });
//   }

// };

// export function signupUser({ email, password }) {
//   return function(dispatch) {
//     axios.post(`${ROOT_URL}/signup`, { email, password })
//       .then(response => {
//         dispatch({ type: AUTH_USER });
//         localStorage.setItem('token', response.data.token);
//         browserHistory.push('/feature');
//       })
//       .catch(response => dispatch(authError(response.data.error)));
//   }
// }

// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// };

// export function signoutUser() {
//   localStorage.removeItem('token');
//   return { type: UNAUTH_USER }
// }