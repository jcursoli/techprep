import {
  OPEN_DIALOG,
  CLOSE_DIALOG
} from '../actions/actionTypes';

export default function(state = false, action) {
  // console.log('this is the in the reducer and the answer is this==>');
  switch(action.type){
    case OPEN_DIALOG:
      return { ...state, open: true, answer: action.payload };
      case CLOSE_DIALOG:
      	return{...state, open: false }
    default:
      return state;
  }
}