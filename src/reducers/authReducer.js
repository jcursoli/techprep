import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case AUTH_USER:
      console.log('inside auth reducer user');
      return {...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return {...state, authenticated: false };
    case AUTH_ERROR:
      console.log('autherror reducer', action.payload);
      return {...state, error: action.payload};
    default:
      return state;
  }
}