import {
  OPEN_DIALOG,
  CLOSE_DIALOG
} from '../actions/actionTypes';

export default function(state = false, action) {
  switch(action.type){
    case OPEN_DIALOG:
      console.log('inside dialog reducer');
      return { ...state };
      case CLOSE_DIALOG:
      	return{...state}
    default:
      return state;
  }
}