import {
  INITIALIZE_INVITES
} from '../actions/actionTypes';

export default function(state = [], action) {
  switch(action.type){
    case INITIALIZE_INVITES:
      console.log('inside INITIALIZE_INVITES');
      return [...state, action.payload ];
    default:
      return state;
  }
}