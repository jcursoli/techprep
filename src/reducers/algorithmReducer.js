import {
  INITIALIZE_ALGORITHMS,
  ANSWER_SUBMIT
} from '../actions/actionTypes';
import _ from 'lodash';

export default function(state = [], action) {
  switch(action.type){
    case INITIALIZE_ALGORITHMS:
      return [ ...action.payload ];
      case ANSWER_SUBMIT:
      var newState = _.cloneDeep(state);
      console.log('entering answer submit',newState[action.payload.index].userAnswers[action.payload.displayName])
      newState[action.payload.index].userAnswers[action.payload.displayName] = action.payload.answer;
      return newState;
    default:
      return state;
  }
}