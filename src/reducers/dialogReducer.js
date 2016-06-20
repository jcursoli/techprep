import {
  OPEN_DIALOG,
  CLOSE_DIALOG
} from '../actions/actionTypes';

export default function(state = false, action) {
  switch(action.type){
    case OPEN_DIALOG:
      return { ...state, open: true, answer: action.payload };
      case CLOSE_DIALOG:
      	return{...state, open: false }
    default:
      return state;
  }
}