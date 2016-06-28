import {
ALGORITHM_VOTE,
RESPONSE_INITIALIZE
} from '../actions/actionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
  	case RESPONSE_INITIALIZE:
  	console.log('this is the response state init in the reducer', action.payload);
  		return {...action.payload}
    case ALGORITHM_VOTE:
    var newState = _.cloneDeep(state);
      //newState[action.payload.index].userAnswers[action.payload.displayName] = action.payload.answer;
      return newState;
    default:
      return state;
  }
}