import {
  CURRENT_ALGORITHM,
  ANSWER_SUBMIT
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case CURRENT_ALGORITHM:
      return action.payload;
      case ANSWER_SUBMIT:
      var newState = _.cloneDeep(state);
      newState.algorithm.userAnswers[action.payload.displayName] = action.payload.answer;
      return newState;
    default:
      return state;
  }
}