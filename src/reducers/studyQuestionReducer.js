import {
  ADD_STUDY_QUESTION
} from '../actions/actionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
    case ADD_STUDY_QUESTION:
      return _.map(action.payload, (obj) => obj);
    default:
      return state;
  }
}