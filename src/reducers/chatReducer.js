import {
  INITIALIZE_CHAT,
  ADD_MESSAGE
} from '../actions/actionTypes';

const fakeChat = [
    {
      username: 'dmusicb',
      profileURL: null,
      time: '10:10 AM, Today',
      message: 'Hi Joey, how are you? How is the project coming along?'
    },
    {
      username: 'jcursoli',
      profileURL: null,
      time: '10:12 AM, Today',
      message: 'Are we meeting today? Project has been already finished and I have results to show you.'
    },
    {
      username: 'dmusicb',
      profileURL: null,
      time: '10:14 AM, Today',
      message: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?'
    },
    {
      username: 'jcursoli',
      profileURL: null,
      time: '10:20 AM, Today',
      message: 'Actually everything was fine. I\'m very excited to show this to our team.'
    }
]

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_CHAT:
      console.log('inside reducer chat');
      return fakeChat;
    case ADD_MESSAGE:
      return [ ...state, action.payload ];
    default:
      return fakeChat;
  }
}