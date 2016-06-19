import {
  INITIALIZE_INVITES
} from '../actions/actionTypes';
import _ from 'lodash';

export default function(state = [], action) {
  switch(action.type){
    case INITIALIZE_INVITES:
      console.log('inside INITIALIZE_INVITES');
      return _.uniqBy([ ...state, action.payload ], 'email');
    default:
      return state;
  }
}