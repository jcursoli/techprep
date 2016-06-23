import {
  INITIALIZE_INVITES,
  REMOVE_INVITE
} from '../actions/actionTypes';
import _ from 'lodash';

export default function(state = [], action) {
  switch(action.type){
    case INITIALIZE_INVITES:
      return _.uniqBy([ ...state, action.payload ], 'email');
    case REMOVE_INVITE:
    // console.log('INSIDE REMOVE INVITE:', action.payload);
      var newState = [ ...state ];
      return _.remove(newState, friend => friend.email !== action.payload.email);
    default:
      return state;
  }
}