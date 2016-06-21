import {
  INITIALIZE_CHAT,
  ADD_MESSAGE
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_CHAT:
      console.log('inside reducer chat action.payload', action.payload);
      return action.payload;
    //case ADD_MESSAGE:
      //return [ ...state, action.payload ];
    default:
      return state;
  }
}