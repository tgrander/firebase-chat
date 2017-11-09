import { combineReducers } from 'redux';
import messagesReducer from './messages/reducers';
import authReducer from './auth/reducers';


export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
});
