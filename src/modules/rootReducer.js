import { combineReducers } from 'redux';
import messagesReducer from './messages/reducers';


export default combineReducers({

  messages: messagesReducer,
});
